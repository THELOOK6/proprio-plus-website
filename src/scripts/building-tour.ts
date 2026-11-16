// Scroll-driven 3D tour of a building, rendered as a clean architectural model.
// The camera moves between a few "stops"; each stop can tint one part of the
// building in the brand accent. Progress is driven from outside (see BuildingTour.astro):
// 0 = first stop, 1 = second stop, etc. Fractions are in-between camera moves.
import * as THREE from 'three';

type Part = 'roof' | 'units' | 'entrance';

interface Stop {
  target: [number, number, number];
  azimuth: number; // degrees around the building, 0 = facing the front
  elevation: number; // degrees above the horizon
  distance: number;
  highlight?: Part;
}

const STOPS: Stop[] = [
  { target: [1, 6, 1], azimuth: 35, elevation: 18, distance: 52 },
  { target: [0, 11, -0.5], azimuth: 125, elevation: 40, distance: 38, highlight: 'roof' },
  { target: [0, 6.5, 7], azimuth: -30, elevation: 8, distance: 34, highlight: 'units' },
  { target: [1.5, 4, 8], azimuth: 20, elevation: 8, distance: 29, highlight: 'entrance' },
];

const C = {
  wall: 0xece5d8,
  trim: 0xf8f5ef,
  glass: 0x5b544c,
  glassLit: 0xf2c9a8,
  metal: 0x4d4843,
  door: 0x4d4843,
  roof: 0xd8d0c2,
  leaf: 0xdcd5c6,
  accent: 0xd4763f,
};

// Building dimensions (metres)
const W = 12, D = 14, FLOORS = 4, FH = 3.1, H = FLOORS * FH;

export interface Tour {
  setProgress(t: number): void;
  dispose(): void;
}

