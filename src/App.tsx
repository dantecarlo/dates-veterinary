import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './componets/Header'
import NewDate from './componets/NewDate'
import DateList from './componets/DateList'

type appointment = {
  id: string
  pet: string
  owner: string
  date: string
  time: string
  symptoms: string
}

interface State {
  appointments: appointment[]
}

export class App extends Component<{}, State> {
  state = {
    appointments: [] as appointment[],
  }

  createNewDate = (data: appointment) => {
    const appointments = [...this.state.appointments, data]
    this.setState({ appointments })
  }

  eraseDate = (id: string) => {
    const currentAppointments = [...this.state.appointments]

    const appointments = currentAppointments.filter(
      appointment => appointment.id !== id,
    )

    this.setState({ appointments })
  }

  render() {
    const { appointments } = this.state

    return (
      <div className="container">
        <Header title="Admin Veterinary Clinic" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewDate createNewDate={this.createNewDate} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <DateList appointments={appointments} eraseDate={this.eraseDate} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
