import {Component, EventEmitter, Input, Output, OnInit, OnChanges, OnDestroy} from '@angular/core';
import {HttpService} from "../core/service/http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnChanges, OnDestroy {
@Input() name: string = '';
@Input() age: number = 0;
@Output() buttonClick =new  EventEmitter<any>() ;
items = ['One', 'Two', 'Three'];
serivceStatus = '';
hide = false;
location: string = '';
posts: Array<any> = [];


  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.serivceStatus = this.httpService.serviceStatus
  }

  ngOnInit(): void {
    this.httpService.getNumber().subscribe(res => {
      console.log(res);
    });

    this.route.paramMap.subscribe(param => {
      this.name = param.get('name') || '';
      this.age =parseInt(param.get('age') || '') || 0;
    })
    this.route.queryParamMap.subscribe(param => {
      this.location = param.get('location') || '';
    })

    this.getPosts()
  }
  ngOnChanges() {
    console.log('Name', this.name, 'Age', this.age)
  }

  getPosts() {
    this.httpService.getData('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.posts = res;
    }, err => {
      window.alert(err)
    }, () => {
      window.alert('Succesfull')
    })
  }

  changeName(input: string) {
    this.buttonClick.emit(input);
    this.hide = true;
  }
  handleInputChange(event:any) {
    console.log('Event:', event)
  }
  ngOnDestroy() {
  }

}
