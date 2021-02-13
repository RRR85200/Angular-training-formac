
import {NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {TemplateFormComponent} from "./template-form/template-form.component";
import {ReactiveFormsComponent} from "./reactive-forms/reactive-forms.component";

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormsComponent,
    canActivate: [],
    children: [
      {
        path: '',
        redirectTo: 'reactive',
        canActivateChild: []
      },
      {
        path: 'reactive',
        component: ReactiveFormComponent,
        pathMatch: 'full'
      },
      {
        path: 'template',
        component: TemplateFormComponent
      },
    ]
  },
  // {
  //   path: 'reactive',
  //   component: ReactiveFormComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'template',
  //   component: TemplateFormComponent
  // },
  {path: '**', component: ReactiveFormComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class FormacFormsRoutingModule {}
