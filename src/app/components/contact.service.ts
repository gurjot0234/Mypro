import{Injectable} from'@angular/core'
import {CONTACTS} from './mock-contact'
import{contact} from'./contact'
@Injectable()
export class ContactService{
getContacts(){

 return   Promise.resolve(CONTACTS);
}

insertContact(contact1:contact){
Promise.resolve(CONTACTS).then((contacts:contact[])=>contacts.push(contact1));

}

}