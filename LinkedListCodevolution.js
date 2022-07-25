const Node = require('./NodeCodevolution')

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    checkSize() {
        return this.size
    }

    // O(1)
    prepend(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    // O (Linear)
    append(data) {
        const node = new Node(data)

        if (this.isEmpty()) {
            this.head = node
            this.size++
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
            
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log('The List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.data} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()
list.print()

list.prepend('STARSCOURGE RADAHN')
list.prepend('Malenia, The Severed')
list.prepend('RADAGON, GOLDEN ORDER SCION')
list.append('OFNIR, THE ALL KNOWING')
list.append('PLACIDUSAX, DRAGON OF RUIN')
list.print()


