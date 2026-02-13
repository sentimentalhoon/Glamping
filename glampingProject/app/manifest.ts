import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '더 웨스턴 글램핑',
    short_name: 'The Western',
    description: '변산반도 프리미엄 럭셔리 글램핑',
    start_url: '/',
    display: 'standalone',
    display_override: ['standalone', 'minimal-ui'],
    background_color: '#1A2F23',
    theme_color: '#1A2F23',
    icons: [
      {
        src: '/hero.jpg',
        sizes: '1024x1024',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: '/hero.jpg',
        sizes: '1024x1024',
        type: 'image/jpeg',
        purpose: 'maskable',
      },
    ],
  }
}
