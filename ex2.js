/**
 * EXERCISE 2
 * Firstly, we create a class Node which has properties like Node left, Node right and value of Node.
 * Secondly, we create a class BT (Binary Tree) which has properties like root and sumEvenNode (to calculate all nodes have
 * even-node grandparents). And in this class, we have some methods: inOrder & preOrder for print Tree, evenNode for calculate
 * nodes have even-node grandparents.
 */

/**
 * Creating Node class has basic properties (value, Node left, Node right)
 */
class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BT {

    /**
     * Initial variables such as root of the Tree has property value and sumEvenNode has property integer (0)
     */
    constructor(value){
        this.root = value
        this.sumEvenNode = 0
    }

    /**
     *
     * Get the root
     * Traverse the left
     * Traverse the right
     */
    preOrder(tree) {
        if (!tree) {
            return 'Tree is empty'
        } else {
            console.log(tree.value)
            this.preOrder(tree.left)
            this.preOrder(tree.right)
        }
    }

    /**
     * Traverse the left
     * Get the root
     * Traverse the right
     */
    inOrder(tree) {
        if (!root) {
            return 'Tree is empty'
        } else {
            this.inOrder(tree.left)
            console.log(tree.value)
            this.inOrder(tree.right)
        }
    }

    /**
     * Checking each node in this tree to see if it has grandparents which have even-value, we will incremental node current
     * into global variable (sumEvenNode)
     */
    evenNode(curr, p, gp){
        if(!curr){
            return 0
        }

        if(gp && gp.value % 2 === 0){
            this.sumEvenNode += curr.value
        }

        this.evenNode(curr.left, curr, p)
        this.evenNode(curr.right, curr, p)

    }
}


/**
 * Initial Tree
 */
let bt = new BT(new Node(6))

let root = bt.root

root.left = new Node(9)
root.left.left = new Node(6)
root.left.right = new Node(3)

root.right = new Node(11)
root.right.left = new Node(4)
root.right.left.left = new Node(5)
root.right.left.right = new Node(7)
root.right.right = new Node(2)



// console.log(bst)

// console.log("Pre Order Tree")
// bst.preOrder(root)

bt.evenNode(root, null, null)
console.log("Sum all even nodes in the tree = ", bt.sumEvenNode)