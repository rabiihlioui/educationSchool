import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../classes/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() teacher: Teacher

  constructor() { }

  ngOnInit(): void {
    console.log(this.teacher)
  }

}
