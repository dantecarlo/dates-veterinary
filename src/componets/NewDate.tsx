import React, { Component } from 'react'

export class NewDate extends Component {
  state = {}

  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Fill the form to create a new Date
          </h2>

          <form>
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
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4">
                <input className="form-control" type="date" name="date" />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
              <div className="col-sm-8 col-lg-4">
                <input className="form-control" type="time" name="time" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Symptom
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="symptom"
                  placeholder="Describe the symptoms"
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
