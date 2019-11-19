import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './componets/Header'
import NewDate from './componets/NewDate'

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Admin Veterinary Clinic" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewDate />
          </div>
        </div>
      </div>
    )
  }
}

export default App
