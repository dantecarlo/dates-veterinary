import React, { Component } from 'react'
import uuid from 'uuid'

type eventChange =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>

type eventSubmit = React.FormEvent<HTMLFormElement>

type appointment = {
  id: string
  pet: string
  owner: string
  date: string
  time: string
  symptoms: string
}

interface Props {
  createNewDate: (data: appointment) => void
}

export class NewDate extends Component<Props> {
  state = {
    appointment: {
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: '',
    },
    error: false,
  }

  handleChange = (e: eventChange) => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = (e: eventSubmit) => {
    e.preventDefault()
    const { appointment } = this.state
    const { pet, owner, date, time, symptoms } = appointment

    if (
      pet === '' ||
      owner === '' ||
      date === '' ||
      time === '' ||
      symptoms === ''
    ) {
      this.setState({
        error: true,
      })
      return
    }

    const newDate = { ...appointment, id: uuid() }
    console.log(newDate)
    const { createNewDate } = this.props
    createNewDate(newDate)
  }

  render() {
    const { pet, owner, date, time, symptoms } = this.state.appointment

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Fill the form to create a new Date
          </h2>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet&apos;s Name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  className="form-control"
                  type="text"
                  name="pet"
                  placeholder="Pet's Name"
                  onChange={this.handleChange}
                  value={pet}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet&apos;s Owner
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  className="form-control"
                  type="text"
                  name="owner"
                  placeholder="Pet's Owner"
                  onChange={this.handleChange}
                  value={owner}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  onChange={this.handleChange}
                  value={date}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  className="form-control"
                  type="time"
                  name="time"
                  onChange={this.handleChange}
                  value={time}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Symptoms
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="symptoms"
                  placeholder="Describe the symptoms"
                  onChange={this.handleChange}
                  value={symptoms}
                ></textarea>
              </div>
            </div>

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Add New Date"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default NewDate
