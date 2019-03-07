var Node = require('./BinaryTreeNode.js');

class BinaryTree{
    constructor(){
        this.root = null;
    }
    getRoot(){
        return this.root;
    }
    insert(element){
        var aux = null;
        var actual = this.root;
        while(actual){
            aux = actual;
            if(element < actual.getElement()){
                actual = actual.getLeft();
            }else{
                actual = actual.getRight();
            }
        }
        var node = new Node(element);
        node.setParent(aux);
        if(! aux){
           this.root = node;
        }else if(node.getElement() < aux.getElement()){
           aux.setLeft(node); 
        }else{
           aux.setRight(node); 
        } 
    }
    treeWalk(node){
       if(node){
           this.treeWalk(node.getLeft());
           console.log(node.getElement());
           this.treeWalk(node.getRight());
       }
    }
}

module.exports = BinaryTree;