import React from 'react'


const List = (props) => {
    return(
        <div className="container my-3">
            <div className="card px-5">
                <div className="row">
                    <div className="col-2 align-self-center">
                        <button className="btn btn-outline-success rounded">{props.nomor}</button>
                    </div>
                    <div className="col-4 align-self-center">
                        <p className="card-text text-left py-3">{props.id}</p>
                    </div>
                    <div className="col-6 align-self-center">
                        <h5 className="card-title text-right py-3">{props.ar}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
