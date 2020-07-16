// This is the script file.
function stick(){
	document.getElementById('nav-bar').style.position='fixed';
	document.getElementById('nav-bar').style.backgroundColor='#f0ece3';
	document.getElementById('nav-bar').style.opacity='0.7';

	if(window.pageYOffset==0){
		// console.log('back to top');
	document.getElementById('nav-bar').style.backgroundColor='#d3dbff';
	document.getElementById('nav-bar').style.opacity='1';
	}

}
window.onscroll=function(){stick()};

