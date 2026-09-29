import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    // The old site linked straight to /cv.pdf. Send those links to the CV page.
    return [{ source: '/cv.pdf', destination: '/cv', permanent: false }]
  },
}

export default nextConfig
