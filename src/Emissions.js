import {Vector2D} from "@inwebo/vector";

export default class Emissions {

    static A = 'A';
    static B = 'B';
    static C = 'C';
    static D = 'D';
    static E = 'E';
    static F = 'F';
    static G = 'G';

    constructor() {
        this._a = new Vector2D(0, 100);
        this._b = new Vector2D(101, 120);
        this._c = new Vector2D(121, 140);
        this._d = new Vector2D(141, 160);
        this._e = new Vector2D(161, 200);
        this._f = new Vector2D(201, 250);
        this._g = new Vector2D(251, 251);
    }

    /**
     * @param {Number} co2
     * @returns {string}
     */
    getTag (co2) {
        if (co2 > this._a.getY()) {
            if (co2 > this._b.getY()) {
                if (co2 > this._c.getY()) {
                    if (co2 > this._d.getY()) {
                        if (co2 > this._e.getY()) {
                            if (co2 > this._f.getY()) {
                                return Emissions.G;
                            } else {
                                return Emissions.F;
                            }
                        } else {
                            return Emissions.E;
                        }
                    } else {
                        return Emissions.D;
                    }
                } else {
                    return Emissions.C;
                }
            } else {
                return Emissions.B;
            }
        } else {
            return Emissions.A;
        }
    }
}
