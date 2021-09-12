function createNode(value) {
    return {
        "left": null,
        "right": null,
        "value": value
    };
}
console.log(createNode("A"))
function createTree() {
    root = createNode("A");
    root.left = createNode("B");
    root.right = createNode("C");

    root.left.left = createNode("D");
    root.left.right = createNode("E");

    root.left.left.left = createNode("F");

    root.right.right = createNode("G");

    root.right.right.left = createNode("H");
    root.right.right.right = createNode("I");

    return root;
}

//console.log("----------------------------------------------------------");

//node -> left, right, value
//1. node -> A
// 2. node -> B
// 3. node -> D
// 4. 
// A B D F E C G H I/
// Your implementation goes here
 function traverseTree(node) {
    if (node == null){
        return null;
    }
    else{

        console.log(node.value )
        traverseTree(node.left);
        traverseTree(node.right);
    }    
} 
//left most child
    /* if (node != null && node.left == null) {
        console.log(node.value )
    } else {
        traverseTree(node.left);
    } 
}    */
// right most child
    /* if (node != null && node.right == null) {
    console.log(node.value )
    } else {
    traverseTree(node.right);
    } 
}    */
 
 }
traverseTree(createTree());