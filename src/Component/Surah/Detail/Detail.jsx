import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import List from './List'
import '../Surah.css'

const searchingFor = (term) => {
    return ((x) => {
        return x.nomor.toLowerCase().includes(term.toLowerCase()) || !term
    })
}

class Detail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quran: [],
            isLoading: true,
            term: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {
        let nomorSurah = this.props.match.params.nomorSurah
        Axios.get(`https://al-quran-8d642.firebaseio.com/surat/${nomorSurah}.json?print=pretty`)
        .then((res) => {
            console.log(res)
            this.setState({
                quran: res.data,
                isLoading: false
            })
        })
    }

    handleSearch = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    render() {

        if(this.state.isLoading) {
            return (
                <div class="loading">
                    <div class="loader"></div>
                </div>
            )
        }

        return (
            <Fragment>
                <div className="container sticky-top bg-white">
                    <div className="nav justify-content-center">
                        <h3 className="my-3">AL-QUR'AN</h3>
                        <input type="text" className="input-search my-4" onChange={this.handleSearch} value={this.state.term} placeholder="Search Ayat..." />
                    </div>
                </div>

                {
                    this.state.quran.filter(searchingFor(this.state.term)).map((konten) => {
                        return(
                            <List key={konten.nomor} nomor={konten.nomor} id={konten.id} ar={konten.ar} />
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default Detail
