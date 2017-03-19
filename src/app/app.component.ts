import { Component } from '@angular/core';

 
 @Component({
  selector: 'my-app',
  template:`<h1>hii</h1>
<header>
<nav>
<a [routerLink]="['Contact']">Contacts</a>
<a [routerLink]="['Home']">Home</a>
<a [routerLink]="['NewContact']">NewContact</a>
</nav>

</header>
<router-outlet></router-outlet>  
`,  
})
export class AppComponent  { 
  
  name = 'Ninja'; 



}
