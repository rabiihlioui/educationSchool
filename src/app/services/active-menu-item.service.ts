import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveMenuItemService implements OnInit {

  activeHome: boolean
  activeAbout: boolean
  activeCourse: boolean
  activeBlog: boolean
  activeTeachers: boolean
  activeStudents: boolean
  activePricing: boolean
  activeContact: boolean

  constructor() { }

  ngOnInit(): void {
    this.activeHome = true;
    this.activeAbout = false;
    this.activeCourse = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateHome() {
    this.activeHome = true;
    this.activeAbout = false;
    this.activeCourse = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateAbout() {
    this.activeHome = false;
    this.activeAbout = true;
    this.activeCourse = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateCourse() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourse = true;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateBlog() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourse = false;
    this.activeBlog = true;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateTeachers() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourse = false;
    this.activeBlog = false;
    this.activeTeachers = true;
    this.activeStudents = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateStudents() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourse = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = true;
    this.activePricing = false;
    this.activeContact = false;
  }

  activatePricing() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourse = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activePricing = true;
    this.activeContact = false;
  }

  activateContact() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourse = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activePricing = false;
    this.activeContact = true;
  }
}
