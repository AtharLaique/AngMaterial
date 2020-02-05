import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.css']
})
export class AgmComponent implements OnInit {
  
  lat: number =30.3753;
   lng: number = 69.3451;
  constructor() { }

  ngOnInit() {
  }

}
