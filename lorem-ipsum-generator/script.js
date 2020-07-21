let result=document.getElementById('result');
function generate(){
	let para=document.getElementsByTagName('input')[0].value;
	result.innerText=`Generate ${para} paragraphs`;
}