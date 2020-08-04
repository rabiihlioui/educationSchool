import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  loginFlag: boolean
  registerFlag: boolean

  activeTab: boolean

  constructor() { }

  ngOnInit(): void {
    this.loginFlag = true;
    this.registerFlag = false;
    this.activeTab = true;
  }

  toggleLogin() {
    this.loginFlag = true;
    this.registerFlag = false;
    this.activeTab = true;
  }

  toggleRegiter() {
    this.loginFlag = false;
    this.registerFlag = true;
    this.activeTab = false;
  }

}
