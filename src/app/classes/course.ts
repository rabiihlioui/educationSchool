export class Course {
    id: number;
    course: string;
    description: string;
    period: number;
    maxStudent: number;
    numberOfBooks: number;
    photoPath: string;
    constructor(id: number = 0,
                course: string = '',
                description: string = '',
                period: number = 0,
                maxStudent: number = 0,
                numberOfBooks: number = 0,
                photoPath: string = '') {
      this.id = id;
      this.course = course;
      this.description = description;
      this.period = period;
      this.maxStudent = maxStudent;
      this.numberOfBooks = numberOfBooks;
      this.photoPath = photoPath;
    }
}