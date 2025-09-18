import Collection from "./lib/data/collections";
import { Pen } from "./lib/data/objects";
import type { Vector } from "./lib/math/vector";

const collection: Collection = new Collection('first');

const pens: Vector[] = [];

for (let _ = 0; _ < 10; _++) {
    pens.push(new Pen().getCoefficients());
}

collection.add(pens);

console.log(collection.toString());
