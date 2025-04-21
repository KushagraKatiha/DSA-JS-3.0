class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Print the linked list
LinkedList.prototype.printList = function () {
  let listArr = [];

  if (this.head == null) {
    console.log("List is empty !!");
    return;
  } else {
    let ptr = this.head;

    while (ptr != null) {
      listArr.push(ptr.data);
      ptr = ptr.next;
    }

    console.log(listArr);
  }
};

// Add a node to the end of the linked list
LinkedList.prototype.addToEnd = function (data) {
  let newNode = new Node(data);

  if (this.head == null) {
    // if head is null, LL is empty
    this.head = newNode;
  } else if (this.head != null) {
    // if head is not null, loop to the last and add the node
    let ptr = this.head;
    while (ptr.next != null) {
      ptr = ptr.next;
    }
    ptr.next = newNode;
  }
};

// Add a node to the beginning of the linked list
LinkedList.prototype.addToBegining = function (data) {
  let newNode = new Node(data);

  newNode.next = this.head;
  this.head = newNode;
};

// Add a node at a specific index in the linked list
LinkedList.prototype.addToAPosition = function (data, pos) {
  let newNode = new Node(data);

  if (pos == 0) {
    // insertion at begining
    this.addToBegining(data);
    return;
  }

  let currPos = 0; // linked list is zero based
  let ptr = this.head;
  while (ptr !== null && currPos < pos - 1) {
    ptr = ptr.next;
    currPos++;
  }

  if (ptr === null) {
    console.log("Position out of bound");
    return;
  }

  newNode.next = ptr.next;
  ptr.next = newNode;
};

// Remove a node from the end of the linked list
LinkedList.prototype.removeFromEnd = function () {
  if (this.head == null) {
    console.log("Linked List is already empty !!");
    return;
  }

  // if list has single node
  if (this.head.next == null) {
    this.head = null;
    return;
  }

  let ptr = this.head;
  while (ptr.next.next !== null) {
    ptr = ptr.next;
  }

  ptr.next = null;
};

// Remove a node from the beginning of the linked list
LinkedList.prototype.removeFromBeginning = function () {
  if (this.head == null) {
    console.log("List is already empty !");
    return;
  }

  this.head = this.head.next;
};

// Remove a node at a specific index in the linked list
LinkedList.prototype.removeFromIndex = function (idx) {
  // if list is empty
  if (this.head == null) {
    console.log("List is empty !");
    return;
  }

  if (idx == 0) {
    this.removeFromBeginning();
    return;
  }

  let currIdx = 0;
  let ptr = this.head;
  while (ptr != null && currIdx < idx - 1) {
    ptr = ptr.next;
    currIdx++;
  }

  if (ptr == null || ptr.next == null) {
    console.log("Invalid Index");
    return;
  }

  ptr.next = ptr.next.next;
};

// Find a node in the linked list
LinkedList.prototype.findNodeIdx = function (data) {
  if (this.head == null) {
    console.log("The list is empty !!");
    return;
  }
  let currIdx = 0;
  let ptr = this.head;

  while (ptr.data != data) {
    ptr = ptr.next;
    currIdx++;
    if (ptr == null) {
      console.log("Data Not Found !");
      return;
    }
  }

  console.log("Data is present at index: ", currIdx);
};

// Find the length of the linked list
LinkedList.prototype.findLength = function () {
  let length = 0;
  let ptr = this.head;

  while (ptr != null) {
    ptr = ptr.next;
    length++;
  }

  return length;
};

// Check if the linked list is empty
LinkedList.prototype.isEmpty = function () {
  return this.head == null;
};

export default LinkedList;

// Reverse the linked list
LinkedList.prototype.reverse = function () {
  if (this.head == null) {
    console.log("List is empty !!");
    return;
  }

  let c = this.head;
  let p = null;
  let n = null;

  while (c !== null) {
    n = c.next;
    c.next = p;
    p = c;
    c = n;
  }
  this.head = p;

  return;
};

// Sort the linked list

// Merge two linked lists

// Split a linked list into two linked lists
