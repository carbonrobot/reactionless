import { Injectable } from '@angular/core';

@Injectable()
export class MathService {

    private conversions: Array<number> = new Array<number>();

    constructor() { this.init(); }

    // km/s to km/h
    public convert(from: string, to: string, value: number) {
        return this.conversions[`${from}:${to}`] * value;
    }

    private init(): void {
        // distance
        this.conversions['au:km'] = 1.496e8;
        this.conversions['km:au'] = 1/1.496e8;
        this.conversions['ly:km'] = 9.461e12;
        this.conversions['km:ly'] = 1/9.461e12;

        // velocity
        this.conversions['km/s:km/h'] = 1/60;
        this.conversions['km/h:km/s'] = 60;
    }

}
