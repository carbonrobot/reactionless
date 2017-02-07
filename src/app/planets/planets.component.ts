import { Component, OnInit, Input } from '@angular/core';

import { PlanetsService } from '../services/planets.service';
import { Planet } from '../models/planet';

@Component({
    selector: 'planets',
    templateUrl: './planets.component.html',
    styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

    planets: Planet[];
    selectedPlanet: Planet;
    velocity: number;

    constructor(private planetService: PlanetsService) {}

    ngOnInit() {
        this.planetService.getPlanets().then(planets => {
            this.planets = planets;
            this.selectedPlanet = this.planets.filter((p: Planet) => {
                // fake it for now
                // later, do a real selections
                if (p.name === 'Earth') return p;
            })[0];
        });
    }

}
