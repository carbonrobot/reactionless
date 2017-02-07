import { Component, OnInit, Input } from '@angular/core';

import { MissionService } from '../services/mission.service';

@Component({
    selector: 'throttle',
    templateUrl: './throttle.component.html',
    styleUrls: ['./throttle.component.css']
})
export class ThrottleComponent implements OnInit {

    public velocity: number = 5000;

    constructor(private missionService: MissionService) { 
        
    }

    ngOnInit() {
    }

    onVelocityChanged(): void {
        this.missionService.confirmMission(this.velocity);
    }

}
