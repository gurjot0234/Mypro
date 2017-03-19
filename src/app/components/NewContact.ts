import {ContactService} from './contact.service'
import{contact}from'./contact';
import {Component,OnInit} from'@angular/core';
import{Router,ActivatedRoute,Params} from'@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector:'NewContact',
template:`<div>
<label>Firstname</label><input type="text" id="firstName" #firstName><br/>
<label>lastname</label><input type="text" id="last" #last value={{newlast}}><br/>
<label>Phone</label><input type="text" id="phone" #phone><br/>
<label>email</label><input type="text" id="email" #email>
<button (click)="addContact(firstName.value,last.value,phone.value,email.value)" > create contact</button>


</div>`,
providers:[ContactService]
})
export class NewContactComponent implements OnInit{
public newlast="";
private sub:any;
constructor(private contactService:ContactService,private router:Router,private route:ActivatedRoute){}

addContact(firstName1:any,lastname1:any,email1:any,phone1:any){
let contact:contact={firstName:firstName1,last:lastname1,email:email1,phone:phone1}
this.contactService.insertContact(contact);
}


ngOnInit() {
  
    // (+) converts string 'id' to a number
    //.switchMap((params: Params) => this.contactService.getContacts(+params['last']))
    //.subscribe((contact:contact) => this.hero = hero);
this.sub = this.route.params.subscribe(params => {
       this.newlast = params['last']; 
});

}
}