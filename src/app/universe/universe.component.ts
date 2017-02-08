import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { PlanetsService } from '../services/planets.service';
import { Planet } from '../models/planet';

declare var paper: any;

@Component({
    selector: 'universe',
    templateUrl: './universe.component.html',
    styleUrls: ['./universe.component.css']
})
export class UniverseComponent implements OnInit {

    //private _worldScale = 1000;
    // determine world coords scaling
    // we want h,w but the canvas is ch, cw
    // determine which dimension is smaller, and use that
    private context: any;


    private planets: Planet[];
    private selectedPlanet: Planet;

    private worldSize: number = 4000e+6; // millions of km, e+6
    private worldScale: number;
    private worldBounds: any;

    constructor(private planetService: PlanetsService) { }

    @ViewChild("stage")
    public stage: ElementRef;

    ngOnInit() {
        this.planetService.getPlanets().then(planets => {
            this.planets = planets;
            this.selectedPlanet = this.planets.filter((p: Planet) => {
                // fake it for now
                // later, do a real selections
                if (p.name === 'Earth') return p;
            })[0];

            this.render();
        });
    }

    ngAfterViewInit() {
        this.context = this.stage.nativeElement;

        // setup world scaling
        let dw = this.context.height;
        if (this.context.width < dw) dw = this.context.width;
        this.worldScale = dw / this.worldSize;
        console.log('universe size', `${this.worldSize}e+6 km`);
        console.log('universe scale', `1px = ${this.worldScale}e+6 km`);
    }

    private render(){
        paper.setup(this.context);

        paper.project.addLayer(this.drawBackground());
        paper.project.addLayer(this.drawRadar());
        paper.project.addLayer(this.drawSun());
        paper.project.addLayer(this.drawPlanets());

        paper.view.draw();
    }

    private toWorldScale(value: number) {
        return value /= this.worldScale;
    }

    private toScreenScale(value: number) {
        return (value) * this.worldScale;
    }

    private drawSun() {
        const bounds = paper.view.bounds;

        const layer = new paper.Layer();

        const radius = 695700; // e+6 km or 695,700 km
        const r = this.toScreenScale(radius);
        console.log(`Sun radius ${radius} [${r}]`);

        const c = new paper.Path.Circle(bounds.center, r * 20);
        c.fillColor = 'yellow';

        layer.addChild(c);

        return layer;
    }

    private drawPlanets() {
        const bounds = paper.view.bounds;

        const layer = new paper.Layer();

        this.planets.forEach(planet => {

            // determine orbital distance from center
            let d = planet.distance;
            d = this.toScreenScale(d);

            let r = planet.radius;
            r = this.toScreenScale(r) * 1000;

            console.log(`${planet.name} distance ${planet.distance} [${d}] radius ${planet.radius} [${r}]`);

            // draw orbital
            const o = new paper.Path.Circle(bounds.center, d);
            o.strokeColor = '#EFEFEF';

            // draw planet
            const p = new paper.Path.Circle(bounds.center.add([d, 0]), r);
            p.fillColor = '#D1FFF4';

            layer.addChild(o);
            layer.addChild(p);

        });

        return layer;
    }

    private drawRadar() {
        const bounds = paper.view.bounds;

        const layer = new paper.Layer();

        for (let i = 0; i < 360; i += 20) {
            const l = new paper.Path.Line(bounds.rightCenter, bounds.leftCenter);
            l.rotate(i + 7);
            layer.addChild(l);
        }

        // for (let i = 0; i <= 5; i++) {
        //     const c = new paper.Path.Circle(bounds.center, i * 75);
        //     layer.addChild(c);
        // }

        layer.strokeColor = '#414141';

        return layer;
    }

    private drawBackground() {
        const bounds = paper.view.bounds;
        const layer = new paper.Layer();

        const bg = new paper.Path.Rectangle(bounds.topLeft, bounds.bottomRight);
        layer.addChild(bg);

        return layer;
    }

}
