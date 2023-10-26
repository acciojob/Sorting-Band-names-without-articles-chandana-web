//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let withoutArticles = [];
let map = {};

for (let i = 0; i < arr.length; i++) {
    let str = arr[i];


    str = str.replace(/\b(?:a|an|the)\b/gi, ''); 

    str = str.replace(/\s+/gi, ' '); 
    str = str.trim();
    map[str] = arr[i];
    withoutArticles.push(str);
}

withoutArticles.sort();

for (let i = 0; i < withoutArticles.length; i++) {
    console.log(map[withoutArticles[i]);
}

