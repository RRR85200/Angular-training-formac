import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WelcomeComponent} from "../welcome/welcome.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('welcome', {static: true}) welcome: WelcomeComponent | undefined;
  name = 'Testing the company';
  subscriptions = new Subscription();
  constructor() { }

  title = 'Angular-training-formac';

  handleEvent(event: any) {
    this.title = event
  }
  ngOnInit() {
    this.subscriptions.add(this.welcome?.buttonClick.subscribe((res: any) => {
      console.log(res);
    }))
  }

  ngAfterViewInit() {
    this.subscriptions.add(this.welcome?.buttonClick.subscribe((res: any) => {
      console.log(res);
    }))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
