document.getElementById("clear").addEventListener('click',function(){
	document.getElementById("display").value = '';
})

var btnNum = Array.prototype.slice.call(document.getElementsByClassName("btn number"));
var btnOpe = Array.prototype.slice.call(document.getElementsByClassName("btn operator"));
btnNum.forEach(function(item){
	item.addEventListener('click',function(){
		get(item.value);
	});
})
btnOpe.forEach(function(item){
	item.addEventListener('click',function(){
		get(item.value);
	});
})


function get (value) {
	document.getElementById("display").value += value;
}

function calculates () {
	var result = 0;
	var display = document.getElementById("display");
	display.value = eval(display.value);
}