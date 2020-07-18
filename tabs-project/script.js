let heading=document.getElementById('nav-content-heading');
let paragraph=document.getElementById('nav-content-paragraph');
document.getElementsByTagName('li')[0].style.backgroundColor='#feceab';
function show1(){
	let btn=document.getElementsByTagName('button')[0];
	// console.log(btn.innerText);
	document.getElementsByTagName('li')[0].style.backgroundColor='#feceab';
	document.getElementsByTagName('li')[1].style.backgroundColor='#e0dede';
	document.getElementsByTagName('li')[2].style.backgroundColor='#e0dede';
	heading.innerText=btn.innerText;
	paragraph.innerText='Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

}
function show2(){
	let btn=document.getElementsByTagName('button')[1];
	// console.log(btn.innerText);
	document.getElementsByTagName('li')[0].style.backgroundColor='#e0dede';
	document.getElementsByTagName('li')[1].style.backgroundColor='#feceab';
	document.getElementsByTagName('li')[2].style.backgroundColor='#e0dede';
	heading.innerText=btn.innerText;
	paragraph.innerText=' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
}
function show3(){
	let btn=document.getElementsByTagName('button')[2];
	// console.log(btn.innerText);
	document.getElementsByTagName('li')[0].style.backgroundColor='#e0dede';
	document.getElementsByTagName('li')[1].style.backgroundColor='#e0dede';
	document.getElementsByTagName('li')[2].style.backgroundColor='#feceab';
	heading.innerText=btn.innerText;
	paragraph.innerText='Viverra orci sagittis eu volutpat odio facilisis mauris. Ultrices dui sapien eget mi proin sed libero. Suscipit tellus mauris a diam maecenas sed enim. Mattis vulputate enim nulla aliquet porttitor. Id nibh tortor id aliquet lectus proin nibh nisl. Nunc id cursus metus aliquam eleifend mi in nulla. Feugiat scelerisque varius morbi enim nunc faucibus. Sapien et ligula ullamcorper malesuada proin libero. Rutrum quisque non tellus orci ac auctor augue mauris. Suspendisse ultrices gravida dictum fusce.';
}