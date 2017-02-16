import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timespan'
})
export class TimespanPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return this.parse(value);
  }

  private MILLISECOND: number = 1;
  private SECOND: number = 1000 * this.MILLISECOND;
  private MINUTE: number = 60 * this.SECOND;
  private HOUR: number = 60 * this.MINUTE;
  private DAY: number = 24 * this.HOUR;
  private WEEK: number = 7 * this.DAY;
  private MONTH: number = 30 * this.DAY;
  private YEAR: number = 365.25 * this.DAY;
  
  private increments = [
    { m: this.MILLISECOND, t: 'millisecond' },
    { m: this.SECOND, t: 'second' },
    { m: this.MINUTE, t: 'min' },
    { m: this.HOUR, t: 'hr' },
    { m: this.DAY, t: 'day' },
    { m: this.WEEK, t: 'week' },
    { m: this.MONTH, t: 'month' },
    { m: this.YEAR, t: 'year' }
  ];

  /**
   * Parse the time into humanreadable increments
   * @param diff timespan in hours
   */
  private parse(diff) {
    if(!diff){
      return '--';
    }

    // convert to millisecond
    diff = diff * this.HOUR;

    // use years by default
    let idx = this.increments.length - 1;

    for (let i = 1; i < this.increments.length; i++) {

      // find the smallest non-fraction unit
      if(diff < this.increments[i].m){
        idx = i - 1;
        break;
      }
    }

    // calculate whole numbers
    const u = this.increments[idx];
    let units = Math.floor(diff / u.m);
    let unit = units > 1 ? u.t + 's' : u.t;

    // calculate remaining
    const r = this.increments[idx - 1];
    let rem = Math.abs((diff / u.m) - units);
    rem = Math.floor(rem * u.m / r.m);
    let runit = rem > 1 ? r.t + 's' : r.t;

    let k = `${units} ${unit}`;
    if (rem > 0) {
      k += ` ${rem} ${runit}`;
    }
    return k;
  };


}
