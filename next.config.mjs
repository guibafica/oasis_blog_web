/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.brasilcode.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'arquivo.devmedia.com.br',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'coodesh.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
