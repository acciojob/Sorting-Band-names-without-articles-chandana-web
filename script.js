//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let wiartwiart=[];
let map={};
for (let i = 0; i<touristSpots.length ; i++) {
	let str= touristSpots[i];
str=str.replace(/\ba\b|\ban\b|\bthe\b/gi, "");
	str=str.replace(/ +/gi, " ");
	str=str.trim();
	map[str]=arr[i];
	wiart.push(str);
}
wiart.sort();
for(let i=0;i<wiart.length;i++){
	console.log(map[wiart[i]]);
	
}
