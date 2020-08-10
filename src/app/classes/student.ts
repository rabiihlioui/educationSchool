export class Student {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;    
    occupation: string;
    cin: number;
    age: number;
    photoPath: string;
    constructor(id: number = 0,
                firstname: string = '',
                lastname: string = '',
                email: string = '',
                password: string = '',
                occupation = '',
                cin: number = 0,
                age: number = 0,
                photoPath: string = '') {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.password = password;
      this.occupation = occupation;
      this.cin = cin;
      this.age = age;
      this.photoPath = photoPath;
    }
}
