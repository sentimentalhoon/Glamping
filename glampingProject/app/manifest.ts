import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '더 웨스턴 글램핑',
    short_name: 'The Western',
    description: '변산반도 프리미엄 럭셔리 글램핑',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A2F23',
    theme_color: '#1A2F23',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
