
var i=0;
function toggle(){
	if(i==0){
		document.getElementById('btn').style.boxShadow='2px 2px 5px #e0dede';
		document.getElementById('tog-item').style.display='block';
		i=1;
	}
	else if(i==1){
		document.getElementById('tog-item').style.display='none';
		document.getElementById('btn').style.boxShadow='2px 2px 5px #fff';
		i=0;
	}


}
