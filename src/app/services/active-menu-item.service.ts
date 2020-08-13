import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveMenuItemService implements OnInit {

  activeHome: boolean
  activeAbout: boolean
  activeCourses: boolean
  activatemyCourses: boolean
  activatemyStudents: boolean
  activatemyTeachers: boolean
  activeBlog: boolean
  activeTeachers: boolean
  activeStudents: boolean
  activeRegistrations: boolean
  activeBookers: boolean
  activePricing: boolean
  activeContact: boolean

  constructor() { }

  ngOnInit(): void {
    this.activeHome = true;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateHome() {
    this.activeHome = true;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateAbout() {
    this.activeHome = false;
    this.activeAbout = true;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateCourses() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = true;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateMyCourses() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = true;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateMyStudents() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = true;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateMyTeachers() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = true;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateBlog() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = true;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateTeachers() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = true;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateStudents() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = true;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateRegistrations() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = true;
    this.activeBookers = false;
    this.activePricing = false;
    this.activeContact = false;
  }

  activateBookers() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = true;
    this.activePricing = false;
    this.activeContact = false;
  }

  activatePricing() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false;
    this.activePricing = true;
    this.activeContact = false;
  }

  activateContact() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false
    this.activePricing = false;
    this.activeContact = true;
  }

  deactivateAllMenuWhenLogout() {
    this.activeHome = false;
    this.activeAbout = false;
    this.activeCourses = false;
    this.activatemyCourses = false;
    this.activatemyStudents = false;
    this.activatemyTeachers = false;
    this.activeBlog = false;
    this.activeTeachers = false;
    this.activeStudents = false;
    this.activeRegistrations = false;
    this.activeBookers = false
    this.activePricing = false;
    this.activeContact = false;
  }
}
