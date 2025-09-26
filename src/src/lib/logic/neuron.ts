import { Vector } from "../math/vector";

export default class Neuron {
    private _weights: Vector;
    private _correctionSpeed: number;

    constructor (weights: Vector, correctionSpeed: number) {
        this._weights = weights;
        this._correctionSpeed = correctionSpeed
    }

    /**
     * @returns Vector of weights after its correction
     */
    learn(parameters: Vector): Vector {
        return this._weights.subtract(
            this._gradient(parameters).multiply(this._correctionSpeed)
        );
    }

    private _executeWith(parameters: Vector): number {
        return parameters.multiplyScalar(this._weights);
    }

    private _activationFunction(value: number): number {
        return Math.E ** value / (1 + Math.E ** 1);
    }

    private _gradient(parameters: Vector): Vector {
        const executedWithParameters = this._executeWith(parameters);

        return (new Vector([])).multiply(  // how to calculate vector (delta(v) / delta(w[0]), delta(v) / delta(w[1]), ..., delta(v) / delta(w[n]))
            2 * (executedWithParameters - this._activationFunction(executedWithParameters))
        );
    }
}
