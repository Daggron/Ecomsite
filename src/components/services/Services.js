import React from 'react'
import service from '../../images/service.jpg'
import Heading from '../Reuseable/Heading'

export default function Services({children, title}) {
    return (
        <section class="bg-theme">
            <div class="container-fluid">
               
                    <Heading title={title} />
                  
                <div class="row">
                    <div class="col col-sm-6 mx-auto">
                     <img src={service} alt="Services" class="img" />
                    </div>
                    <div class="col col-sm-6">
                        <p class="lead text-center text-white my-5 py-5 font-5">
                            {children}  
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
