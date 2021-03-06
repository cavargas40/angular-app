import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  public serverId: number = 10;
  public serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
  }

  ngOnInit() {
  }

  get getServerStatus() {
    return this.serverStatus;
  }

  get getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
