class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new Node(data);

        if (this.root === null) {
            this.root = node;
        } else {
            // Find the correct position
            // And insert the node
            this.insertNode(this.root, node);
        }
    }

    insertNode(rootNode, newNode) {
        // If the data is smaller than the root
        // Move to the left
        if (newNode.data < rootNode.data) {
            // If left is null
            // Insert here
            if (rootNode.left === null) {
                rootNode.left = newNode;
                // If left is not null
                // Recur untill null if found
            } else {
                this.insertNode(rootNode.left, newNode);
            }
            // If the data is greater than the root
            // Move to the right
        } else {
            if (rootNode.right === null) {
                rootNode.right = newNode;
            } else {
                this.insertNode(rootNode.right, newNode);
            }
        }
    }

    //Extra operations
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // no child node
                if (node.left == null && node.right == null) {
                    return null;
                }
                // no left node
                if (node.left == null) {
                    return node.right;
                }
                // no right node
                if (node.right == null) {
                    return node.left;
                }
                // has 2 child nodes
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(8);
binarySearchTree.insert(3);
binarySearchTree.insert(10);
binarySearchTree.insert(14);
binarySearchTree.insert(6);
binarySearchTree.insert(1);
binarySearchTree.insert(4);
binarySearchTree.insert(7);
binarySearchTree.insert(13);
let min = binarySearchTree.findMin();
min//1
let max = binarySearchTree.findMax();
max//14
console.log(JSON.stringify(binarySearchTree))
let res = {
    "root": {
        "data": 8,
        "left": {
            "data": 3,
            "left": {
                "data": 1,
                "left": null,
                "right": null
            },
            "right": {
                "data": 6,
                "left": {
                    "data": 4,
                    "left": null,
                    "right": null
                },
                "right": {
                    "data": 7,
                    "left": null,
                    "right": null
                }
            }
        },
        "right": {
            "data": 10,
            "left": null,
            "right": {
                "data": 14,
                "left": {
                    "data": 13,
                    "left": null,
                    "right": null
                },
                "right": null
            }
        }
    }
}