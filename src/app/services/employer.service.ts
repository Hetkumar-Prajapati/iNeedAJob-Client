import { Injectable } from '@angular/core';

// import HttpClient  to make HTTP calls to server API
import { HttpClient, HttpHeaders } from '@angular/common/http' // import HttpHeaders class

//refere to environment to read the server API URL
import { environment } from 'src/environment/environment';

// HttpHeaders needed for POST AND PUT
let headers = new HttpHeaders()
headers.append('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})

export class EmployerService {

  //set srver URL as class level var re-used in all http requests
  serverUrl: string = environment.serverUrl

  constructor(private http: HttpClient) { }
  
  // get employers - this call our api 
  getEmployer(){
    return this.http.get(`${this.serverUrl}/api/employers`)   // call the server and runs get method in declared in employer controller
    // this is where the 2 projects part to each other 
  }

  addEmployer(employer: any){
    return this.http.post(`${this.serverUrl}/api/employers`, employer, {headers: headers})
  }

  // delete
  deleteEmployer(_id: string) {
    return this.http.delete(`${this.serverUrl}/api/employers/${_id}`)
  }

   // edit
   updateEmployer(employer: any) {
    return this.http.put(`${this.serverUrl}/api/employers/${employer._id}`, employer)
  }

}


// in order to use the service we need to connect it to 2 places 
// 1) connect it to EmployerComponent 
// 2) config it in app.modules
