import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://iptv4k-kaufen.de'

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapUrls: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ueber-uns/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  try {
    const blogDir = path.join(process.cwd(), 'app', 'blog')
    if (fs.existsSync(blogDir)) {
      const entries = fs.readdirSync(blogDir, { withFileTypes: true })
      
      entries.forEach((entry) => {
        if (entry.isDirectory()) {
          sitemapUrls.push({
            url: `${BASE_URL}/blog/${entry.name}/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
          })
        }
      })
    }
  } catch (error) {
    console.error("Error generating blog sitemap:", error)
  }

  return sitemapUrls
}
