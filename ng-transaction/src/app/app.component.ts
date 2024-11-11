import { Component } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Transaction';

  constructor(private route: Router) {}

  
   onCreateClick(): void {
    console.log('Create New Item clicked');
    this.route.navigateByUrl("/create");
  }


  onGetAllClick(): void {
    console.log('Get All Data clicked');
    this.route.navigateByUrl("/getAll");
  }

  
  onGetByIdClick(): void {
    console.log('Get Data by ID clicked');
    this.route.navigateByUrl("/getByID");
  }
}
