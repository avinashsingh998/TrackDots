import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'farenheitToCel'
})
export class FarenheitToCelPipe implements PipeTransform {

  transform(value: number): string {
    return ((value-32)*5/9).toFixed(1);
  }

}
