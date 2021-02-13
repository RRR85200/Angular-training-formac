import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
user = new User('John');

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

  onSubmit() {
      console.log(this.user)
  }

}

// classes In typescript

// export interface User {
//   firstName?: string;
//   lastName?: string | undefined;
//   email?: string |undefined
// }

export class User {
  firstName: string;
  lastName: string | undefined;
  email: string |undefined

  constructor(firstName: string, lastName?:string, email?: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
  }
}
