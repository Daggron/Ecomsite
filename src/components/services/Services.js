import React from 'react'
import service from '../../images/service.jpg'
import Heading from '../Reuseable/Heading'

export default function Services({children, title}) {
    return (
        <section className="bg-theme">
            <div className="container-fluid">
               
                    <Heading title={title} />
                  
                <div className="row">
                    <div className="col col-sm-6 mx-auto">
                     <img src={service} alt="Services" className="img" />
                    </div>
                    <div className="col col-sm-6">
                        <p className="lead text-center text-white my-5 py-5 font-5">
                            {children}  
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
