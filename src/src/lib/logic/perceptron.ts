import type Selection from "../data/selection";
import { Vector } from "../math/vector";

export default class Perceptrone {
    private parametersAmount: number;
    private selections: Selection[];
    private weights: Vector;

    constructor (parametersAmount: number, selections: Selection[], weights?: Vector) {
        this.parametersAmount = parametersAmount;
        this.selections = selections;
        
        if (weights) {
            this.weights = weights;
        } else {
            const randomWeight: number[] = [];

            for (let _ = 0; _ < parametersAmount; _++) {
                randomWeight.push(Math.random());
            }

            this.weights = new Vector(randomWeight);
        }
    }
}
