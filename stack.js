//stack is LIFO
// push
// pop
// peek
// length

class Stack {
    constructor() {
        this.count = 0;
        this.storage = [];
    }

    push = function (value) {
        this.storage[this.count] = value;
        console.log('storage array', this.storage);
        this.count++;
        return this.count - 1
    }

    pop = function () {
        if (this.count === 0) return undefined;
        this.count--;
        let res = this.storage[this.count];
        delete this.storage[this.count];
        return res;
    }

    peek = function () {
        return this.storage[this.count - 1];
    }

    length = function () {
        return this.count;
    }
}
let stack = new Stack();
stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
//[100,200,300,400]
let length = stack.length()
length //4
let view = stack.peek()
view //400
let poppedElement = stack.pop();
poppedElement
//400