import { Component } from '@angular/core';
@Component({
  selector: 'contact',
  template:`
      <div >
  <h4>PhoneNumbe:{{contact.phone}}</h4>
  <h4>email:{{contact.email}}</h4>

  </div>

`,
inputs:["contact"]
})


export class ContactComponent  { 
public contact={};



}
