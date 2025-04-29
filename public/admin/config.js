// /public/admin/config.js
const config = {
    backend: {
      name: "github",
      repo: "THELOOK6/proprio-plus-website.git",  // Replace with your actual GitHub repo
      branch: "main",  // or 'master'
    },
    media_folder: "public/images/uploads",
    public_folder: "/images/uploads",
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        folder: "src/content/blog",
        create: true,
        slug: "{{slug}}",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Excerpt", name: "excerpt", widget: "text" },
          { label: "Featured Image", name: "featuredImage", widget: "image" },
          { label: "Publish Date", name: "publishDate", widget: "datetime" },
          { label: "Publish", name: "publish", widget: "boolean", default: true },
          { label: "Categories", name: "categories", widget: "list", default: [] },
          {
            label: "SEO",
            name: "seo",
            widget: "object",
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Description", name: "description", widget: "text" },
            ],
          },
        ],
      },
      {
        name: "legal",
        label: "Legal Pages",
        folder: "src/content/legal",
        create: true,
        slug: "{{slug}}",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Last Updated", name: "lastUpdated", widget: "datetime" },
          {
            label: "SEO",
            name: "seo",
            widget: "object",
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Description", name: "description", widget: "text" },
            ],
          },
        ],
      },
      {
        name: "team",
        label: "Team Members",
        folder: "src/content/team",
        create: true,
        slug: "{{slug}}",
        fields: [
          { label: "Name", name: "name", widget: "string" },
          { label: "Headshot", name: "headshot", widget: "image" },
          { label: "Job Title", name: "jobTitle", widget: "string" },
          { label: "Publish", name: "publish", widget: "boolean", default: true },
          { label: "Order", name: "order", widget: "number", value_type: "int" },
          { label: "LinkedIn URL", name: "linkedin", widget: "string", required: false },
          { label: "LinkedIn Username", name: "linkedinUsername", widget: "string", required: false },
          { label: "Email", name: "email", widget: "string", required: false },
          { label: "X (Twitter) URL", name: "xSocial", widget: "string", required: false },
          { label: "X (Twitter) Username", name: "xSocialUsername", widget: "string", required: false },
          { label: "GitHub URL", name: "github", widget: "string", required: false },
          { label: "GitHub Username", name: "githubUsername", widget: "string", required: false },
        ],
      },
    ],
    auth: {
      provider: "auth0",
      clientId: process.env.AUTH0_CLIENT_ID, // Using Netlify environment variables
      domain: process.env.AUTH0_DOMAIN,     // Using Netlify environment variables
      redirectUri: "https://groupeproprioplus.netlify.app/admin", // Adjust based on your Netlify URL
    },
  };

  module.exports = config;
