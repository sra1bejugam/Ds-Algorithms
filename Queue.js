// Queue is FIFO
// enQueue add ele at end
// deQueue remove ele at first
// front get frst ele
// isEmpty
// size 

class Queue {
    constructor() {
        this.collection = [];
    }

    enQueue(element) {
        return this.collection.push(element);
    }
    deQueue() {
        return this.collection.shift();
    }
    front() {
        return this.collection[0];
    }
    display() {
        console.log(this.collection);
    }
    size() {
        return this.collection.length;
    }
}
let queue = new Queue();
queue.enQueue(100);
queue.enQueue(200);
queue.enQueue(300);
queue.enQueue(400);

let length = queue.size();
length//4
queue.deQueue();
let dis = queue.display()
