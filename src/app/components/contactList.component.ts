import { Component } from '@angular/core';
import { ContactComponent } from './contactDetails.component';
import {ContactService} from'./contact.service';
import{contact} from'./contact';
import{OnInit} from'@angular/core';
@Component({
  selector: 'contactlist',
  template:`
  <ul>
  <li *ngFor="let contact of contacts" (click)="onSelect(contact)">
  
  <h3 >{{contact.firstName}}</h3>
 
  </li>
  </ul>   
<contact [contact]="selectedcontact"></contact>

`,
providers:[ContactService]

})


export class ContactListComponent  implements OnInit{ 
    private contacts:contact[];
    constructor(private contactservice:ContactService){



    }
public selectedcontact={};
onSelect(contact){
this.selectedcontact=contact;

}
getContact(){
this.contactservice.getContacts().then((contacts:contact[])=>this.contacts=contacts);

}

ngOnInit(){

    this.getContact();
}
}
