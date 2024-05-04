import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MoodieMoovy - Forget Choosing, Get Watching',
    short_name: 'MoodieMoovy',
    description: 'Next.js App',
    start_url: '/',
    display: 'standalone',
    background_color: '#030404',
    theme_color: '#030404',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}