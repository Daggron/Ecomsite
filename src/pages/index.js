import React from "react"
import {graphql} from 'gatsby'

import SEO from "../components/seo"
import Layout from '../components/layout'
import Herosection from '../components/Reuseable/Herosection'
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import heromain from '../images/heromain.png'
import Coursecart from '../components/coursecart/coursecart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection 
    img={data.img.childImageSharp.fluid} 
    title="I Write Code"
    subtitle="Programming is a superpower"
    heroclass="hero-background"
    />

    <Infoblock heading="About us" >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  
     </Infoblock>
     <Coursecart courses={data.courses} />

     <Dualinfoblock heading="Our Team" url="/about" imgsrc={heromain} />

  </Layout>
)

export const query  = graphql`
  {
    
      img:file(relativePath: {eq:"heromain.png"}){
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      courses:allContentfulCourses{
        edges{
          node{
            id
            title
            price
            category
            description{
              description
            }
             iamge{
              fixed(width:200, height:120){
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    
  }
`
export default IndexPage
