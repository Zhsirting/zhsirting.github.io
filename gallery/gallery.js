var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

for(var i = 2;i<=5;i++){
	var newImage = document.createElement('img');
  	newImage.setAttribute('src', "../images/pic" + i +".jpg");
  	thumbBar.appendChild(newImage);
  	newImage.onclick = function(e){
  	var imgSrc = e.target.getAttribute('src');
  	displayImage(imgSrc);
  }  
}
function displayImage (imgSrc) {
  	displayedImage.setAttribute('src',imgSrc);
}

btn.onclick = function(){
	var btnStyle = btn.getAttribute('class');
	if(btnStyle === 'dark'){
		btn.setAttribute('class','light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	}else if(btnStyle === 'light'){
		btn.setAttribute('class','dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}
