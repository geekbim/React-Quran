import React, { Component, Fragment } from 'react'
import Content from './Component/Surah/Content'
import Detail from './Component/Surah/Detail/Detail'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={Content} />
          <Route path="/detail/:nomorSurah" component={Detail} />
        </Fragment>
      </Router>
    )
  }
}

export default App
