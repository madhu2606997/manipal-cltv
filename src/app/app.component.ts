import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cltv';
  isCollapsed = true
  router
  constructor(location: Location,private Router: Router){
    this.router = location;
  }
  
  receiveMessage($event) {
    if($event == 'false'){
     this.isCollapsed = false
    }else{
     this.isCollapsed = true
    }
   }
}
