let i=0;	// 0 => hidden
function toggle(){
	if(!i){
		document.getElementById('modal').style.visibility='visible';
		i=1;
		document.getElementById('body').style.backgroundColor='#e4f9ff';
		document.getElementById('body').style.filter="brightness(0.5)";
		document.getElementsByTagName('button')[1].innerText='Close Modal'

	}
	else if(i){
		document.getElementById('modal').style.visibility='hidden';
		document.getElementsByTagName('button')[1].innerText='Open Modal'
		document.getElementById('body').style.filter="brightness(1)"
		i=0;
	}
}
function hide(){
	document.getElementById('modal').style.visibility='hidden';
	document.getElementsByTagName('button')[1].innerText='Open Modal'
	document.getElementById('body').style.filter="brightness(1)"
	i=0;
}
