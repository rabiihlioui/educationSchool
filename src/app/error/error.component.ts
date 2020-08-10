import { Component, OnInit } from '@angular/core';
import { ActiveMenuItemService } from '../services/active-menu-item.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  //errorMessage = 'An ERROR OCCURED! Contact Support at *** - ***'

  constructor(
    public activeMenuItemService: ActiveMenuItemService
  ) { }

  ngOnInit(): void {
  }

}
