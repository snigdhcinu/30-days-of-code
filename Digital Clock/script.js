
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