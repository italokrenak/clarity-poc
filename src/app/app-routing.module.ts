import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocFormComponent } from './poc-form/poc-form.component';

const routes: Routes = [
  { path: 'poc-form', component:  PocFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
