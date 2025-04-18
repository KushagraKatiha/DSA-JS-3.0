class Stack {
    constructor() {
        this.stack = [];
    }

    // Push an item onto the stack
    push(item){
        this.stack.push(item);
    }
    
    // Pop an item from the stack
    pop(){
        if(this.isEmpty()){
            return null;
        }

        return this.stack.pop();
    }
    
    // Peek at the top item of the stack
    peek(){
        if(this.isEmpty()){
            return null;
        }

        return this.stack[this.stack.length - 1];
    }
    // Check if the stack is empty
    isEmpty(){
        return this.stack.length === 0;
    }
}