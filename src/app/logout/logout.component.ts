import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private headerComponent: HeaderComponent,
    private router: Router,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.authenticationService.logout();
    this.bookingService.unbookUsersCourses();
    this.router.navigate(['logout']);
    this.headerComponent.ngOnInit();
  }

}
