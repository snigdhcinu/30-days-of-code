 // this is the script file
 let i=1;
 let len=4; // Total no. of available images/slide elements.
 let container=document.getElementById('container');
 function prev(){
 	if(i==1)
 		i=len;
 	else
 		i-=1;
 	container.style.backgroundImage="url('public/pic"+i+".jpg')";
 	console.log(container.style.backgroundImage)
 }
 function next(){
 	if(i==len)
 		i=1;
 	else
 		i+=1;
 	container.style.backgroundImage="url('public/pic"+i+".jpg')";
 	 	console.log(container.style.backgroundImage)
 }
 setInterval(next,5000);