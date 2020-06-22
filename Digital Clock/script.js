function _24hrs(){
	document.getElementById('_24').style.backgroundColor="#ea907a";
	document.getElementById('_12').style.backgroundColor="#fff";
	document.getElementById('section').style.display="none";	

function clock(){
	let d=new Date();
	let hours=d.getHours();
	let minutes=d.getMinutes();
	let seconds=d.getSeconds();
	// console.log(`${hours}:${minutes}:${seconds}`);
	document.getElementById('hrs').innerText=hours+':';
	document.getElementById('mins').innerText=minutes+':';
	document.getElementById('secs').innerText=seconds;
}
setInterval(clock,1000);
}

	// IMPLEMENT AM/PM FEATURE ALONG WITH 12 HOUR SYSTEM, AND 24 HOUR SYSTEM TOGGLE-ABLE
function _12hrs(){
	document.getElementById('_24').style.backgroundColor="#fff"
	document.getElementById('_12').style.backgroundColor="#ea907a";
	document.getElementById('section').style.display="inline";	
function clock(){
	let d=new Date();
	let mode="AM";
	let hours=d.getHours();
	if(hours>=13)
		mode="PM";
	hours=hours%12;
	let minutes=d.getMinutes();
	let seconds=d.getSeconds();
	// console.log(`${hours}:${minutes}:${seconds}`);
	console.log('this is the pm format');
	document.getElementById('hrs').innerText=hours+':';
	document.getElementById('mins').innerText=minutes+':';
	document.getElementById('secs').innerText=seconds;
	document.getElementById('section').innerText=mode;
}
setInterval(clock,1000);
}

