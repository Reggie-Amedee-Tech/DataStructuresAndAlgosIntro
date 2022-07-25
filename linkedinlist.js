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

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size
    }

    addToTail(data) {
        // you have to first assign a head to the initial tail
        let tail = this.head
        // create a conditional that checks if there is no current tail
        if (tail === null) {
            // assign the head a new node that takes in the data
            this.head = new Node(data)
        } else {
            // create a while loop that checks if tail.getNextNode() is equal to null
            // this is checking if there is another node after this one, if there is none, then this node would be the tail
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode(data)
            }

            // then the tail simply becomes a new link
            tail.setNextNode(new Node(data))
        }
    }

    removeHead() {
        // single out the head in a remove head variable
        const removeHead = this.head;
        // create a condition that states if there is no current head, return out of the method
        if (!removeHead) {
            return
        }
        // if there is a head, assign the head to the removeHead.getNextNode()
        this.head = removeHead.getNextNode()
        // then return the removeHead data
        return removeHead.data;
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> '
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode()
        } 
        output += '<tail>'
        console.log(output)
    }
}

module.exports = LinkedList