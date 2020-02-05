import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '.app-servers'
   selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public allowNewServer: boolean = false;


  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

}
