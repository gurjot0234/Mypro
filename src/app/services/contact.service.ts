import {Injectable} from'@angular/core';
import {CONTACTS} from'../components/mock-contact';

@Injectable()
export class ContactService{
getContacts(){

   return Promise.resolve(CONTACTS);
}

}
