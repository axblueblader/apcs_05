class LinkedListNode {
    constructor (nodeValue, parentNode, childNode) {
        this.value = nodeValue
        this.nextNode = childNode
        this.prevNode = parentNode
    }
}

class LinkedList {
    constructor() {
        this.root = null
        this.tail = null
        this.length = 0
    }

    addToHead(value){
        if (this.root == null){
            this.root = new LinkedListNode(value, null, null)
            this.tail = this.root
        }
        else{
            let newNode = new LinkedListNode(value, null, this.root)
            this.root = newNode
        }

        ++this.length

        return 'addToHead'
    }

    addToTail(value){
        if (this.root == null){
            this.tail = new LinkedListNode(value, null, null)
            this.root = this.tail
        }
        else{
            let newNode = new LinkedListNode(value, this.tail, null)
            this.tail = newNode
        }

        ++this.length

        return 'addToTail'
    }

    popHead(){
        //default return value
        let ret = null

        // if the head is not empty
        if (this.root != null) {
            //get the return value
            ret = this.root.value

            //send the root to the next node, set the next node to root
            this.root = this.root.nextNode
            if (this.root != null) {
                this.root.prevNode = null
            }
            else {
                // the queue is empty
                this.tail = null
            }
            //reduce the length of the list
            --this.length
        }
        
        return ret
    }

    popTail(){
        //default return value
        let ret = null

        //if the tail is not null
        if (this.tail != null) {
            //take the value
            ret = this.tail.value

            //make the previous node the tail
            this.tail = this.tail.prevNode
            if(this.tail != null) {
                this.tail.nextNode = null
            }
            else{
                //list is empty
                this.root = null
            }

            --this.length
        }
        
        return ret
    }

    remove(value){
        let currentNode = this.root

        while (currentNode != null && currentNode.value != value){
            currentNode = currentNode.nextNode
        }

        let ret = 'no value found'

        if (currentNode != null && currentNode.value == value){
            this.prevNode.nextNode = this.nextNode
            this.nextNode.prevNode = this.prevNode

            ret = 'remove value sucess'
        }

        return ret
    }
}