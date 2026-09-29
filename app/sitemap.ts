import type { MetadataRoute } from 'next'
import { site } from '@/content/site'
import { caseStudies } from '@/content/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/work', '/experience', '/cv', ...caseStudies.map((c) => `/work/${c.study.slug}`)]
  return paths.map((p) => ({ url: `${site.url}${p}` }))
}
