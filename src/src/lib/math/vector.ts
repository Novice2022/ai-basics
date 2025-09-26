export class Vector {
    private _elements: number[];

    constructor (elements: number[]) {
        if (elements.length === 0) {
            throw new Error('Empty vectors aren\'t supported');
        }

        this._elements = elements;
    }

    at(id: number): number {
        if (id < 0 || id > this._elements.length) {
            throw new Error(`Index out of range (got ${ id }, vector length is ${ this._elements.length })`);
        }

        return this._elements[id];
    }
    
    get length() : number {
        return this._elements.length;
    }

    subtract(other: Vector): Vector {
        if (other.length !== this._elements.length) {
            throw new Error(`Different vectors' lengths: ${ this.length } and ${ other.length }`);
        }

        const newElements: number[] = [ ...this._elements ];

        for (let i = 0; i < other.length; i++) {
            newElements[i] -= other.at(i);
        }

        return new Vector(newElements);
    }

    multiply(value: number): Vector {
        const newElements: number[] = [ ...this._elements ];

        newElements.map(element => element *= value);

        return new Vector(newElements);
    }

    multiplyScalar(other: Vector): number {
        if (this.length !== other.length) {
            throw new Error(`Different vectors' lengths: ${ this.length } and ${ other.length }`);
        }

        let result = 0;

        this._elements.forEach(element => {
            result += element;
        });

        return result;
    }

    toString(): string {
        if (this.length === 0) {
            return '<>';
        }
        
        return `<${ this._elements.join(', ') }>`;
    }
}
