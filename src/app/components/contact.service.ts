import{Injectable} from'@angular/core'
import {CONTACTS} from './mock-contact'
@Injectable()
export class ContactService{
getContacts(){

 return   Promise.resolve(CONTACTS);
}


}