import React, { Component } from 'react'

type appointment = {
  id: string
  pet: string
  owner: string
  date: string
  time: string
  symptoms: string
}

interface Props {
  appointment: appointment
}

export class Date extends Component<Props> {
  render() {
    const { appointment } = this.props
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{appointment.pet}</h3>

          <p className="card-text">
            <span>Pet&apos;s Owner: </span> {appointment.owner}
          </p>

          <p className="card-text">
            <span>Date: </span> {appointment.date}
          </p>

          <p className="card-text">
            <span>Time: </span> {appointment.time}
          </p>

          <p className="card-text">
            <span>Symptoms</span>
          </p>

          <p className="card-text">{appointment.symptoms}</p>
        </div>
      </div>
    )
  }
}

export default Date
