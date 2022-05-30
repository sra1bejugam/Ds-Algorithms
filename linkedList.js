class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Insert first node
// Insert last node
// Insert at index
// Get at index
// remove at index
// Clear list
// Print list data

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // IFN
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }

    insertLast(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++
    }

    insertAtIndex(data, index) {
        // Out of range
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.insertFirst(data);
            return;
        }
        const node = new Node(data);
        let current, previous;

        //set current to first
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++
    }

    getAtIndex(data, index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log('found the data at index', current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    removeAtIndex(data, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if (index === 0) {
            this.head = current.next
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--
    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    printListData() {
        let current = this.head;

        while (current) {
            console.log(current);
            current = current.next;
        }
    }
}
let ll = new LinkedList();
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.printListData()
ll.insertAtIndex(200, 1)
ll.removeAtIndex(200,1)