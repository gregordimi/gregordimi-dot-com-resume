// import remarkGfm from 'remark-gfm'
// import remarkMath from 'remark-math'
// import remarkRehype from 'remark-rehype'
// import rehypeKatex from 'rehype-katex'
// import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
},
basePath: '',
assetPrefix: '',
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//   options: {
//     remarkPlugins: [remarkGfm, remarkMath],
//     rehypePlugins: [rehypeKatex],
//   },
// })
 
// // Wrap MDX and Next.js config with each other
// export default withMDX(nextConfig)

export default nextConfig