import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Output() collapsedEvent = new EventEmitter<string>();
isCollapsed = true
isCollapsedMain = true
  constructor(
    private auth:AuthService
  ) { }

  ngOnInit(): void {
  }

colap(){
	this.collapsedEvent.emit(new Boolean(!this.isCollapsed).toString())
	this.isCollapsed = !this.isCollapsed
}

logout(){
  this.auth.loggedOut();  
}
}
