import { Component, OnInit } from '@angular/core';
import { ActiveMenuItemService } from '../services/active-menu-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private activeMenuItemService: ActiveMenuItemService
  ) { }

  ngOnInit(): void {
  }

}
