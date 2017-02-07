import { Component, OnInit, Input, Output } from '@angular/core';

import { Planet } from '../models/planet';

@Component({
    selector: 'vector',
    templateUrl: './vector.component.html',
    styleUrls: ['./vector.component.css']
})
export class VectorComponent implements OnInit {

    private _velocity: number = 1;

    ttt: number = 0;

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
        this.ttt = this.target.distance / this.velocity;
    }

    ngOnInit() {
        
    }

}
