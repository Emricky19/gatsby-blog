import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(
        graphql`
            query{
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
        `
    )
    return (
       <Layout>
            <h1>Blog</h1>
           <ol>
           {
                data.allMarkdownRemark.edges.map(edge => {
                    return (
                        
                            <li>
                                <h1>{edge.node.frontmatter.title}</h1>
                                <p>{edge.node.frontmatter.date}</p>
                            </li>   
                        
                    )
                })
            }
           </ol>
       </Layout>
    )
}

export default BlogPage
