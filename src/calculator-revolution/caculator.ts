class Operation {
    private _numberA: number = 0;
    private _numberB: number = 0;

    get numberA (){
        return this._numberA;
    }
    
    set numberA(val: number) {
        this._numberA = val;
    }

    get numberB (){
        return this._numberB;
    }
    
    set numberB(val: number) {
        this._numberB = val;
    }

    getResult(): number {
        return 0;
    }
 }

class OperationAdd extends Operation {
    override getResult(): number {
        return this.numberA + this.numberB;
    }
}

class OperationSub extends Operation {
    override getResult(): number {
        return this.numberA - this.numberB;
    }
}

class OperationMul extends Operation {
    override getResult(): number {
        return this.numberA * this.numberB;
    }
}

class OperationDiv extends Operation {
    override getResult(): number {
        if (this.numberB === 0) throw new Error('除数不能为0');
        return this.numberA / this.numberB;
    }
}

type Operator = '+' | '-' | '*' | '/'

export class OperationFactory {
    static createOperation(operator: Operator) : Operation | null {
        let operation: Operation | null;
        switch (operator) {
            case "+":
                operation = new OperationAdd();
                break;

            case "-":
                operation = new OperationSub();
                break;

            case "*":
                operation = new OperationMul();
                break;
            case "/":
                operation = new OperationDiv();
                break;
            default:
                operation = null;
        }
        return operation;
    }
}

const oper = OperationFactory.createOperation('+');
if (oper) {
    oper.numberA = 1;
    oper.numberB = 2;
    console.log(oper.getResult());
}
