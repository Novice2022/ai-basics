export type SelectionParameterDefinition = {
    etalon: number;
    inaccuracy: number;
}

export default class Selection {
    private data: number[] = [];
    
    private parameters: SelectionParameterDefinition[];
    private validator: (...args: number[]) => boolean;

    constructor (
        parameters: SelectionParameterDefinition[],
        validator: (...args: number[]) => boolean
    ) {
        this.parameters = parameters;
        this.validator = validator;
    }

    public generate(amount: number) {
        for (let _ = 0; _ < amount; _++) {
            while (true) {
                const values: number[] = [];

                this.parameters.forEach(param => {
                    values.push(
                        param.etalon +
                        (Math.random() - .5) * param.inaccuracy * 2
                    );
                });

                if (this.validator(...values)) {
                    this.data.push();
                }
            }
        }
    }
}
