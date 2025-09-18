import { Vector } from "../math/vector";

export default class Collection {
    readonly name: string;
    private _objects: Vector[];

    get objects(): Vector[] {
        return this._objects;
    }

    constructor(name: string, objects: Vector[] = []) {
        this.name = name;
        this._objects = objects;
    }

    add(objects: Vector | Vector[]): void {
        this._objects = this.objects.concat(objects);
    }

    toString(): string {
        return this._objects.toString();
    }
}
