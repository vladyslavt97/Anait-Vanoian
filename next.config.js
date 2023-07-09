/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['npechxvoqfwdsvkljinx.supabase.co', 'scontent-dus1-1.cdninstagram.com', 'scontent-fra3-1.cdninstagram.com', 'scontent-fra3-2.cdninstagram.com'], 
  }
}

module.exports = nextConfig
