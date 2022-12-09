import { Component , OnInit } from '@angular/core';

// reference service which fetches data from api
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
})
export class EmployerComponent implements OnInit{ // implements  OnInit - for calling getEmployers to fetch all data whenever EmploymentComponent is created by user
  //need to import OnInit method from @angular/core in 1st line above

  // add dependency on service in constructor. This component MUST have our service available.
  constructor(private service:EmployerService){ } // constructor takes service as a dependency

  employers: any
  _id: string | undefined
  name: string | undefined
  region: string | undefined
  description: string | undefined

  //fetch all employers from service 
  //subscribe - observable to acyncronysh call and waiting for responce
  getEmployers(): void{
    this.service.getEmployer().subscribe(responce =>{
      this.employers = responce // employer variable here now has json data of employers from api > database
      // console.log(this.employers) // check if its working 
    })
  }

 // add new employer, properties auto-bound to the matching form inputs
 addEmployer(): void {
    // 1. create & populate new employer object
    let employer = {
      name: this.name,
      region: this.region,
      description: this.description
    }

    this.service.addEmployer(employer).subscribe(responce =>{
      //update list
      this.getEmployers()

      // clear the form 
      this.clearForm()
    })
  }

  deleteEmployer(_id: string): void {
    if (confirm('Are you sure???')) {
      this.service.deleteEmployer(_id).subscribe(response => {
        this.getEmployers()
        this.clearForm()
      })
    }     
  }

  clearForm(): void {
    this._id = undefined
    this.name = undefined
    this.region = undefined
    this.description = undefined
  }

  selectEmployer(_id: string, name: string, region: string, description: string): void {
    this._id = _id
    this.name = name
    this.region = region
    this.description = description
  }

  updateEmployer(): void {
    let employer = {
      _id: this._id,
      name: this.name,
      region: this.region,
      description: this.description
    }

    this.service.updateEmployer(employer).subscribe(response => {
      this.getEmployers()
      this.clearForm()
    })
  }

  //fetch data whenever this component is instanciated 
  ngOnInit(){
    this.getEmployers()
  }
}
