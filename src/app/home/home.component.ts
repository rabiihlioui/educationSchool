import { Component, OnInit } from '@angular/core';
import { ActiveMenuItemService } from '../services/active-menu-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private activeMenuItemService: ActiveMenuItemService
  ) { }

  ngOnInit(): void {
  }

}
