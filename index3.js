const LinkedList = require('./LinkedListCodevelutionDeus')

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList()
    }
    
    enqueue(data) {
        this.list.append(data)
    }

    dequeue() {
        return this.list.removeFromFront()
    }

    peek() {
        return this.list.head.data
    }

    isEmpty() { 
        return this.list.isEmpty()

    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        return this.list.print()
    }
}

const queue = new LinkedListQueue()

queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(70)

console.log(queue.peek())

console.log(queue.isEmpty())

queue.print()