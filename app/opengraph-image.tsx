import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { site } from '@/content/site'

export const alt = `${site.name}, ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const font = (file: string) => readFile(join(process.cwd(), 'assets/og', file))

export default async function OpenGraphImage() {
  const [bold, semi, mono] = await Promise.all([
    font('schibsted-grotesk-latin-700-normal.woff'),
    font('schibsted-grotesk-latin-600-normal.woff'),
    font('ibm-plex-mono-latin-400-normal.woff'),
  ])

  const work = ['Client OSINT investigations', 'Supervised web application testing', 'Python security tooling']

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#F4F4EF',
          color: '#1C2220',
          fontFamily: 'Schibsted',
          padding: '72px 72px 64px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 760 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{site.name}</div>
            <div style={{ fontSize: 34, fontWeight: 600, color: '#4F5854', marginTop: 24, lineHeight: 1.3 }}>
              Cybersecurity graduate, First Class Honours
            </div>
            <div style={{ fontSize: 34, fontWeight: 600, color: '#4F5854', lineHeight: 1.3 }}>
              University of West London, 2026
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '2px solid #1C2220', paddingTop: 22 }}>
            {work.map((w) => (
              <div key={w} style={{ display: 'flex', alignItems: 'center', fontSize: 28, fontWeight: 600, color: '#1E5A4C', marginTop: 6 }}>
                <div style={{ width: 14, height: 14, background: '#1E5A4C', marginRight: 16 }} />
                {w}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            borderLeft: '2px solid #D3D5CE',
            marginLeft: 64,
            paddingLeft: 32,
            fontFamily: 'Plex Mono',
            fontSize: 22,
            color: '#4F5854',
            lineHeight: 1.5,
          }}
        >
          <div>{site.location}</div>
          <div>{site.availability}</div>
          <div style={{ marginTop: 18 }}>salahudeenmatine</div>
          <div>.vercel.app</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Schibsted', data: bold, weight: 700, style: 'normal' },
        { name: 'Schibsted', data: semi, weight: 600, style: 'normal' },
        { name: 'Plex Mono', data: mono, weight: 400, style: 'normal' },
      ],
    },
  )
}
