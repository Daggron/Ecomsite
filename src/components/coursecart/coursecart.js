import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby'

export default class coursecart extends Component {
    constructor(props){
        super(props)
        this.state = ({
            couses:props.courses.edges,
            mycouses:props.courses.edges
        })
    }
    render() {
        console.log(this.state.couses);
        
        return (
            <section>
                <div className="container">
                    <Heading title="Course" />
                    <div className="row">
                        {
                            this.state.mycouses.map(({node}) =>{
                                return (
                                    <div className="col-11 col-md-6 d-flex mx-auto mb-5"
                                    key={node.id}
                                    >
                                    <img src={node.iamge.fixed.src} />
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0">
                                                {node.title}
                                            </h6>
                                            <h6 className="mb-0 text-success mr-3">
                                                $ {node.price}
                                            </h6>

                                        </div>
                                        <p className="text-muted">
                                            <small>
                                                {node.description.description}
                                            </small>
                                        </p>
                                        <button className="btn btn-warning">
                                            Buy Course
                                        </button>
                                    </div>
                                    </div>
                                )
                            })
                            
                        }
                    </div>
                </div>
            </section>
        )
    }
}
