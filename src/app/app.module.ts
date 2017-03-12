import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from'@angular/forms'
import { HomeComponent }  from './components/home.component';
import { ContactListComponent }  from './components/contactList.component';

import { ContactComponent }  from './components/contactDetails.component';
import { AppComponent }  from './app.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,HomeComponent,ContactListComponent,ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
