import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prixEuro'
})
export class PrixEuroPipe implements PipeTransform {
  transform(value: number): string {
    return value.toFixed(2) + ' €';
  }
}
