import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TemplateFormComponent} from "./template-form/template-form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {BrowserModule} from "@angular/platform-browser";
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import {FormacFormsRoutingModule} from "./formacForms-routing.module";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormacFormsRoutingModule,
  ],
  exports: [
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  providers: []
})
export class FormacFormsModule { }
