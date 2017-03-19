import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from'@angular/forms';
import { AppComponent }  from './app.component';
import{contact} from './components/contact'
import{HomeComponent1} from'./components/home.1component'

import{ContactListComponent} from './components/contactList.component'
import{ContactComponent} from './components/contactDetails.component'
import{NewContactComponent} from './components/NewContact'
import{AppRoutingModule} from './app-routing.module'



@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule  ],
  declarations: [ AppComponent,ContactListComponent,HomeComponent1,ContactComponent,NewContactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
