import { Component, OnInit } from '@angular/core';
import { ManageTeachersService } from '../services/manage-teachers.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(
    public manageTeachersService: ManageTeachersService,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  deleteAllTeachers() {
    this.manageTeachersService.deleteAllTeachers();
  }

}
