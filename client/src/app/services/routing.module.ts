import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from '../main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  //{ path: 'project/:id', component: ProjectComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
