import React from "react"
import { Link, graphql } from "gatsby"
import ThemeContext from '../context/ThemeContext'

import Bio from "../components/bio"
import Image from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Toggle from '../components/Toggle'
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? 'dark' : 'light'}>
          <Layout location={this.props.location} title={siteTitle}>
            <SEO title="All posts" />
            <Bio />
            <Toggle />
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  {/* <small>{node.frontmatter.imgURL}</small> */}
                  {/* <img src={node.frontmatter.imgURL.childImageSharp.sizes} /> */}
                  <Image
                  sizes={node.frontmatter.imgURL.childImageSharp.sizes}
                  style={{
                    // marginRight: rhythm(1 / 2),
                    marginBottom: 50,
                    minWidth: 50,
                    height: 250
                  }}
                  imgStyle={{
                    
                  }}
                  />
                  {/* <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} /> */}
                </div>
              )
            })}
            </Layout>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            imgURL {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
          }
          }
        }
      }
    }
  }
`
