class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

Tree.prototype.insertNode = function (data) {
  const newNode = new Node(data);

  if (this.root == null) {
    // If there is no node in the tree
    this.root = newNode;
    return;
  }

  let curr = this.root;

  while (true) {
    if (curr.data > newNode.data) {
      if (curr.left == null) {
        curr.left = newNode;
        break
      }
      curr = curr.left
    }else if(curr.data < newNode.data){
        if(curr.right == null){
            curr.right = newNode
            break
        }
        curr = curr.right
    }
  }
  return
};
