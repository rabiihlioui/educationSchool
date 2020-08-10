import { Component, OnInit } from '@angular/core';
import { ActiveMenuItemService } from '../services/active-menu-item.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public activeMenuItemService: ActiveMenuItemService
  ) { }

  ngOnInit(): void {
  }

}
