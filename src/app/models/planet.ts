import { Body } from './body'

export class Planet extends Body {
    
    constructor(
        public name: string, 
        public mass: number,
        public radius: number,
        public rotation: number,
        public distance: number,
        public orbit: number,
        public plane: number){

            super(name, mass, radius, rotation);
    }

}
