const Node = require('./NodeCodevalutionDeus')

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    size() {
        return this.size
    }

    prepend(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++

    }

    append(data) {
        const node = new Node(data)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront() {
        if(this.isEmpty()) {
            return null
        }
        const data = this.head.data
        this.head = this.head.next
        this.size--
        return data
    }

    removeFromEnd() {
        if(this.isEmpty()) {
            return null
        }
        const data = this.tail.data
        if(this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while(prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return data
    }

    print() {
        if (this.isEmpty()) {
            console.log('The List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.data} -> `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const node = new LinkedList()
node.append(10)
node.append(20)
node.prepend(30)
node.prepend(40)

node.removeFromEnd()
node.removeFromFront()

node.print()

module.exports = LinkedList;