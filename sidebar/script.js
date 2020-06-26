let i=0;
function toggle(){
	if(i==0){
		document.getElementById('sidebar').style.display='block';
		document.getElementById('toggler').style.boxShadow="2px 2px 2px 2px #e8ead3";
		i=1;
	}
	else if(i==1){
		document.getElementById('sidebar').style.display='none';
		document.getElementById('toggler').style.boxShadow="2px 2px 2px 2px #ddf3f5";
		i=0;
	}
}
function hide(){
	document.getElementById('sidebar').style.display='none';
	i=0;
}