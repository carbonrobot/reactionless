import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MissionService {

    // Observable string sources
    private missionConfirmedSource = new Subject<IShipModel>();

    // Observable string streams
    missionConfirmed$ = this.missionConfirmedSource.asObservable();

    // Service message commands
    confirmMission(model: IShipModel) {
        this.missionConfirmedSource.next(model);
    }

}

export interface IShipModel{
    thrust: number;
    velocity: number;
}