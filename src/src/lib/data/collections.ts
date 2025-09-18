import type { IParameterizedObject } from "./objects";

export default class Collection {
    private _objects: IParameterizedObject[];

    readonly name: string;

    get objects(): IParameterizedObject[] {
        return this._objects;
    }

    constructor(name: string, objects: IParameterizedObject[] = []) {
        this.name = name;
        this._objects = objects;
    }

    add(objects: IParameterizedObject | IParameterizedObject[]): void {
        this._objects = this.objects.concat(objects);
    }
}
