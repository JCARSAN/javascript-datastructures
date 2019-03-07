class BinaryTreeNode{
    constructor(element){
        this.element = element;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    getClassName(){
        return "BinaryTreeNode";
    }
    getLeft(){
        return this.left;
    }
    setLeft(node){
        this.left = node;
    }
    getRight(){
        return this.right;
    }
    setRight(node){
        this.right = node;          
    }
    getParent(){
        return this.parent;
    }
    setParent(node){
        this.parent = node;
    }
    getElement(){
        return this.element;
    }
}

module.exports = BinaryTreeNode;