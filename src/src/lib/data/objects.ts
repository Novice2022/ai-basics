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
    parameters: Vector<IParameter>;
}

class ParameterizedObject implements IParameterizedObject {
    parameters: Vector<IParameter>;

    constructor(parameters: Vector<IParameter>) {
        this.parameters = parameters;
    }
}

export class Pen extends ParameterizedObject{
    constructor() {
        const lengthParameterDefinition: IParameterGenerationDefinition = {
            standard: 25,
            inaccuracy: 5
        }

        const diameterParameterDefinition: IParameterGenerationDefinition = {
            standard: 6,
            inaccuracy: 1
        }

        const parameters = new Vector<IParameter>([
            generateParameter('length', lengthParameterDefinition),
            generateParameter('diameter', diameterParameterDefinition)
        ]);

        super(parameters);
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

        const parameters = new Vector<IParameter>([
            generateParameter('length', lengthParameterDefinition),
            generateParameter('diameter', diameterParameterDefinition)
        ]);

        super(parameters);
    }
}
