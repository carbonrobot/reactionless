import { Component, OnInit } from '@angular/core';

import { Planet } from '../models/planet';
import { PlanetsService } from '../services/planets.service';

@Component({
    selector: 'planets',
    templateUrl: './planets.component.html',
    styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
    planetsList: Planet[] = [];
    selectedPlanet: Planet;
    
    constructor(private _planetservice: PlanetsService) { }

    ngOnInit() {
        this._planetservice.getPlanets().then(planets => this.planetsList = planets);
    }

}
