// import createMDX from '@next/mdx'
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include markdown and MDX files
//   pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// }
 
// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
// })
 
// // Merge MDX config with Next.js config
// export default withMDX(nextConfig)
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)