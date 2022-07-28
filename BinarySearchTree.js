const Node = require('./NodeForTree')

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null
    }

    insert(data) {
        const newNode = new Node(data)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.data < root.data) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, data) {
        if (!root) {
            return false
        } else {
            if (root.data === data) {
                return true
            } else if (data < root.data) {
                return this.search(root.left, data)
            } else {
                return this.search(root.right, data)
            }
        }

    }

    preOrder(root) {
        if (root) {
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data)
        }
    }
}

const searchTree = new BinarySearchTree(Node)
searchTree.insert(10)
searchTree.insert(5)
searchTree.insert(15)
searchTree.insert(3)
searchTree.insert(7)

console.log(searchTree.isEmpty())
console.log(searchTree.search(searchTree.root, 10))
console.log(searchTree.search(searchTree.root, 5))
console.log(searchTree.search(searchTree.root, 15))
console.log(searchTree.search(searchTree.root, 40))

searchTree.postOrder(searchTree.root)