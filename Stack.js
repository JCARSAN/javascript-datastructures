var stack = function(){
	var array = [];
	function push(element){
		array.push(element);
		return element;
	}
	function pop(){
		return array.pop();
	}
	function isEmpty(){
		return array.length === 0;
	}
	return{
		push    : push,
		pop     : pop,
		isEmpty : isEmpty
	}
}

module.exports = stack;