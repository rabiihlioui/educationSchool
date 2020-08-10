export class Teacher {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    occupation: string;
    cin: number;
    age: number;
    constructor(id: number = 0,
                firstname: string = '',
                lastname: string = '',
                email: string = '',
                password: string = '',
                occupation: string = '',
                cin: number = 0,
                age: number = 0) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.password = password;
      this.occupation = occupation
      this.cin = cin;
      this.age = age;
    }
}
