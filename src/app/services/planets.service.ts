import { Injectable } from '@angular/core';

import { Planet } from '../models/planet';

@Injectable()
export class PlanetsService {

    constructor() { }

    getPlanets(): Promise<Planet[]> {
        return Promise.resolve(this.PLANETS);
    }

    // http://image.slidesharecdn.com/pptplanet-120701013234-phpapp02/95/ppt-planet-25-728.jpg?cb=1341106458
    // http://www.enchantedlearning.com/subjects/astronomy/planets/
    private PLANETS: Planet[] = [
        new Planet('Mercury', 3.181e23, 2433, 58.82, 57.9e6, 87.96),
        new Planet('Venus', 4.883e24, 6053, 244.59, 108.2e6, 224.68),
        new Planet('Earth', 5.979e24, 6371, 1, 149.5e6, 365.26),
        // moon: 7.354e22, 1738, 27.40, 0, 0
        new Planet('Mars', 6.418e23, 3380, 1.03, 227.9e6, 686.98)
    ];

}
