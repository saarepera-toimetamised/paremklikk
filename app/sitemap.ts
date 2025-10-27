import { MetadataRoute } from 'next'

export const dynamic = 'force-static'  // ← UUS RIDA!

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://paremklikk.ee',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}