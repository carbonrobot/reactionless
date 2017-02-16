import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';

import { Planet } from '../models/planet';
import { MathService } from '../services/math.service';
import { MissionService, IShipModel } from '../services/mission.service';

@Component({
    selector: 'vector',
    templateUrl: './vector.component.html',
    styleUrls: ['./vector.component.css']
})
export class VectorComponent implements OnInit, OnChanges {

    private model: IShipModel;

    // time to target
    public ttt: number = 0;

    // angle to target
    public att: number = 0;

    // dist to target
    public dtt: number = 0;

    // TODO should move to the ship
    calculateTime(){

        // use the sun as the origin of a triangle and calculate the angle between targets
        this.att = MathService.signedAngle(this.source.position, this.target.position);
        this.dtt = MathService.lawOfCosines(this.source.distance, this.target.distance, this.att);

        if(this.model){
            this.ttt = this.dtt / this.model.velocity;
        }

        // TODO: include accel/decel
        // calculate the travel time based on accel/cruise/decel time
        // for a long enough distance
        // ship must accel to maxV, cruise, then decel approaching zero at target
        // for short distances
        // ship accel, then immediate decel
    }

    @Input()
    source: Planet;

    @Input()
    target: Planet;

    constructor(private missionService: MissionService) {
        this.missionService.missionConfirmed$.subscribe(m => {
            this.model = m;
            this.calculateTime();
        });
    }

    ngOnInit() { 
        this.calculateTime();
    }

    ngOnChanges(){
        this.calculateTime();
    }

}
