import React from "react"
import {graphql} from 'gatsby'

import SEO from "../components/seo"
import Layout from '../components/layout'
import Herosection from '../components/Reuseable/Herosection'
import Services from'../components/services/Services'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection 
    img={data.img.childImageSharp.fluid} 
    title="Our services"
    subtitle="To give to community"
    heroclass="about-background"
    />
    <Services title="Services">
        Adipisicing sint pariatur exercitation culpa cillum irure mollit est cupidatat nostrud amet tempor commodo. Laborum laborum dolor exercitation aliquip. Laborum laboris ex dolor cupidatat culpa consequat amet pariatur nostrud ut. Anim amet occaecat aute Lorem sint minim labore deserunt elit id eu reprehenderit id magna. Non minim elit elit consectetur dolore quis incididunt. Ea incididunt fugiat sunt deserunt sit dolore nostrud. Non nulla sit dolore sit sunt in aliqua id tempor consectetur do.
    </Services>


  </Layout>
)

export const query  = graphql`
  {
    
      img:file(relativePath: {eq:"about.png"}){
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    
  }
`
export default IndexPage
