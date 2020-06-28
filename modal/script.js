let i=0;	// 0 => hidden
function toggle(){
	if(!i){
		document.getElementById('modal').style.visibility='visible';
		i=1;
		document.getElementsByTagName('body')[0].style.backgroundColor='#e4f9ff';
	}
	else if(i){
		document.getElementById('modal').style.visibility='hidden';
		i=0;
	}
}
function hide(){
	document.getElementById('modal').style.visibility='hidden';
	i=0;
}
