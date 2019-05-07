import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelChange'
})
export class LabelChangePipe implements PipeTransform {

  transform(value: string, args?: number): string {
    return args > 4 ?  "Годы создания:" :  "Год создания";
  }

}
