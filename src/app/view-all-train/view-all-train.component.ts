import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-train',
  templateUrl: './view-all-train.component.html',
  styleUrls: ['./view-all-train.component.css']
})
export class ViewAllTrainComponent implements OnInit {

  constructor() { }
  name="Abhinand"
  status:boolean=false
  readButton=()=>{
    this.name="raju"
    this.status=true
  }
  ngOnInit(): void {
  }

}
