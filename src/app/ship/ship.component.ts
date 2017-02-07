import { Component, OnInit } from '@angular/core';

import { MissionService } from '../services/mission.service';

@Component({
    selector: 'ship',
    templateUrl: './ship.component.html',
    styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

    public thrust: number = 1000.0;
    public velocity: number = 200000.0;

    constructor(private missionService: MissionService) { }
    
    ngOnInit() {
        this.onMissionChanged();
    }

    onMissionChanged(): void {
        this.missionService.confirmMission({thrust: this.thrust, velocity: this.velocity});
    }
    
}
