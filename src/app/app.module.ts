import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { PlanetsService } from './services/planets.service';
import { MathService } from './services/math.service';
import { MissionService } from './services/mission.service';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { VectorComponent } from './vector/vector.component';
import { ShipComponent } from './ship/ship.component';
import { UniverseComponent } from './universe/universe.component';
import { UnitsPipe } from './pipes/units.pipe';
import { TimespanPipe } from './pipes/timespan.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    VectorComponent,
    ShipComponent,
    UniverseComponent,
    UnitsPipe,
    TimespanPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [PlanetsService, MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
