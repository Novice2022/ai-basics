import { Vector } from "../math/vector";

interface IParameter {
    name: string;
    value: number;
}

interface IParameterGenerationDefinition {
    standard: number;
    inaccuracy: number;
}

const generateParameter = (
    parameterName: string,
    parameterDefinition: IParameterGenerationDefinition
): IParameter => {
    return {
        name: parameterName,
        value: parameterDefinition.standard - parameterDefinition.inaccuracy / 2 + Math.random() * parameterDefinition.inaccuracy
    }
}


export interface IParameterizedObject {
    parameters: IParameter[];
    getCoefficients(): Vector;
    toString(): string;
}

class ParameterizedObject implements IParameterizedObject {
    parameters: IParameter[];

    constructor(parameters: IParameter[]) {
        this.parameters = parameters;
    }

    toString(): string {
        return this.parameters.toString();
    }

    getCoefficients(): Vector {
        const values: number[] = [];

        this.parameters.forEach(param => {
            values.push(param.value);
        });

        return new Vector(values);
    }
}

export class Pen extends ParameterizedObject {
    constructor() {
        const lengthParameterDefinition: IParameterGenerationDefinition = {
            standard: 25,
            inaccuracy: 5
        }

        const diameterParameterDefinition: IParameterGenerationDefinition = {
            standard: 6,
            inaccuracy: 1
        }

        super([
            generateParameter('length', lengthParameterDefinition),
            generateParameter('diameter', diameterParameterDefinition)
        ]);
    }
}

export class Cilinder extends ParameterizedObject {
    constructor() {
        const lengthParameterDefinition: IParameterGenerationDefinition = {
            standard: 200,
            inaccuracy: 10
        }

        const diameterParameterDefinition: IParameterGenerationDefinition = {
            standard: 15,
            inaccuracy: 13
        }

        super([
            generateParameter('length', lengthParameterDefinition),
            generateParameter('diameter', diameterParameterDefinition)
        ]);
    }
}
