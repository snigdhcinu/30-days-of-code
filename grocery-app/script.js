 // This is the script file
let list=document.getElementById('lists');
let i=0;



 function delet(n){
 	let node=document.getElementById("list-item-"+n);
 	// console.log(node.innerText)
 	let btn_e=node.nextSibling;
 	let btn_d=btn_e.nextSibling;
 	list.removeChild(btn_d);
 	list.removeChild(btn_e);
 	list.removeChild(node);


 }
 function edit(n){
 	let node=document.getElementById("list-item-"+n);
 	// console.log(node.innerText)
 	let text=prompt('Enter the updated value for'+' '+node.innerText);
 	if(text!=""){
 	node.innerText=text;
 	}
 }
 function delete_all(){
 	list.innerHTML=" ";
 }
 function add(){
 	let input=document.getElementsByTagName('input')[0].value;
 	if(input!=""){
 	i+=1;
 	list.innerHTML+="<li class='list-item' id='list-item-"+i+"'>"+input+"</li><button class='edit-btn' id='edit-btn-"+i+"' onclick='edit("+i+")'>✏️</button><button class='delete-btn' id='delete-btn-"+i+"' onclick='delet("+i+")'>🗑</button>"
 	document.getElementsByTagName('input')[0].value=' ';
 	}
 	else{
 		alert('Enter a valid input!!');
 	}

 }
function enter_submit(){
	let x=event.keyCode;
	// console.log(x)
	if(x==13){
		add()
	}
}