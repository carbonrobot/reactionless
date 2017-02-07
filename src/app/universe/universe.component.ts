import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

declare var paper: any;

@Component({
  selector: 'universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent implements OnInit {

  private _worldScale = 1000;

  constructor() { }

  @ViewChild("stage")
  public stage: ElementRef;

  ngOnInit() { }

  ngAfterViewInit() {
    let context = this.stage.nativeElement;

    // determine world coords scaling
    // we want h,w but the canvas is ch, cw
    // determine which dimension is smaller, and use that
    let dw = context.height;
    if (context.width < dw) dw = context.width;
    let scale = dw / this._worldScale;

    paper.setup(context);
    //paper.view.zoom = 0.25;

    // add layer to project
    paper.project.addLayer(this.drawBackground());
    paper.project.addLayer(this.drawRadar());

    paper.view.draw();
  }

  private drawSun(): void {
    const layer = new paper.Layer();
    layer.fitBounds(new paper.Path.Rectangle({
      point: paper.view.center,
      size: paper.view.size
    }));
  }

  private drawRadar() {
    const bounds = paper.view.bounds;

    const layer = new paper.Layer();
        
    for(let i = 0; i < 360; i += 20) {
      const l = new paper.Path.Line(bounds.rightCenter, bounds.leftCenter);
      l.rotate(i + 7);
      layer.addChild(l);
    }

    layer.strokeColor = '#414141';
    layer.fillColor = 'black';

    return layer;
  }

  private drawBackground(){
    const bounds = paper.view.bounds;
    const layer = new paper.Layer();
    
    const bg = new paper.Path.Rectangle(bounds.topLeft, bounds.bottomRight) ;
    layer.addChild(bg);

    return layer;
  }

}