export function createTour(canvas: HTMLCanvasElement, opts: { reducedMotion: boolean }): Tour {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.NeutralToneMapping;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.5, 400);

  // ---- Lights ----
  scene.add(new THREE.HemisphereLight(0xfffaf2, 0xd9cfbf, 1.6));
  const sun = new THREE.DirectionalLight(0xfff1e0, 2.4);
  sun.position.set(16, 26, 14);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -22;
  sun.shadow.camera.right = 22;
  sun.shadow.camera.top = 22;
  sun.shadow.camera.bottom = -22;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.02;
  scene.add(sun);

  // ---- Materials ----
  const mat = (color: number, rough = 0.9) => new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: 0 });
  const wall = mat(C.wall);
  const trim = mat(C.trim);
  const metal = mat(C.metal, 0.6);
  const leaf = mat(C.leaf);
  const roofMat = mat(C.roof);
  const glass = new THREE.MeshStandardMaterial({ color: C.glass, roughness: 0.25, metalness: 0.1, emissive: C.accent, emissiveIntensity: 0 });
  const doorMat = mat(C.door, 0.6);

  const box = (w: number, h: number, d: number, x: number, y: number, z: number, m: THREE.Material, parent: THREE.Object3D = scene) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  };

  // ---- Ground: shadow only, so the section background shows through ----
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.ShadowMaterial({ opacity: 0.16 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  box(W + 14, 0.08, 4.2, 0, 0.04, D / 2 + 5.4, trim); // sidewalk

  // ---- Body, floor bands, cornice ----
  box(W, H, D, 0, H / 2, 0, wall);
  for (let f = 1; f < FLOORS; f++) box(W + 0.12, 0.14, D + 0.12, 0, f * FH, 0, trim);
  box(W + 0.7, 0.4, D + 0.7, 0, H + 0.2, 0, trim);

  // ---- Roof: membrane, parapet, equipment ----
  box(W - 0.3, 0.06, D - 0.3, 0, H + 0.43, 0, roofMat);
  const pH = 0.7, pT = 0.25;
  box(W + 0.7, pH, pT, 0, H + 0.4 + pH / 2, D / 2 + 0.35 - pT / 2, trim);
  box(W + 0.7, pH, pT, 0, H + 0.4 + pH / 2, -D / 2 - 0.35 + pT / 2, trim);
  box(pT, pH, D + 0.7, W / 2 + 0.35 - pT / 2, H + 0.4 + pH / 2, 0, trim);
  box(pT, pH, D + 0.7, -W / 2 - 0.35 + pT / 2, H + 0.4 + pH / 2, 0, trim);
  box(2.6, 2.4, 2.6, -3.2, H + 1.6, -3.5, wall); // stair bulkhead
  box(1.8, 1.0, 1.2, 2.5, H + 0.95, -2, roofMat); // HVAC units
  box(1.8, 1.0, 1.2, 2.5, H + 0.95, 0.2, roofMat);
  box(1.0, 0.25, 1.0, 1.2, H + 0.6, 3.6, roofMat); // roof hatch

  // ---- Windows ----
  const windows: THREE.Mesh[] = [];
  const addWindow = (x: number, y: number, z: number, face: 'front' | 'back' | 'left' | 'right') => {
    const rot = { front: 0, back: Math.PI, left: -Math.PI / 2, right: Math.PI / 2 }[face];
    const g = new THREE.Group();
    g.rotation.y = rot;
    g.position.set(x, y, z);
    box(1.75, 2.15, 0.12, 0, 0, 0.06, trim, g); // frame
    windows.push(box(1.45, 1.85, 0.14, 0, 0, 0.08, glass, g)); // glass
    box(1.95, 0.1, 0.3, 0, -1.12, 0.15, trim, g); // sill
    scene.add(g);
  };
  const frontX = [-3.6, 0, 3.6];
  const sideZ = [-4.8, -1.6, 1.6, 4.8];
  for (let f = 0; f < FLOORS; f++) {
    const y = f * FH + 1.65;
    frontX.forEach((x) => {
      if (!(f === 0 && x === 0)) addWindow(x, y, D / 2, 'front'); // ground-floor centre is the door
      addWindow(x, y, -D / 2, 'back');
    });
    sideZ.forEach((z) => {
      addWindow(W / 2, y, z, 'right');
      addWindow(-W / 2, y, z, 'left');
    });
  }

  // ---- Balconies (floors 2-4, right bay) with railings ----
  const bx = 3.6, bw = 3.6, bd = 1.5;
  for (let f = 1; f < FLOORS; f++) {
    const y = f * FH;
    box(bw, 0.16, bd, bx, y, D / 2 + bd / 2, trim);
    box(bw, 0.06, 0.06, bx, y + 1.05, D / 2 + bd - 0.03, metal); // top rail
    box(0.06, 0.06, bd, bx - bw / 2 + 0.03, y + 1.05, D / 2 + bd / 2, metal);
    box(0.06, 0.06, bd, bx + bw / 2 - 0.03, y + 1.05, D / 2 + bd / 2, metal);
    for (let i = 0; i <= 12; i++) box(0.035, 1.0, 0.035, bx - bw / 2 + 0.05 + (i * (bw - 0.1)) / 12, y + 0.55, D / 2 + bd - 0.03, metal);
  }

  // ---- Exterior staircase: street to the second-floor balcony (a Montreal classic) ----
  const steps = 13, rise = FH / steps, tread = 0.3, sw = 1.1, sx = bx + bw / 2 - sw / 2 - 0.05;
  const z0 = D / 2 + bd; // top of the stair, at the balcony edge
  for (let i = 0; i < steps; i++) {
    box(sw, 0.06, tread, sx, FH - (i + 1) * rise + 0.03, z0 + tread / 2 + i * tread, metal);
  }
  const run = steps * tread, len = Math.hypot(run, FH), ang = Math.atan2(FH, run);
  [-1, 1].forEach((s) => {
    const rail = box(0.06, 0.06, len, sx + (s * sw) / 2, FH / 2 + 0.95, z0 + run / 2, metal);
    rail.rotation.x = ang;
    const stringer = box(0.05, 0.22, len, sx + (s * sw) / 2, FH / 2, z0 + run / 2, metal);
    stringer.rotation.x = ang;
  });

  // ---- Entrance: door, canopy, steps ----
  box(1.5, 2.5, 0.14, 0, 1.25 + 0.3, D / 2 + 0.07, doorMat);
  box(1.8, 2.75, 0.1, 0, 1.4 + 0.3, D / 2 + 0.03, trim);
  box(2.6, 0.14, 1.2, 0, 3.0, D / 2 + 0.6, trim);
  box(2.6, 0.15, 1.0, 0, 0.075, D / 2 + 0.5, trim);
  box(2.6, 0.15, 0.6, 0, 0.225, D / 2 + 0.3, trim);

  // ---- Street trees ----
  [-8.5, 9].forEach((x, i) => {
    box(0.25, 2.6, 0.25, x, 1.3, D / 2 + 5.4, metal);
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(i ? 1.8 : 2.1, 1), leaf);
    crown.position.set(x, 3.9, D / 2 + 5.4);
    crown.castShadow = true;
    scene.add(crown);
  });

  // ---- Camera + highlight interpolation ----
  const base = { roof: new THREE.Color(C.roof), glass: new THREE.Color(C.glass), door: new THREE.Color(C.door) };
  const accent = new THREE.Color(C.accent);
  const lit = new THREE.Color(C.glassLit);
  const tgt = new THREE.Vector3();
  const tmp = new THREE.Vector3();
  const rad = THREE.MathUtils.degToRad;
  const ease = (x: number) => x * x * (3 - 2 * x);

  const weight = (t: number, part: Part) => {
    const i = STOPS.findIndex((s) => s.highlight === part);
    return Math.max(0, 1 - Math.abs(t - i));
  };

  let narrow = false;
  const pose = (t: number) => {
    const max = STOPS.length - 1;
    t = THREE.MathUtils.clamp(t, 0, max);
    const i = Math.min(Math.floor(t), max - 1);
    const f = ease(t - i);
    const a = STOPS[i], b = STOPS[i + 1];
    const lerp = (x: number, y: number) => x + (y - x) * f;
    const az = rad(lerp(a.azimuth, b.azimuth));
    const el = rad(lerp(a.elevation, b.elevation));
    const dist = lerp(a.distance, b.distance) * (narrow ? 1.3 : 1);
    tgt.set(lerp(a.target[0], b.target[0]), lerp(a.target[1], b.target[1]), lerp(a.target[2], b.target[2]));
    tmp.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).multiplyScalar(dist);
    camera.position.copy(tgt).add(tmp);
    camera.lookAt(tgt);

    const wr = ease(weight(t, 'roof')), wu = ease(weight(t, 'units')), we = ease(weight(t, 'entrance'));
    roofMat.color.copy(base.roof).lerp(accent, wr * 0.5);
    glass.color.copy(base.glass).lerp(lit, wu * 0.85);
    glass.emissiveIntensity = wu * 0.15;
    doorMat.color.copy(base.door).lerp(accent, we * 0.8);
    renderer.render(scene, camera);
  };

  // ---- Sizing ----
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    narrow = camera.aspect < 1;
    camera.updateProjectionMatrix();
    pose(current);
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  // ---- Smoothed progress: ease toward the scroll position, render only while moving ----
  let current = 0, target = 0, raf = 0;
  const tick = () => {
    current += (target - current) * 0.09;
    if (Math.abs(target - current) < 0.0005) current = target;
    pose(current);
    raf = current === target ? 0 : requestAnimationFrame(tick);
  };

  resize();

  return {
    setProgress(t) {
      target = opts.reducedMotion ? Math.round(t) : t;
      if (opts.reducedMotion) {
        current = target;
        pose(current);
      } else if (!raf) raf = requestAnimationFrame(tick);
    },
    dispose() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) o.geometry.dispose();
      });
      renderer.dispose();
    },
  };
}
