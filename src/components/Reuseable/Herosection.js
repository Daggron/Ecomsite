import React from 'react'
import BackgroundImage from 'gatsby-background-image'


export default function Herosection({img , title, subtitle,heroclass}) {
    return (
       <BackgroundImage 
       className={heroclass}
       fluid={img}
       >
           <h1 className="text-center text-white text-uppercase display-4">
               {title}
           </h1>
           <div className="text-center mx-auto pd-5 ml-5">
                <h4 className="text-warning">
                    {subtitle}
                </h4>
           </div>

       </BackgroundImage>
    )
}
