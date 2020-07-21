// this is the script file.
// set initial time
// can use browser time, or initialize a timer of our own
// Sale ends on 29/7/2020	9PM
let DD=29;
let MM=7;
let HH=21;
let MM1=60;
let SS=60;
let d=new Date();
let day=d.getDate();
let hr=d.getHours();
let min=d.getMinutes();
let sec=d.getSeconds();

setInterval(counter,1000);
function counter(){
	let DD=29;
	let MM=7;
	let HH=21;
	let MM1=60;
	let SS=60;
	let d=new Date();
	let day=d.getDate();
	let hr=d.getHours();
	let min=d.getMinutes();
	let sec=d.getSeconds();
	let num=0
	num=Math.abs(DD-day)
	if(num<10){
		num='0'+num;
	}
	document.getElementById('days').innerText=num;
		num=Math.abs(HH-hr)
	if(num<10){
		num='0'+num;
	}
	document.getElementById('hrs').innerText=num;
		num=Math.abs(MM1-min)
	if(num<10){
		num='0'+num;
	}
	document.getElementById('mins').innerText=num;
		num=Math.abs(SS-sec)
	if(num<10){
		num='0'+num;
	}
	document.getElementById('secs').innerText=num;
}