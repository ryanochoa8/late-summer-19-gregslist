export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  get Template() {
    return `
    <div class="col-4">
      <div class="card m-1">
        <div class="card-body">
          <h4>Company: ${this.company}</h4>
          <h4>Job Title: ${this.jobTitle}</h4>
          <h4>Hours: ${this.hours}</h4>
          <h4>Rate: $${this.rate} per hour</h4>
          <p>Description: ${this.description}</p>
        </div>
        <div class="card-footer">
          <button onclick="app.controllers.jobController.interested('${this._id}')" class="btn btn-outline-success">Save Job</button>
          <button onclick="app.controllers.jobController.notInterested('${this._id}')" class="btn btn-outline-danger">Delete Job</button>
        </div>
      </div>
    </div>
    `
  }

}

