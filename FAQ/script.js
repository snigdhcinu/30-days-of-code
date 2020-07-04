// This is the script file
let i1=0; // 0 => hidden
let i2=0; // 0 => hidden
let i3=0; // 0 => hidden
function toggle1(){
	if(!i1){
		document.getElementById('a1').style.display='block';
		i1=1; // 1 => display is block
		console.log('value of i1 is ' +i1)
	}
	else{
		document.getElementById('a1').style.display='none';
		i1=0; // 0 => display is none

		console.log('value of i1 is ' +i1)
	}
}
function toggle2(){
	if(!i2){
		document.getElementById('a2').style.display='block';
		i2=1; // 1 => display is block
		console.log('value of i2 is ' +i2)
	}
	else{
		document.getElementById('a2').style.display='none';
		i2=0; // 0 => display is none

		console.log('value of i2 is ' +i2)
	}
}
function toggle3(){
	if(!i3){
		document.getElementById('a3').style.display='block';
		i3=1; // 1 => display is block
		console.log('value of i3 is ' +i3)
	}
	else{
		document.getElementById('a3').style.display='none';
		i3=0; // 0 => display is none

		console.log('value of i3 is ' +i3)
	}
}