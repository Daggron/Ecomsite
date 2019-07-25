import React from 'react'
import Heading from './Heading'
import {Link } from 'gatsby'


export default function Dualinfoblock({heading,url,imgsrc}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container-fluid">
                    <Heading title={heading} />
                    <div className="row">
                        <div className="col-sm-6  mx-auto">
                            <p className="lead text-white mb-5 mx-5 my-5">
                                Occaecat ea voluptate id eiusmod aute et fugiat sint excepteur nisi magna sunt sint.Cupidatat est aliqua eiusmod deserunt proident deserunt est proident ipsum pariatur est mollit est culpa. Lorem dolor culpa aliquip cillum officia adipisicing excepteur exercitation. Commodo nisi ipsum et voluptate. Occaecat reprehenderit culpa anim magna est cupidatat reprehenderit est. Non fugiat id quis minim esse aliquip non do exercitation ipsum cillum occaecat id. Veniam dolore ullamco commodo cillum.Nulla adipisicing culpa sint exercitation laboris commodo et proident tempor anim cillum irure irure. Nisi Lorem voluptate occaecat enim velit ex velit commodo magna irure minim sit labore. In aute eu dolor amet reprehenderit elit elit sint excepteur ad velit.
                            </p>
                        </div>
                        <div className="col-4 col-sm-4">
                        <div class="card bg-dark" style={{width: 18+'rem'}}>
                            <img src={imgsrc}  class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-success text-center">card Start</h5>
                                <p class="card-text text-white">Elit amet sit aute culpa laborum nisi velit elit sint dolore.Consequat minim mollit in quis irure reprehenderit qui.</p>
                               <Link to={url} >
                               <button className="btn btn-warning btn-block">
                                   {heading}
                               </button>
                               </Link>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
            
        </section>
    )
}
