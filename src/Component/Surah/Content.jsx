import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import List from './List'

const searchingFor = (term) => {
    return (x) => {
        return x.nama.toLowerCase().includes(term.toLowerCase()) || !term
    }
}

class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quran: [],
            isLoading: true,
            term: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }


    // GET DATA API
    
    componentDidMount() {
        Axios.get('https://al-quran-8d642.firebaseio.com/data.json?print=pretty')
        .then((res) => {
            console.log(res)
            this.setState({
                quran: res.data,
                isLoading: false
            })
        })
    }

    handleDetail = (nomorSurah) => {
        this.props.history.push(`/detail/${nomorSurah}`)
    }

    handleSearch = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    render() {
        const {quran,isLoading, term} = this.state // SAMA DENGAN this.state.quran dan this.state.term
        
        if (isLoading) {
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
                        <input type="text" className="input-search my-4" onChange={this.handleSearch} value={term} placeholder="Search Surah..." />
                    </div>
                </div>
                {
                    quran.filter(searchingFor(term)).map((konten) => {
                        return(
                            <List key={konten.nomor} nomor={konten.nomor} nama={konten.nama} arti={konten.arti} asma={konten.asma} goDetail={this.handleDetail} />
                        )
                    })
                }


            </Fragment>
        )
    }
}

export default Content
