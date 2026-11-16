import type { Content } from './fr';

const en: Content = {
  ui: {
    nav: { home: 'Home', about: 'About', services: 'Services', contact: 'Contact Us' },
    skip: 'Skip to content',
    menu: 'Menu',
    menuClose: 'Close',
    langLabel: 'Language',
    mainNav: 'Main navigation',
    footer: {
      tagline: 'Helping you enjoy ownership — without the headaches.',
      navigate: 'Navigate',
      contact: 'Contact',
      legal: 'Legal',
      region: 'Greater Montreal, Laval, North Shore & South Shore',
      rights: 'All rights reserved.',
    },
    legal: { privacy: 'Privacy Policy', terms: 'Terms of Service' },
    lastUpdated: 'Last updated',
    notFound: { title: 'Page not found', message: 'Sorry, the page you are looking for does not exist.', back: 'Go back home' },
  },

  home: {
    seo: {
      title: 'Property Management in Montreal & Laval | Gestion Proprio Alliance',
      description:
        'Management of plexes, income properties, condo syndicates and commercial buildings in Montreal, Laval, North Shore and South Shore. Free estimate.',
    },
    hero: {
      eyebrow: 'Property management · Greater Montreal',
      title: 'Property management for plexes, condos and commercial buildings in *Greater Montreal*',
      description:
        'Residential multiplexes, commercial spaces or a condo syndicate: we handle it all. Our expert team runs daily operations, optimizes your returns and protects your assets across Greater Montreal.',
      cta: 'Get a Free Estimate',
      caption: 'Residential · Commercial · Condo',
      imageAlt: 'Eight-storey red brick apartment building in an urban neighbourhood',
    },
    facts: [
      { value: 'Greater Montreal', label: 'Laval, North Shore & South Shore' },
      { value: '24/7', label: 'Technical emergency support' },
      { value: 'Licensed broker', label: 'On our executive team' },
      { value: 'TAL', label: 'Strict lease compliance' },
    ],
    services: {
      eyebrow: 'Our expertise',
      title: 'Comprehensive property management — *handled with precision*',
      description:
        'We take the day-to-day burden of rental management off your hands: finding reliable tenants, collecting rent, maintenance and legal compliance. We take care of every detail so your property stays profitable and protected.',
      cta: 'Explore our solutions',
      items: [
        { title: 'Residential & multi-unit management', description: 'Full-service management for your plexes, multiplexes, and residential portfolios. We handle leasing, rent collection, and strict compliance with TAL regulations.' },
        { title: 'Commercial property management', description: 'Expert administration of retail spaces, offices, and industrial properties. We manage commercial leases, common area maintenance (CAM), and tenant retention.' },
        { title: 'Condo syndicate & co-ownership', description: 'Turnkey administrative and technical support for condo syndicates. We oversee general meetings, condo fee collection, contingency funds, and maintenance logs.' },
        { title: 'Financial management & accounting', description: 'Secure, transparent rent and dues collection, accounts payable, detailed monthly financial reporting, and predictive budgeting.' },
        { title: '24/7 technical maintenance & emergencies', description: 'Prompt dispatch for emergency repairs and continuous preventative upkeep coordinated by trusted, licensed (RBQ) contractors.' },
        { title: 'Complete tenant verification', description: 'Credit check, criminal background check, TAL record search, and employer and previous-landlord references, for reliable, long-term tenants.' },
        { title: 'Legal compliance & TAL representation', description: 'Total peace of mind regarding Quebec real estate laws, lease updates, rent increases, and direct liaison with the Tribunal administratif du logement.' },
        { title: 'Asset optimization & market analysis', description: 'Routine Montreal market analysis to optimize rental rates, minimize vacancy periods, and maximize your overall return on investment (ROI).' },
      ],
    },
    approach: {
      eyebrow: 'Your trusted local partner',
      title: 'Your property. *Our priority.*',
      description:
        'Proprio Alliance combines modern tools with in-depth knowledge of the Montreal market. Single-family home or multi-unit building, we treat your property like our own.',
      cta: 'Discover our approach',
      imageAlt: 'Multi-unit residential building at sunset',
    },
    tour: {
      eyebrow: 'Every part of your building',
      title: 'One partner, *from roof to lobby*',
      description: 'A building is a set of systems that all need attention. Here is how we take care of each one.',
      modelLabel: '3D model of a residential building showing, in turn, the whole property, the roof, the units and the entrance.',
      steps: [
        { label: 'The asset', title: 'Financial management', text: 'Rents and condo fees collected on time, suppliers paid, and a clear monthly statement, so you always know where your building stands.' },
        { label: 'Roof & envelope', title: 'Preventive maintenance', text: 'Scheduled inspections of the roof, masonry and mechanical systems. Work is carried out by licensed (RBQ) contractors and recorded in the building’s maintenance log.' },
        { label: 'The units', title: 'Tenants & leases', text: 'Careful screening, well-drafted leases and renewals handled within TAL deadlines, so every unit is let to the right tenant on the right terms.' },
        { label: 'The entrance', title: '24/7 emergencies', text: 'Tenants can reach us day or night. Water leak, heating failure or lockout: we dispatch the right contractor and keep you informed.' },
      ],
    },
    occupancy: {
      eyebrow: 'Occupancy',
      title: 'Units that *stay occupied*',
      description:
        'A vacant unit is the most expensive line in a rental budget. We work to prevent vacancy rather than react to it.',
      items: [
        { title: 'Renewals handled early', text: 'Lease renewal and modification notices go out within the legal window, three to six months before the lease ends. Departures are known early and units are re-let without gaps.' },
        { title: 'Tenants who stay', text: 'A complete verification of every applicant: credit, criminal background, TAL records, employment and previous-landlord references. Reliable tenants settle in for the long term.' },
        { title: 'Rents set by the local market', text: 'Each rent is compared with similar listings in the neighbourhood, to strike the right balance between income and how quickly the unit is let.' },
      ],
    },
    faqs: {
      eyebrow: 'FAQ',
      title: 'Frequently asked *questions*',
      description: 'Clear answers for landlords, real estate investors, and condo co-ownership boards.',
      items: [
        { question: 'What types of properties do you manage?', answer: 'We manage a diverse portfolio across residential real estate (rental condos, plexes from duplex to fiveplex, multi-unit income buildings) and commercial properties (offices and retail), and we serve as managers for condo syndicates.' },
        { question: 'What areas do you cover?', answer: 'Our property managers cover the entire Greater Montreal area, including the Island of Montreal, Laval, the North Shore, and the South Shore.' },
        { question: 'How much do your services cost?', answer: 'Fees are tailored based on asset type and total unit count. We operate on a percentage of gross monthly revenue for rental properties or custom flat fees for condo syndicate mandates. Contact us for a free quote.' },
        { question: 'How do you handle maintenance emergencies?', answer: 'We provide an emergency line available 24 hours a day, 7 days a week for tenants, backed by a team of technicians and certified (RBQ) contractors.' },
        { question: 'Are you up to date with Quebec’s TAL and co-ownership laws?', answer: 'Absolutely. Our team is fully versed in all regulations under the Tribunal administratif du logement (TAL), commercial lease laws, and recent Quebec legislative updates regarding condo contingency funds and building maintenance logs.' },
      ],
    },
    cta: {
      title: 'Ready to optimize your *property management*?',
      description:
        'Seasoned investor or first building, hand the day-to-day management to Proprio Alliance and focus on what matters most.',
      button: 'Book a free consultation',
    },
  },

  about: {
    seo: {
      title: 'About | Gestion Proprio Alliance, Montreal',
      description:
        'Discover Proprio Alliance, a Montreal property management firm offering full-service residential, commercial, and condo syndicate management with integrated real estate brokerage expertise.',
    },
    hero: { eyebrow: 'About', title: 'A Montreal property management firm that stays *close to its clients*' },
    intro: {
      eyebrow: 'Who we are',
      title: 'Real estate management to secure *your peace of mind*',
      paragraphs: [
        'At Proprio Alliance, we believe managing real estate rests on three values: rigour, transparency and peace of mind. Founded by experienced managers, our firm was built to give property owners and investors across Greater Montreal a service that lives up to their expectations.',
        'After years in the Quebec real estate market, we saw that investors wanted more than a rent collection or on-call repair service: they wanted a proactive partner. Our mission is to bring building management, financial optimization and legal compliance together in a single service.',
      ],
      imageAlt: 'Contemporary facade of a Montreal residential building',
    },
    scope: {
      eyebrow: 'Trust, integrity and precision',
      title: 'Our scope of operations',
      description:
        'Our team handles your building’s entire operating cycle: leasing, tenant screening, rent collection, preventive maintenance and 24/7 emergency support. From a single rental condo to large multi-unit portfolios, we tailor our services to your property.',
    },
    vision: {
      title: 'Our vision',
      items: [
        { title: 'Building lasting partnerships', description: 'Placing transparent communication and client trust at the center of every management mandate to guarantee long-term financial success.' },
        { title: 'Empowering strategic decisions', description: 'Delivering precise data analysis, market comparative reports, and expert guidance to optimize asset valuation and ROI.' },
        { title: 'Integrated brokerage advantage', description: 'With an in-house licensed real estate broker on our executive team, we bridge daily management and commercial transactions under one roof.' },
      ],
    },
    more: {
      eyebrow: 'A unique market advantage',
      title: 'More than property management: *total portfolio care*',
      intro:
        'What sets Proprio Alliance apart is a licensed real estate broker on our leadership team. This combined expertise in management and brokerage gives you access to services that go beyond traditional property management:',
      items: [
        { title: 'Listings on Centris through our in-house broker', text: 'Premium, high-visibility listing deployment across Quebec’s primary MLS platforms to minimize your vacancy periods during leasing or liquidation cycles.' },
        { title: 'Advanced market analytics', text: 'Deep-dive comparative data modeling and local rental rate tracking to maximize your cash flow based on real-time Montreal metrics.' },
        { title: 'Seamless transactional support', text: 'Full legal, structural, and commercial brokerage guidance when expanding, restructuring, or selling your multi-unit plexes or commercial assets.' },
      ],
      outro:
        'Whether you want to fill a vacancy, grow your portfolio or sell a property, you get full support from start to finish, without adding intermediaries.',
    },
    cta: {
      title: 'Let’s build *success together*',
      description: 'At Proprio Alliance, we’re more than just property managers — we’re your dedicated real estate partners.',
      button: 'Speak with a property manager',
    },
  },

  services: {
    seo: {
      title: 'Property Management Services Montreal | Gestion Proprio Alliance',
      description:
        'Rental management for plexes and income properties, plus condo syndicate and commercial building management in Montreal and Laval.',
    },
    hero: { eyebrow: 'Services', title: 'Property management services: *residential, condo and commercial*' },
    intro: {
      title: 'Professional property management, *tailored to every asset*',
      description:
        'We offer property management services designed to simplify ownership and protect the value of your assets. Whether you own a rental condo, multiplexes or a commercial building, or run a condo syndicate, our team supports you with rigour and in-depth knowledge of the Quebec market.',
      imageAlt: 'Aerial view of a residential complex with parking lots and a pond',
    },
    items: [
      { title: 'Turnkey residential leasing', description: 'End-to-end oversight of your residential multi-unit buildings: institutional-grade marketing, lease administration, and operations to maximize your passive ROI.' },
      { title: 'Commercial property operations', description: 'Comprehensive administration of retail, industrial, and office properties, focused on commercial lease indexing, CAM expense optimization, and B2B tenant retention.' },
      { title: 'Condo syndicate & board administration', description: 'Complete financial, technical, and administrative management for condo associations: tracking contingency funds, building logs, budgeting, and general meetings.' },
      { title: 'Secure collection & portfolio accounting', description: 'Streamlined collection of rents or monthly condo fees, accounts payable management, banking reconciliations, and transparent financial statements.' },
      { title: '24/7 technical care & emergency dispatch', description: 'Round-the-clock emergency assistance for tenants coupled with routine preventative building maintenance overseen by licensed, insured (RBQ) trades.' },
      { title: 'Complete tenant verification', description: 'Every applicant goes through a complete verification: credit check, criminal background, TAL records, and employer and previous-landlord references.' },
      { title: 'Legal compliance & TAL frameworks', description: 'Drafting of official provincial leases, delivery of statutory renewal and rent increase notices, and comprehensive guidance on all TAL regulations.' },
      { title: 'Preventative property inspections', description: 'Routine structural and unit check-ups to assess interior and common area conditions, catch maintenance issues early, and sustain property standards.' },
      { title: 'Risk mitigation & insurance handling', description: 'Comprehensive risk profiling, establishment of on-site safety protocols, and diligent coordination with insurance providers during property claims.' },
      { title: 'Market analytics & rent optimization', description: 'Periodic real estate comparative studies across Montreal neighborhoods to systematically calibrate rental prices and lower vacancy friction.' },
      { title: 'Strategic turnover & transition care', description: 'Expert navigation of tenant transitions, including lease buyouts, structured terminations, and rapid unit preparation to protect cash flow.' },
      { title: 'Real estate investment consulting', description: 'Expert advice for investors looking to expand or optimize their real estate portfolios.' },
    ],
    cta: {
      title: 'Entrust your properties to *professional hands*',
      description:
        'Tell us about your building and receive a free quote, tailored to your needs.',
      button: 'Request a free evaluation',
    },
  },

  contact: {
    seo: {
      title: 'Contact | Gestion Proprio Alliance, Montreal',
      description:
        'Ready to optimize your buildings or condo syndicate? Contact the expert team at Proprio Alliance today for a free evaluation in the Greater Montreal area.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Let’s discuss *your real estate goals*',
      description:
        'Whether you are a plex owner, a commercial asset manager, or a member of a co-ownership condo board, our specialists are ready to help simplify your operations.',
    },
    info: {
      title: 'Our coordinates',
      businessName: 'Gestion Proprio Alliance Inc.',
      regionLabel: 'Area served',
      region: 'Greater Montreal, Laval, North Shore & South Shore',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      hoursLabel: 'Business hours',
      hours: 'Monday to Friday: 9:00 AM – 5:00 PM (technical emergency support: 24/7)',
      mapLabel: 'Map of the area we serve',
    },
    form: {
      title: 'Request a free consultation',
      description: 'Fill out the form below and a portfolio manager will get back to you within 24 business hours.',
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      needLabel: 'Type of real estate need',
      needPlaceholder: 'Select…',
      needs: [
        { value: 'residential', label: 'Residential management (plex / multi-unit)' },
        { value: 'commercial', label: 'Commercial management (office / retail)' },
        { value: 'condo', label: 'Condo syndicate management (co-ownership)' },
        { value: 'brokerage', label: 'Buying / selling / brokerage services' },
        { value: 'other', label: 'Other inquiry' },
      ],
      units: 'Number of units / doors (if applicable)',
      message: 'Tell us briefly about your property and goals',
      terms: 'I agree to the terms and conditions',
      termsLink: 'Privacy Policy',
      submit: 'Submit request',
      optional: 'optional',
    },
  },

  thanks: {
    seo: { title: 'Thank you | Gestion Proprio Alliance', description: 'Your request has been sent.' },
    title: 'Thank you! *Your request has been sent.*',
    message: 'A portfolio manager will get back to you within 24 business hours.',
    back: 'Back to home',
  },

  legalIndex: {
    title: 'Legal *information*',
    description: 'Important policies and terms governing the use of our services.',
  },
};

export default en;
