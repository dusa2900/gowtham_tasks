import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './Interface/contact';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contacts: IContact[], searchText: string) {
    return contacts.filter( (res)=> res.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
