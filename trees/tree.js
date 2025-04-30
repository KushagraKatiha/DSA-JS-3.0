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

// Non-recursive approach
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

// Deletion In Binary Tree
Tree.prototype.delete = function (data){
  // the root should get replaced by the value returned
  this.root = this.deleteNode(this.root, data)
}

Tree.prototype.deleteNode = function (node, data){
  if(node == null){
    return null
  }

  if(data > node.data){
    // move to right
    node.right = this.deleteNode(node.right, data)
  }else if(data < node.data){
    // move to left
    node.left = this.deleteNode(node.left, data)
  }else{
    // handle other three cases
    if(node.right == null && node.left == null){
      return null
    }else if(node.right == null){
      return node.left
    }else if(node.left == null){
      return node.right
    }else{
      let tempNode = this.findMin(node.right)
      node.data = tempNode.data
      node.right = this.deleteNode(node.right, tempNode.data)
    }
  }
}

Tree.prototype.findMin = function(node){
  while(node.left !== null){
    node = node.left
  }
  return node
}


Tree.prototype.inOrderTraversal = function(){
  let result = []
  this.inorder(this.root, result)
}

Tree.prototype.inorder = function(node, result){
  if(node != null){
    this.inorder(node.left, result)
    result.push(node.data)
    this.inorder(node.right, result)
  }
  return result
}

Tree.prototype.preOrderTraversal = function(){
  let result = []
  this.preOrder(this.root, result)
}

Tree.prototype.preOrder = function(node, result){
  if(node != null){
    result.push(node.data)
    this.preOrder(node.left, result)
    this.preOrder(node.right, result)
  }
  return result
}

Tree.prototype.postTraversal = function(){
  let result = []
  this.postOrder(this.root, result)
}

Tree.prototype.postOrder = function(node, result){
  if(node != null){
    this.postOrder(node.left, result)
    this.postOrder(node.right, result)
    result.push(node.data)
  }
  return result
}

Tree.prototype.dfs = function(root){
  let stack = [root]
  let values = []
  
  while(stack.length != 0){
    let curr = stack.pop();
    values.push(curr.data)
    if(curr.right){
      stack.push(curr.right)
    }
    if(curr.left){
      stack.push(curr.left)
    }
  }
  return values
}

Tree.prototype.bfs = function(root){
  let queue = [root]
  let values = []

  while(root.length > 0){
    let curr = queue.shift()
    values.push(curr.data)
    if(curr.left){
      queue.push(curr.left)
    }
    if(curr.right){
      queue.push(curr.right)
    }
  }

  return values
}

Tree.prototype.dfsRecursive = function(root){
  if(root == null){
    return []
  }

  const leftVal = this.dfsRecursive(root.left)
  const rightVal = this.dfsRecursive(root.right)

  return [root.data, ...leftVal, ...rightVal]
}


