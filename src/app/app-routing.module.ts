import { NgModule }              from '@angular/core';

import{HomeComponent1} from'./components/home.1component'

import{NewContactComponent} from'./components/NewContact'
import{ContactListComponent} from './components/contactList.component'
import {RouterModule, Routes} from'@angular/router'


const appRoutes: Routes = [
  { path: 'Contact', component: ContactListComponent },
   { path: 'NewContact', component: NewContactComponent },

      { path: 'NewContact/:last',component: NewContactComponent },
  { path: 'Home', component: HomeComponent1 },
  { path: '',   redirectTo: '/Home', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}