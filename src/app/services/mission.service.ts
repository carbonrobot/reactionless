import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MissionService {

    // Observable string sources
    private missionConfirmedSource = new Subject<number>();

    // Observable string streams
    missionConfirmed$ = this.missionConfirmedSource.asObservable();

    // Service message commands
    confirmMission(velocity: number) {
        this.missionConfirmedSource.next(velocity);
    }

}
