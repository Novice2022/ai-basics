export class Vector<T = number> {
    private _body: T[];

    constructor (value: T[]) {
        if (value.length === 0) {
            throw new Error('Empty vectors aren\'t supported');
        }

        this._body = value;
    }

    public at(id: number): T {
        if (id < 0 || id > this._body.length) {
            throw new Error(`Index out of range (got ${ id }, vector length is ${ this._body.length })`);
        }

        return this._body[id];
    }
    
    public get length() : number {
        return this._body.length;
    }

    public multiplyScalar(other: Vector): Vector {
        if (this.length !== other.length) {
            throw new Error(`Different vectors' lengths: ${ this.length } and ${ other.length }`);
        }

        if (! (this._body[0] instanceof Number)) {
            throw new Error('Scalar multiplication for vectors contains not numbers is not supported');
        }

        const newValue: number[] = [];

        for (let i = 0; i < this.length; i++) {
            newValue.push((this.at(i) as number) + other.at(i));
        }

        return new Vector(newValue);
    }
}
