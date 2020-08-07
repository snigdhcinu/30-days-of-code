 // script file

 // Implement carausel logic.
 // Set object for each person's photo, name, profession, review.
 // Implement the next and prev buttons.
 // Implement the random person's review generator.

let _1={
	name:'John Show',
	title:'Blacksmith',
	review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
};
let _2={
	name:'Snigdh Shourya',
	title:'Web Developer',
	review:'xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate '
};
let _3 ={
	name:'Star Lord', 
	title: 'Guardian', 
	review:'m dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id '
};
let _4={
	name:'Selina Gomez', 
	title: 'Singer', 
	review:'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali'
};
let _5 ={
	name:'Momduda Yamiza', 
	title: 'Actress', 
	review:'n proident, sunt in culpa qui officia deserunt mollit anim id est labn proident, sunt in culpa qui officia deserunt mollit anim id est lab'
};
let _6 ={
	name:'Peter Parker', 
	title: 'Student', 
	review:'m dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l'
};
let _7 ={
	name:'Kobe Wilson', 
	title: 'Sports Person', 
	review:'olor in reprehenderit in dfa fdae voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca'
};
let _8 ={
	name:'Will Smith', 
	title: 'Actor', 
	review:'minim veniam, quis jdkf eruei aod fdfe fdasd fdfj fjdfjie  afiajf jf eif nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
};
let _9 ={
	name:'Abraham Lincon', 
	title: 'Politician', 
	review:' Duis aute irure dolor in reprehenderit adfse in voluptate velit esse cillum dolore eu fugiat'
};
let _10 ={
	name:'Tony Stark', 
	title: 'Industrialist', 
	review:'uis nostrud exercitation ullamco laboris nisi ufs fad dfdt aliquip ex ea proident, sunt in culpa qui officia deserunt mollit anim id est la'
};
let reviews=[];
reviews.push(_1);
reviews.push(_2);
reviews.push(_3);
reviews.push(_4);
reviews.push(_5);
reviews.push(_6);
reviews.push(_7);
reviews.push(_8);
reviews.push(_9);
reviews.push(_10);
// console.log(reviews[0].name);	// John Snow
let index=0;
 	document.getElementById('pic').src=`photos/${index}.jpg`;
document.getElementById('name').innerText=reviews[index].name;
document.getElementById('designation').innerText=reviews[index].title;
document.getElementById('description').innerText=reviews[index].review;
 function prev(){
 	index-=1;
 	if(index==-1)
 		index=9;
 	document.getElementById('pic').src=`photos/${index}.jpg`;
 	document.getElementById('name').innerText=reviews[index].name;
	document.getElementById('designation').innerText=reviews[index].title;
	document.getElementById('description').innerText=reviews[index].review;
 }
 function next(){
 	index+=1
 	if(index==10)
 		index=0;
 	document.getElementById('pic').src=`photos/${index}.jpg`;
 	document.getElementById('name').innerText=reviews[index].name;
	document.getElementById('designation').innerText=reviews[index].title;
	document.getElementById('description').innerText=reviews[index].review;
 }
 function rand_resp(){
 	let i= Math.floor(Math.random()*reviews.length)
 	document.getElementById('pic').src=`photos/${i}.jpg`;
 	document.getElementById('name').innerText=reviews[i].name;
	document.getElementById('designation').innerText=reviews[i].title;
	document.getElementById('description').innerText=reviews[i].review;
 }