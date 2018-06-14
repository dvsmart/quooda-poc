import { Pipe, PipeTransform } from "@angular/core";
//Transform the enum to key value pair for showing them in the drop down list
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (var enumMember in value) {
      var isValueProperty = parseInt(enumMember, 10) >= 0
      if (isValueProperty) {
        keys.push({key: enumMember, value: value[enumMember]});
        console.log(keys);
      } 
    }
    return keys;
  }
}