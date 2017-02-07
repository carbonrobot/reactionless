import { Component, OnInit, Input } from '@angular/core';

import { MissionService } from '../services/mission.service';
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

    constructor(private planetService: PlanetsService, private missionService: MissionService) {
        this.missionService.missionConfirmed$.subscribe(v => {
            this.velocity = v;
        });
    }

    ngOnInit() {
        this.planetService.getPlanets().then(planets => this.planets = planets);
    }

}
