const Node = require('./DoubleNode')

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    checkSize() {
        return this.size
    }

    prepend(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append() {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++

    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null
        }
        const data = this.head.data
        this.head = this.head.next
        this.size--
        return data
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            return null
        }
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
        return data
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
          } else {
            let curr = this.head;
            let list = "";
            while (curr) {
              list += `${curr.value}<->`;
              curr = curr.next;
            }
            console.log(list);
          }
    }
}