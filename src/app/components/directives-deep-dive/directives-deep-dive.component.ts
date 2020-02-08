import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-deep-dive',
  templateUrl: './directives-deep-dive.component.html',
  styleUrls: ['./directives-deep-dive.component.css']
})
export class DirectivesDeepDiveComponent implements OnInit {

  //public numbers: Array<number> = [1,2,3,4,5];
  public oddNumbers: Array<number> = [1,3,5];
  public evenNumbers: Array<number> = [2,4];
  public onlyOdd: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
