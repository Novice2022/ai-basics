export class Vector<T = number> {
    private _elements: T[];

    constructor (value: T[]) {
        if (value.length === 0) {
            throw new Error('Empty vectors aren\'t supported');
        }

        this._elements = value;
    }

    public at(id: number): T {
        if (id < 0 || id > this._elements.length) {
            throw new Error(`Index out of range (got ${ id }, vector length is ${ this._elements.length })`);
        }

        return this._elements[id];
    }
    
    public get length() : number {
        return this._elements.length;
    }

    public multiplyScalar(other: Vector): Vector {
        if (this.length !== other.length) {
            throw new Error(`Different vectors' lengths: ${ this.length } and ${ other.length }`);
        }

        if (! (this._elements[0] instanceof Number)) {
            throw new Error('Scalar multiplication for vectors contains not numbers is not supported');
        }

        const newValue: number[] = [];

        for (let i = 0; i < this.length; i++) {
            newValue.push((this.at(i) as number) + other.at(i));
        }

        return new Vector(newValue);
    }

    toString(): string {
        if (this.length === 0) {
            return '<>';
        }
        
        if (this._elements.at(0) instanceof Number) {
            return `<${ this._elements.join(', ') }>`;
        }

        const stringElements = JSON.stringify(this._elements);

        return `<${ stringElements.substring(1, stringElements.length - 1).replace(',', ', ') }>`;
    }
}
