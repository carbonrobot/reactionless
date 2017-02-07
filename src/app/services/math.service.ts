import { Injectable } from '@angular/core';

@Injectable()
export class MathService {

    private static conversions: Array<number> = new Array<number>();

    //constructor() { this.init(); }

    // convert units
    public static convert(from: string, to: string, value: number) {
        return this.conversions[`${from}:${to}`] * value;
    }

    /**
     * Solves for an SAS triangle using the law of cosines
     * @param a The length of a known side
     * @param b The length of a known side
     * @param t The angle opposite the side to solve for
     * @return The length of the side opposite angle t 
     */
    public static lawOfCosines(a: number, b: number, t: number): number {
        // c^2 = a^2 + b^2 - 2ab cos(t)
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(t));
    }

    /**
     * Finds the signed angle between to angles
     */
    public static signedAngle(a: number, b: number): number {
        let t = a - b;
        return this.mod(t + Math.PI, Math.PI * 2) - Math.PI;
    }

    /**
     * A corrected version of mod, that will return the proper sign
     */
    private static mod(i: number, j: number):number {
        return i - Math.floor(i / j) * j;
    }

    // //private init(): void {
    //     // distance
    //     conversions['au:km'] = 1.496e8;
    //     this.conversions['km:au'] = 1 / 1.496e8;
    //     this.conversions['ly:km'] = 9.461e12;
    //     this.conversions['km:ly'] = 1 / 9.461e12;

    //     // velocity
    //     this.conversions['km/s:km/h'] = 1 / 60;
    //     this.conversions['km/h:km/s'] = 60;
    // //}

}
