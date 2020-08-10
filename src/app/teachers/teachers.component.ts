import { Component, OnInit } from '@angular/core';
import { ManageTeachersService } from '../services/manage-teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(
    public manageTeachersService: ManageTeachersService
  ) { }

  ngOnInit(): void {
  }

}
