import { Body } from './body'

export class Planet extends Body {
    
    /**
     * Creates and instance of a Planet
     * @param name The name of the Planet
     * @param mass The mass of the Planet
     * @param radius The radius of the Planet
     * @param rotation The rotation speed of the Planet about its axis
     * @param distance The distance of the Planet from the Sun
     * @param orbit The orbital period of the Planet around the Sun
     * @param plane The angle of offset of the elliptic plane of the Planet
     * @param shape The function of the shape of the orbit
     * @param position The current angular position of the Planet in its orbit
     */
    constructor(
        public name: string, 
        public mass: number,
        public radius: number,
        public rotation: number,
        public distance: number,
        public orbit: number,
        public plane: number = 0,
        public shape: (x,y) => number = OrbitalShape.Circle,
        public position: number = 0){

            super(name, mass, radius, rotation);
    }

}

export class OrbitalShape {
    public static Circle = (x,y): number => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
