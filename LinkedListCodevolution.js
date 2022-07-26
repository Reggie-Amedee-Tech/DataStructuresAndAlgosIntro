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

    insert(data, index) {
        if (index < 0 || index > this.size) {
            console.log('COME ON SON')
            return
        } 
        if (index === 0) {
            this.prepend(data)
        } else {
            const node = new Node(data)
            let prev = this.head
            for (let i = 0; i < index-1; i++) {
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        } 
        let removeNode
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index-1; i++) {
                prev = prev.next
            }
            removeNode = prev.next;
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.data
    }

    search(data) {
        if (this.isEmpty()) {
            return - 1
        } 
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.data === data) {
                return i
            }
            curr = curr.next
            i++
        }
        return - 1
    }

    removeValue(data) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === data) {
            this.head = this.head.next
            this.size--
            return data
        } else {
            let prev = this.head
            while(prev.next && prev.next.data !== data) {
                prev = prev.next
            }
            if (prev.next) {
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return data
            }
            return null
        }

    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
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

list.prepend('STARSCOURGE RADAHN')
list.prepend('Malenia, The Severed')
list.prepend('RADAGON, GOLDEN ORDER SCION')
list.append('OFNIR, THE ALL KNOWING')
list.append('PLACIDUSAX, DRAGON OF RUIN')
list.insert('Marika, Queen of the lands between', 3)
console.log(list.removeFrom(2))
console.log(list.removeFrom(3))

console.log(list.removeValue('STARSCOURGE RADAHN'))
console.log(list.search('Marika, Queen of the lands'))

list.append(50)
list.reverse()

list.print()
console.log(list.checkSize())





