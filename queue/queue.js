class Queue {
    constructor() {
        this.queue = [];
    }

    // Enqueue an item to the end of the queue
    enqueue(item){
        this.queue.push(item);
    }

    // Dequeue an item from the front of the queue
    dequeue(){
        this.queue.shift();
    }

    // Peek at the front item of the queue
    peek(){
        if(this.isEmpty()){
            return null;
        }

        return this.queue[0];
    }
    // Check if the queue is empty
    isEmpty(){
        return this.queue.length === 0;
    }
}

