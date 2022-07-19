class Stack {
    constructor() {
        this._array = []
    }

    addData(data) {
        return this._array.push(data)
    }

    remove() {
        return this._array.pop()
    }
}

const wholeBunchaStackin = new Stack()
wholeBunchaStackin.addData('60 CRIP NIGGA')
wholeBunchaStackin.addData('BIG WHOOPTY')
wholeBunchaStackin.addData('THEY THOUGHT THEY HAD ONE')
wholeBunchaStackin.remove();

console.log(wholeBunchaStackin)