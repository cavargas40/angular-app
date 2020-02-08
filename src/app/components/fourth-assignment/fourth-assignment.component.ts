import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-assignment',
  templateUrl: './fourth-assignment.component.html',
  styleUrls: ['./fourth-assignment.component.css']
})
export class FourthAssignmentComponent implements OnInit {

  public oddNumbers: Array<number> = [];
  public evenNumbers: Array<number> = [];

  constructor() { }

  ngOnInit() {
  }

  onIntervalFired(firedNumber: number){
    if(firedNumber % 2 === 0) { 
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

}
