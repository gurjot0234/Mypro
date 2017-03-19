import { Component,OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from'@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'contact',
  template:`
      <div >
 <label>Firstname</label><input type="text" value={{contactnew.firstName}}><br/>
<label>lastname</label><input type="text" value={{contactnew.last}}><br/>
<label>Phone</label><input type="text" value={{contactnew.phone}}><br/>
<label>email</label><input type="text" value={{contactnew.email}}>
<button (click)="OnNewContact()" > create contact</button>

  </div>

`,
inputs:["contactnew"]
})


export class  ContactComponent   { 
public contactnew="";

constructor(private router:Router,private route:ActivatedRoute){}

OnNewContact(){
this.router.navigate(['/NewContact',{last:this.contactnew.last}])
    
}


}
