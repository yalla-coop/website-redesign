// const path = require('path')

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       allMdx {
//         edges {
//           node {
//             id
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (result.error)
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')

//   const caseStudies = result.data.allMdx.edges

//   caseStudies.forEach(({ node }) => {
//     createPage({
//       path: `/case-studies/${node.frontmatter.slug}`,
//       component: path.resolve(`./src/components/layout/case-studies.js`),
//       context: { id: node.id },
//     })
//   })
// }
