import React, { Component } from 'react'
import Date from './Date'

type appointment = {
  id: string
  pet: string
  owner: string
  date: string
  time: string
  symptoms: string
}

interface Props {
  appointments: appointment[]
}

export class DateList extends Component<Props> {
  render() {
    const { appointments } = this.props

    return (
      <div>
        <div className="card mt-2 py-5">
          <div className="card-body">
            <h2 className="card-title text-center">
              Manage your appointments here
            </h2>

            <div className="date-list">
              {appointments.map(appointment => (
                <Date key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DateList
