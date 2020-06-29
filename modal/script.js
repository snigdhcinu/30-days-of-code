let i=0;	// 0 => hidden
function toggle(){
	if(!i){
		document.getElementById('modal').style.visibility='visible';
		i=1;
		document.getElementsById('body').style.backgroundColor='#e4f9ff';
		// document.getElementById('body').style.filter="opacity(0.5)";

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
