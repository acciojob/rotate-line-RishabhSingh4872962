//your JS code here. If required. 
 const line=document.getElementById("line");

setInterval(()=>{
	const current=( window.getComputedStyle(line).transform);
	line.style.transform="rotate(2deg) "+current;
},20)