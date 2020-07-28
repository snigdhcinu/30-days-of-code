let type=12;	// 12 => 12 hours format
// console.log(document.getElementById("_24").value)
let clock12=document.getElementById("_24");
let clock24=document.getElementById("_12");
console.log(clock12.value);
console.log(clock24.value);


function mode1(){
	type=12;
	console.log('executing mode1'+type);
	_12hrs();
}

function mode2(){
	type=24;
	console.log('executing mode2'+type);
	_24hrs();
}

function _24hrs(){
	document.getElementById('_24').style.backgroundColor="#ea907a";
	document.getElementById('_12').style.backgroundColor="#fff";
	document.getElementById('section').style.display="none";	
function clock_24(){
	if(type!=24){
		return;
	}
	let d=new Date();
	let hours=d.getHours();
	let minutes=d.getMinutes();
	let seconds=d.getSeconds();
	document.getElementById('hrs').innerText=hours+':';
	document.getElementById('mins').innerText=minutes+':';
	document.getElementById('secs').innerText=seconds;
}
	setInterval(clock_24,1000);
}


function _12hrs(){
	document.getElementById('_24').style.backgroundColor="#fff"
	document.getElementById('_12').style.backgroundColor="#ea907a";
	document.getElementById('section').style.display="inline";	
function clock_12(){
	if(type!=12){
		return;
	}
	let d=new Date();
	let mode="AM";
	let hours=d.getHours();
	if(hours>=13)
		mode="PM";
	hours=hours%12;
	let minutes=d.getMinutes();
	let seconds=d.getSeconds();
	document.getElementById('hrs').innerText=hours+':';
	document.getElementById('mins').innerText=minutes+':';
	document.getElementById('secs').innerText=seconds;
	document.getElementById('section').innerText=mode;
}
	setInterval(clock_12,1000);
}

