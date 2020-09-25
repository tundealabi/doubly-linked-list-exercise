class Node {
    constructor(value) {
        this.val = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push (value) {
        this.length++;
     let newNode = new Node(value);
     if(this.head) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
     } else {
        this.head = newNode;
        this.tail = newNode;
     }
     return this;
    }
    pop() {
        if(this.head) {
            let removed = this.tail;
            this.tail = this.tail.prev;
            this.length--;
            return removed.val;
        }
       return undefined;
    }
    shift() {
        if(this.head) {
            let removed = this.head;
            this.head = this.head.next;
            this.length--;
            return removed.val;
        }
        return undefined;
    }
    unshift(value) {
        this.length++;
        let newNode = new Node(value);
        if(this.head) {
            let currentHead = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            newNode.next = currentHead;
        }else {
            this.head = newNode;
            this.tail = newNode;
        }
        return this;
    }
    set(node,value) {
        let currentTail = this.tail;
        let index = this.length-1;
        while(currentTail !== null) {
            if(index === node) {
                currentTail.val = value;
                return true;
            }
            index--;
            currentTail = currentTail.prev;
        }
        return undefined;
    }
    get(node) {
        let currentTail = this.tail;
        let index = this.length-1;
        while(currentTail !== null) {
            if(index === node) {
                return currentTail.val;
            }
            index--;
            currentTail = currentTail.prev;
        }
        return null;
    }
    insert(node,value) {
        let currentHead = this.head;
        let index = 0;
        while(currentHead !== null) {
            if(index === node) {
                this.length++;
                let newNode = new Node(value);
                let prevNode = currentHead.prev;
                prevNode.next = newNode;
                newNode.prev = prevNode;
                newNode.next = currentHead;
                currentHead.prev = newNode;
                return this.length;
            }
            index++;
            currentHead = currentHead.next;
        }
    }
    remove(node) {
        let currentTail = this.tail;
        let index = this.length-1;
        while(currentTail !== null) {
            if(index === node) {
                this.length--;
                currentTail.prev.next = currentTail.next;
                currentTail.next.prev = currentTail.prev;
                return currentTail;
            }
            index--;
            currentTail = currentTail.prev;
        }
        return null;
    }
    reverse() {
        let currentNode = this.head;
        let prevNode = null;
        while(currentNode !== null) {
            prevNode = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = prevNode;
            currentNode = currentNode.prev;
        }
        if(prevNode !== null) {
            this.head = prevNode.prev;
        }
        return this;
    }
}
