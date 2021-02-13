import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {path: 'home',  redirectTo: 'home',},
  {path: 'home', component: HomeComponent, },
  {path: 'welcome/:name/:age', component: WelcomeComponent},
  {path: 'forms-type', loadChildren: () => import('./forms/formacForms.module').then(m => m.FormacFormsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
