const LinkedList = require('./LinkedListCodevelutionDeus')

class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }

    push(data) {
        this.list.prepend(data)
    }

    pop() {
        return this.list.removeFromFront()
    }

    peek() {
        return this.list.head.data
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        this.list.getSize()
    }

    print() {
        return this.list.print()
    }
}

const stack = new LinkedListStack()


stack.push(20)
stack.push(10)
stack.push(30)

console.log(stack.isEmpty())
console.log(stack.peek())

stack.print()