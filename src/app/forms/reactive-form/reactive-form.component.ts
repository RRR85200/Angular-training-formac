import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../core/service/http.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  providers: [HttpService]
})
export class ReactiveFormComponent implements OnInit {
  // Logic resides i typescript file

  signUpForm = this.formBuilder.group({
    title: ['Enter Title', [Validators.required, Validators.maxLength(15)]],
    body: ['Enter body', [Validators.required, Validators.maxLength(20)]],
    userId: ['Enter User ID', [Validators.required, Validators.maxLength(16)]],
  })

  constructor(private formBuilder: FormBuilder, private http: HttpService) { }

  ngOnInit(): void {
    this.signUpForm.addControl('password', new FormControl('**'));
    this.signUpForm.valueChanges.subscribe(res => {
      console.log(this.signUpForm.value);
    });
    this.http.getNumber().subscribe(res => {
      console.log('Http Mumber:', res)
    })
  }

  onSubmit() {
      console.log(this.signUpForm.value)
    this.http.postData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(this.signUpForm.value)).subscribe(res=> {
      console.log(res)
    })
  }

}
