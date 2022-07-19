const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null
    }

    addToHead(data) {
        const newHead = new Node(data)
        const currentHead = this.head
        this.head = newHead
        if (currentHead) {
            this.head.setNextNode(currentHead)
        }
    }

    addToTail(data) {
        let tail = this.head
        if (!tail) {
            this.head = new Node(data)
            while (tail.getnextNode() !== null) {
                tail = tail.getNextNode()
            }
            tail.setNextNode(new Node(data))
        }
    }
}

const linkedList1 = new LinkedList()
linkedList1.addToHead('Fritz Hendy Amedee Jr.')
linkedList1.addToHead('Free Nostalgia Amedee')
linkedList1.addToHead('Fritz Hendy Amedee Sr.')
console.log(linkedList1)