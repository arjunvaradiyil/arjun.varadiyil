import { projects } from '../data/projectData';
import { blogPosts } from '../data/blogData';

export default function sitemap() {
  const baseUrl = 'https://arjunvaradiyil.in';
  
  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hobbies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
        {
          url: `${baseUrl}/certifications`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        },
        {
          url: `${baseUrl}/blog`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8,
        },
      ];

      // Dynamic project routes - automatically generated from project data
      const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }));

      // Dynamic blog routes - automatically generated from blog data
      const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));

      return [...routes, ...projectRoutes, ...blogRoutes];
}
