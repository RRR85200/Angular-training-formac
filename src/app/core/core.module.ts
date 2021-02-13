import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpService} from "./service/http.service";
import {inject} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService]
})
export class CoreModule { }
