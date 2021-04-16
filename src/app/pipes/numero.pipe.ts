import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {

  transform(value: number, decimales: number, moneda?: string): number | string {
    let valorRedondeado: number;
    const factor: number = Math.pow(10, decimales);
    if(value === null) {
      return 'Sin datos';
    } else if(value < 0) {
      valorRedondeado = (Math.round(-value * factor) / factor) * -1;
    } else {
      valorRedondeado = Math.round(value * factor) / factor;
    }
    let valorFormateado = new Intl.NumberFormat('es-ES', {minimumFractionDigits: decimales}).format(valorRedondeado);
    return moneda ? valorFormateado + ' ' + moneda : valorFormateado;
  }

}
