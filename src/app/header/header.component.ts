import { Component, OnInit } from '@angular/core';
import { ActiveMenuItemService } from '../services/active-menu-item.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public activeMenuItemService: ActiveMenuItemService,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

}
