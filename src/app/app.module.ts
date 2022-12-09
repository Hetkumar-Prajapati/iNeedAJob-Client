import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployerComponent } from './components/employer/employer.component';

//our service which talks to server api
import { EmployerService } from './services/employer.service';

//HttpClientModule modules required to make http request to the server api
import { HttpClientModule } from '@angular/common/http'

// import forms module class
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,   
    EmployerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   // improt httpModule which is needed to call api
    FormsModule
  ],
  providers: [EmployerService],  // since it provides data it is declared in providers
  // the service is injected and provided as a dependency to a component 

  bootstrap: [EmployerComponent]
})
export class AppModule { }
