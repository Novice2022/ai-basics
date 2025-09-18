import type Collection from "../data/collections";
import { Vector } from "../math/vector";

export default class Perceptrone {
    private _parametersAmount: number;
    private _objects: Collection;
    private _weights: Vector;

    constructor (parametersAmount: number, objects: Collection, weights?: Vector) {
        this._parametersAmount = parametersAmount;
        this._objects = objects;
        
        this._objects.objects.forEach(obj => {
            if (obj.parameters.length !== parametersAmount) {
                throw new Error(`Expected ${ parametersAmount } parameters, got ${ obj.parameters.length }!`);
            }
        });

        if (weights) {
            this._weights = weights;
        } else {
            const newWeights: number[] = [];

            for (let _ = 0; _ < parametersAmount; _++) {
                newWeights.push(Math.random());  // random weigth;
            }

            this._weights = new Vector(newWeights);
        }
    }
}
