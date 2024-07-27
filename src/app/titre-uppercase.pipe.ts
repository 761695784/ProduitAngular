import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titreUppercase'
})
export class TitreUppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
