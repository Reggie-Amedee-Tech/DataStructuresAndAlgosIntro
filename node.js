class Node {
    constructor(data) {
        this._data = data;
        this._next = null
    }

    getNextNode() {
        return this._next
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this._next = node
        } else {
            throw new Error
        }
    }
}

const firstNode = new Node(9);
const secondNode = new Node('This is an instance of a second Node!');
const thirdNode = new Node('This is an instance of a third node');

firstNode.setNextNode(secondNode)


module.exports = Node