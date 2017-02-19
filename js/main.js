var myImage = document.querySelector("img");

myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/hsy.jpg"){
        myImage.setAttribute("src","images/yy.png");
    }else{
        myImage.setAttribute("src","images/hsy.jpg");
    }
}

var myBtn = document.querySelector("button");
var myHeading = document.querySelector('h1');

function setUsername () {
	var myName = prompt('Please input your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'You are beautiful, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUsername();
} else{
	var storeName = localStorage.getItem('name');
	myHeading.innerHTML = 'You are beautiful, ' + storeName;
}

myBtn.onclick = function(){
	setUsername();
}