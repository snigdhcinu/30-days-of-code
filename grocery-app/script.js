 // This is the script file
let list=document.getElementById('lists');
 function add(){
 	let input=document.getElementsByTagName('input')[0].value;
 	list.innerHTML+="<li class='list-item'>"+input+"</li><button class='edit-btn'>✏️</button><button class'delete-btn'>🗑</button>"
 	document.getElementsByTagName('input')[0].value=' ';
 }