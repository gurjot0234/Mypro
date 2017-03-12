import { Component } from '@angular/core';
import { HomeComponent } from './components/home.component';
@Component({
  selector: 'my-app',
  template:`<h1>{{name}}</h1>
  <my></my>
`,

})
export class AppComponent  { 
  
  name = 'Ninja'; 



}
