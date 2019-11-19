import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './componets/Header'
import NewDate from './componets/NewDate'

type appointment = {
  id: string
  pet: string
  owner: string
  date: string
  time: string
  symptoms: string
}

export class App extends Component {
  state = {
    appointment: [],
  }

  createNewDate = (data: appointment) => {
    const appointments = [...this.state.appointment, data]
    this.setState({ appointments })
  }

  render() {
    return (
      <div className="container">
        <Header title="Admin Veterinary Clinic" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewDate createNewDate={this.createNewDate} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
