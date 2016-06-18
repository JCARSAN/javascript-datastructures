var Celula = require('./Celula.js');

function LinkedList(){
	var _size = 0;
	this.head = null;
	this.tail = null;
	this.list = {};

	var size = function(){
		return _size;
	}
		

	var isEmpty = function(){
		return _size === 0;
	}

    /* OBS: O método getElement retorna uma célula(Node) */
    var getElement = function(pos){
        if(pos < 0 || pos > this.size()){
            console.log("Posição inválida!");
            return;
        }

        if(pos <= Math.floor(this.size()/2)){
            var count = 0;
            var elemento = this.head;
            while(count < pos){
                elemento = elemento.nextE;
                count = count + 1;
            }
        }else{
            var count = this.size() - 1;
            var elemento = this.tail;
            while(count > pos){
                elemento = elemento.prev;
                count = count - 1;
            }
        }
        return elemento;
    }

	var pushFront = function(aluno){
		if(this.isEmpty()){
			var node = new Celula(aluno,null,null);
			this.head = node;
			this.tail = node;
		}else{
			var node = new Celula(aluno,null,this.head);
			this.head.prev = node;
			this.head = node;
		}
		_size = _size + 1;
        return this.size();
	}
    
    var popFront = function(){
        if(this.isEmpty()){
        	console.log("A lista está vazia");
        }
        var primeiro = this.head.key;
        this.head = this.head.nextE;
        if(this.head){
            this.head.prev = null;
        }
        _size = _size - 1;
        return primeiro;
    }

    var pushInPosition = function(pos,aluno){
        if(pos < 0 || pos > this.size()){
            console.log("Posição inválida!");
            return;
        }

        if(pos === 0){
            return this.pushFront(aluno);
        }

        if(pos === this.size()){
            return this.pushBack(aluno);
        }

        var elementoAtual = this.getElement(pos);
        var anterior = elementoAtual.prev;
        var node = new Celula(aluno,anterior,elementoAtual);
        anterior.nextE = node;
        elementoAtual.prev = node;
        _size = _size + 1;
        return this.size();
    }
    
    var popInPosition = function(pos){
        if(pos < 0 || pos > this.size()){
            console.log("Posição inválida!");
            return;
        }

        if(pos === 0){
            return this.popFront();
        }

        if(pos === this.size() - 1){
            return this.popBack();
        }

        var elemento = this.getElement(pos);
        var anterior = elemento.prev;
        var posterior = elemento.nextE;
        anterior.nextE = posterior;
        posterior.prev = anterior;
        _size = _size - 1;
        return elemento.key;
    }

    var pushBack = function(aluno){
    	if (this.isEmpty()) {
            return this.pushFront(aluno);
    	}else{
    		var node = new Celula(aluno,this.tail,null);
    		this.tail.nextE = node;
    		this.tail = node;
            _size = _size + 1;
            return this.size();
    	}
    }

    var popBack = function(){
    	if(this.isEmpty()){
    		console.log("Lista Vazia!");
    	}else{
    		var elementoRemovido = this.tail.key; 
    		this.tail = this.tail.prev;
            if(this.tail){
                this.tail.nextE = null;
            }
    		_size = _size - 1;
    		return elementoRemovido;
    	}
    }

    var listFrontToBack = function(){
    	var count = 0;
    	var atual = this.head;
    	while(count < _size){
            console.log("ID: "+atual.key.getId()+" - Nome: "+atual.key.getNome()+" - Série: "+atual.key.getSerie());
            atual = atual.nextE;
            count = count + 1;
    	}
    }

    var listBackToFront = function(){
    	var count = 0;
    	var atual = this.tail;
    	while(count < _size){
            console.log("ID: "+atual.key.getId()+" - Nome: "+atual.key.getNome()+" - Série: "+atual.key.getSerie());
            atual = atual.prev;
            count = count + 1;
    	}
    }

	return{
		list: this.list,
		size: size,
		isEmpty : isEmpty,
        getElement : getElement,
		pushFront : pushFront,
		popFront : popFront,
        pushInPosition : pushInPosition,
        popInPosition : popInPosition,
		pushBack : pushBack,
		popBack : popBack,
		listFrontToBack : listFrontToBack,
		listBackToFront : listBackToFront
	}
}

module.exports = LinkedList;