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
    // http://www.smartconversion.com/otherInfo/Equatorial_Radius_of_planets_and_the_sun.aspx
    private PLANETS: Planet[] = [
        new Planet('Mercury', 3.181e23, 2433, 58.82, 57.9e6, 87.96),
        new Planet('Venus', 4.883e24, 6053, 244.59, 108.2e6, 224.68),
        new Planet('Earth', 5.979e24, 6371, 1, 149.5e6, 365.25),
        // moon: 7.354e22, 1738, 27.40, 0, 0
        new Planet('Mars', 6.418e23, 3380, 1.03, 227.9e6, 686.98),
        new Planet('Jupiter', 1.90e27, 71492, 0.41, 778.3e6, 4332.5955),
        new Planet('Saturn', 5.69e26, 60268, 0.425, 1427e6, 10758.804)
    ];

}
