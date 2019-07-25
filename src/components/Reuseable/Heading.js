import React from 'react'

export default function Heading({title}) {
    return (
        <div>
            <div className="row">
                <div className="col text-center text-warning">
                    <h1 text-warning>
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    )
}
