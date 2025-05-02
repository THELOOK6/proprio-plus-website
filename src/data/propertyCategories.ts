export const propertyCategoryNames = [
    'Apartment',
    'House',
    'Condo',
    'Townhouse',
    'Studio',
    'Duplex',
    'Penthouse',
    'Loft',
    'Villa',
    'Cottage',
    'Luxury',
    'Pet-Friendly',
    'Furnished',
    'Waterfront',
    'Downtown'
  ] as const;

  export type PropertyCategory = typeof propertyCategoryNames[number];

  export const propertyCategories: Record<
    PropertyCategory,
    {
      name: string;
      description: string;
      color: string;
    }
  > = {
    'Apartment': {
      name: 'Apartment',
      description: 'Multi-unit residential buildings',
      color: 'bg-blue-100 text-blue-800',
    },
    'House': {
      name: 'House',
      description: 'Single-family detached homes',
      color: 'bg-green-100 text-green-800',
    },
    'Condo': {
      name: 'Condo',
      description: 'Individually owned units in a shared building',
      color: 'bg-purple-100 text-purple-800',
    },
    'Townhouse': {
      name: 'Townhouse',
      description: 'Multi-floor homes that share walls with adjacent properties',
      color: 'bg-yellow-100 text-yellow-800',
    },
    'Studio': {
      name: 'Studio',
      description: 'Single room apartments with combined living and sleeping areas',
      color: 'bg-pink-100 text-pink-800',
    },
    'Duplex': {
      name: 'Duplex',
      description: 'Two separate units in one building',
      color: 'bg-indigo-100 text-indigo-800',
    },
    'Penthouse': {
      name: 'Penthouse',
      description: 'Luxury apartments on the top floor of buildings',
      color: 'bg-red-100 text-red-800',
    },
    'Loft': {
      name: 'Loft',
      description: 'Open-concept apartments with high ceilings',
      color: 'bg-orange-100 text-orange-800',
    },
    'Villa': {
      name: 'Villa',
      description: 'Luxurious detached houses often with gardens',
      color: 'bg-emerald-100 text-emerald-800',
    },
    'Cottage': {
      name: 'Cottage',
      description: 'Small, cozy houses typically in rural areas',
      color: 'bg-cyan-100 text-cyan-800',
    },
    'Luxury': {
      name: 'Luxury',
      description: 'High-end properties with premium amenities',
      color: 'bg-amber-100 text-amber-800',
    },
    'Pet-Friendly': {
      name: 'Pet-Friendly',
      description: 'Properties that allow pets',
      color: 'bg-lime-100 text-lime-800',
    },
    'Furnished': {
      name: 'Furnished',
      description: 'Properties that come with furniture',
      color: 'bg-teal-100 text-teal-800',
    },
    'Waterfront': {
      name: 'Waterfront',
      description: 'Properties located near water bodies',
      color: 'bg-sky-100 text-sky-800',
    },
    'Downtown': {
      name: 'Downtown',
      description: 'Properties located in city centers',
      color: 'bg-violet-100 text-violet-800',
    },
  };
