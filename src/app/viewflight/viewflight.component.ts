import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {

  constructor() { }

  flightData:any=[{"id":1,"name":"Ethihad","origin":2001,"destination":"Kochi","capacity":340},{"id":2,"name":"Air India","origin":2006,"destination":"TVM","capacity":340},{"id":3,"name":"Jet Airways","origin":2003,"destination":"Abhu Dhabi","capacity":345}]
  ngOnInit(): void {
  }

}
