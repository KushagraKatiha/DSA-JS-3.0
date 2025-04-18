class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}



// Print the linked list
LinkedList.prototype.printList = function(){

    let listArr = [];

    if(this.head == null){
        console.log("List is empty !!")
        return
    }else{
        let ptr = this.head
        
        while(ptr != null){
            listArr.push(ptr.data)
            ptr = ptr.next
        }
        listArr.forEach((e) => {
            console.log(e ,"=> ");
        })
    }
    
}

// Add a node to the end of the linked list
LinkedList.prototype.addToEnd = function(data){
    let newNode = new Node(data);
    
    if(this.head == null){      // if head is null, LL is empty
        this.head = newNode
    }else if(this.head != null){      // if head is not null, loop to the last and add the node
        let ptr = this.head
        while(ptr.next != null){
            ptr = ptr.next
        }
        ptr.next = newNode
    }
}

// Add a node to the beginning of the linked list


// Add a node at a specific index in the linked list

// Remove a node from the end of the linked list

// Remove a node from the beginning of the linked list

// Remove a node at a specific index in the linked list

// Find a node in the linked list

// Find the length of the linked list

// Reverse the linked list

// Sort the linked list

// Merge two linked lists

// Split a linked list into two linked lists 

// Check if the linked list is empty

export default LinkedList;
