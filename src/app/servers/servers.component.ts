import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUser = false;
  serverCreationStatus = 'No server has been created!';
  serverName = 'Test Server';
  serverCreated = false;
  userName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  // onUpdateServerName(event: any) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  //   // console.log(event);
  // }

  onUpdateUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
    this.allowNewUser = this.userName.length != 0;
  }

  onClearUserName() {
    this.userName = '';
  }

}
