class Queue {
    constructor() {
        this._queue = []
    }

    enqueue(data) {
        return this._queue.push(data)
    }

    dequeue() {
        return this._queue.shift()
    }

    isEmpty() {
        return this._queue.length === 0
    }

    peek() {
        if(!this.isEmpty()) {
            return this._queue[0]
        } else {
            return null
        }
    }

    print() {
        console.log(this._queue.toString())
    }
}

const newQueue = new Queue;

newQueue.enqueue(10)
newQueue.enqueue(20)
newQueue.enqueue(30)

newQueue.dequeue()
console.log(newQueue.peek())
newQueue.print()


// More optimized Queue

class OptimizedQueue {
    constructor() {
        this._items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(data) {
        this._items[this.rear] = data;
        this.rear++
    }

    dequeue() {
        const item = this._items[this.front]
        delete this._items[this.front]
        this.front++
        return item
    }

    isEmpty() {
        return this.front - this.front === 0
    }

    peek() {
        return this._items[this.front]
    }

    size() {
        return this.rear - this.front
    }

    print() {
        console.log(this._items)
    }
}

const que2 = new OptimizedQueue
console.log(que2.isEmpty())

que2.enqueue(5)
que2.enqueue(10)
que2.enqueue(20)
que2.dequeue()

que2.print()