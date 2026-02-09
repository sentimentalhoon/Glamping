import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '루미나 프라이빗 에스테이트',
    short_name: 'Lumina',
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
