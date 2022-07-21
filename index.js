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

    peek() {
        return this._array[this._array.length - 1]
    }

    isEmpty() {
        return this._array.length === 0
    }

    size() {
        return this._array.length
    }

    print() {
        console.log(this._array.toString())
    }
}

const wholeBunchaStackin = new Stack()
wholeBunchaStackin.addData('60 CRIP NIGGA')
wholeBunchaStackin.addData('BIG WHOOPTY')
wholeBunchaStackin.addData('THEY THOUGHT THEY HAD ONE')

wholeBunchaStackin.peek()
wholeBunchaStackin.print()
