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

    levelOrder() {
        // higher time complexity
        const queue = []
        queue.push(this.root)
        while(queue.length) {
            let curr = queue.shift()
            console.log(curr.data)
            if(curr.left) {
                queue.push(curr.left)
            } 
            if(curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if(!root.left) {
            return root.data
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.data
        } else {
            return this.max(root.right)
        }
    }

    delete(data) {
        this.root = this.deleteNode(this.root, data)
    }

    deleteNode(root, data) {
        if (root === null) {
            return root
        }
        if(data < root.data) {
            root.left = this.deleteNode(root.left, data)
        } else if (data > root.data) {
            root.right = this.deleteNode(root.right, data)
        } else {
            if(!root.left && !root.right) {
                return null
            }
            if(!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.data = this.min(root.right)
            root.right = this.deleteNode(root.right, data)
        }
        return root
    }
}

const searchTree = new BinarySearchTree(Node)
searchTree.insert(10)
searchTree.insert(5)
searchTree.insert(15)
searchTree.insert(3)



searchTree.delete(10)
searchTree.levelOrder(searchTree.root)

console.log(searchTree.min(searchTree.root))