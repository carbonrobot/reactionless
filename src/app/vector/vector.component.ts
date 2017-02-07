import { Component, OnInit, Input, Output } from '@angular/core';

import { Planet } from '../models/planet';
import { MathService } from '../services/math.service';

@Component({
    selector: 'vector',
    templateUrl: './vector.component.html',
    styleUrls: ['./vector.component.css']
})
export class VectorComponent implements OnInit {

    private _velocity: number = 1;

    // time to target
    public ttt: number = 0;

    // angle to target
    public att: number = 0;

    // dist to target
    public dtt: number = 0;

    @Input()
    source: Planet;

    @Input()
    target: Planet;

    @Input()
    set velocity(value: number){
        this._velocity = value;
        this.calculateTime();
    }
    get velocity(): number {
        return this._velocity;
    }

    constructor() { }

    calculateTime(){
        //this.ttt = this.target.distance / this.velocity;
        // find the angle between targets
        this.att = MathService.signedAngle(this.source.position, this.target.position);
        this.dtt = MathService.lawOfCosines(this.source.distance, this.target.distance, this.att);
        this.ttt = this.dtt / this.velocity;
    }

    ngOnInit() {
        
    }

}
