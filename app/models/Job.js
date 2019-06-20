export default class Job{
  constructor(data){
    this.title = data.title
    this.salary = data.salary
    this.company = data.company
    this.location = data.location
  }

get Template(){
  return `
  <div class="col-4">
        <h4>Title: ${this.title}</h4>
        <h4>Salary: ${this.salary}</h4>
        <h4>Company: ${this.company}</h4>
        <p>Location: ${this.location}</p>
      </div>
  `
}

}

