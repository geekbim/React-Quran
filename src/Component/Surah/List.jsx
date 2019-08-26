import React from 'react'
import './Surah.css'

const List = (props) => {
    return(
        <div className="container my-3">
            <div className="card point px-5" onClick={() => {props.goDetail(props.nomor)}}>
                <div className="row">
                    <div className="col-2 align-self-center">
                        <button className=" btn btn-outline-success rounded">{props.nomor}</button>
                    </div>
                    <div className="col-4 align-self-center">
                        <p className="card-text text-left py-1">{props.nama}</p>
                        <span className="card-subtitle text-left py-1">{props.arti}</span>
                    </div>
                    <div className="col-6 align-self-center">
                        <h5 className="card-title text-right nama-surah">{props.asma}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
