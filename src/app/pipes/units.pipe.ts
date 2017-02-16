import { Pipe, PipeTransform } from '@angular/core';

import { MathService } from '../services/math.service';

@Pipe({
  name: 'units'
})
export class UnitsPipe implements PipeTransform {

  transform(value: number, fromUnit: string, toUnit: string): string {
    return MathService.convert(fromUnit, toUnit, value).toPrecision(4);
  }

}
