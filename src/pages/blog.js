import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>
      ,<ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

//
// Goal: Create an about page and a contact page
//
// 1. Create about page. Include a page title and bio.
// 2. Create a contact page. Include a page title and contact details.
// 3. Test your work
