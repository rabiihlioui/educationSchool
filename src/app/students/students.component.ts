import { Component, OnInit } from '@angular/core';
import { ManageStudentsService } from '../services/manage-students.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(
    public manageStudentsService: ManageStudentsService,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  deleteAllStudents() {
    this.manageStudentsService.deleteAllStudents();
  }

}
