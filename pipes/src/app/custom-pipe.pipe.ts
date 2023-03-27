import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  nvalue!: string
  transform(value: string, ...args: unknown[]): any {
    this.nvalue = value.split('').reverse().join('');
    return this.nvalue;
  }

}
