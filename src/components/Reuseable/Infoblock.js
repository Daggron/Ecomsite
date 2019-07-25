import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({heading , children}) {
    return (
        <section className="bg-theme my-5 py-5">
            <Heading title={heading} />
            <div className="container">
                <div class="row">
                    <div class="col-10 col-sm-12 text-center mx-auto">
                        <h4 className="text-white mx-auto mt-5 mb-5 ">
                                {children}
                        </h4>
                        <Link to="/about/">
                            <button className="btn btn-warning">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
