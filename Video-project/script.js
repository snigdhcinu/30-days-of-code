// This is the script file

let btn=document.getElementById('btn');
let video=document.querySelector('video');
let flag=1; // 1 => play ▷  
btn.innerText='PAUSE';
btn.style.backgroundColor='#ff847c';

function toggle(){
	if(flag){
	flag=0;	// 0 => pause ⏸️
	video.pause();
	btn.innerText='PLAY' ;
	btn.style.backgroundColor='#ade498'
	}
	else{
		flag=1;
		video.play();
		btn.innerText='PAUSE';
		btn.style.backgroundColor='#ff847c';
	}
}
