interface Category {
  name: string;
  slug: string;
  description: string;
}

interface Type {
    name: string;
    slug: string;
    description: string;
}

export const categories: Category[] = [
  {
    name: 'Tech',
    slug: 'tech',
    description: 'Latest in technology and software development'
  },
  {
    name: 'Web Development',
    slug: 'web-development',
    description: 'Tips and insights for better web development'
  },
  {
    name: 'Design',
    slug: 'design',
    description: 'Exploring design and user experience'
  },
  {
    name: 'Accessibility',
    slug: 'accessibility',
    description: 'Exploring accessibility and user experience'
  },
  {
    name: 'Theme Usage',
    slug: 'theme-usage',
    description: 'Learn how to use the theme'
  },
  {
    name: 'Astro JS',
    slug: 'astro-js',
    description: 'Everything about Astro JS framework and development'
  },
  {
    name: 'SEO',
    slug: 'seo',
    description: 'Search engine optimization strategies and best practices'
  },
  {
    name: 'For Rent',
    slug: 'tech',
    description: 'Latest in technology and software development'
  },
  {
    name: 'For Sale',
    slug: 'web-development',
    description: 'Tips and insights for better web development'
  },
  {
    name: 'House',
    slug: 'House',
    description: 'Tips and insights for better web development'
  },

];


export const type: Type[] = [
    {
      name: 'Appartment',
      slug: 'tech',
      description: 'Latest in technology and software development'
    },
    {
      name: 'House',
      slug: 'web-development',
      description: 'Tips and insights for better web development'
    },
    {
      name: 'Land',
      slug: 'design',
      description: 'Exploring design and user experience'
    },
    {
      name: 'Manufactured',
      slug: 'accessibility',
      description: 'Exploring accessibility and user experience'
    },
    {
      name: 'Town House',
      slug: 'theme-usage',
      description: 'Learn how to use the theme'
    },
    {
      name: 'Villa',
      slug: 'astro-js',
      description: 'Everything about Astro JS framework and development'
    },
  ];


// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

// Helper function to get category by slug
export function getTypeBySlug(slug: string): Type | undefined {
  return type.find(type => type.slug === slug);
}


