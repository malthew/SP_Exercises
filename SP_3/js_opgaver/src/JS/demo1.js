


console.log("Hello World, I know how to count");

// Bogstaver:
let a = ['a', 'b', 'c'];
a.forEach(n=>console.log(n));
    console.log();

// Stort bogstav:
let b = a.map(n => n.toUpperCase());
b.forEach(n=>console.log(n));
    console.log();
console.log(b);
    console.log();

// Filter:
let c = a.filter(n => n === 'b');
console.log(c);
    console.log();

// HTML:
console.log('- HTML -');
let html = a.map(n => '<li>' + n + '</li>'); 

console.log('<ul>');
for (i = 0; i < a.length; i++){
    console.log('<li>' + a[i] + '</li>');
}
console.log('</ul>');
console.log();

console.log('<ul>' + html.join(" ") + '</ul>');
    console.log();

// Tal:
[1,2,3,4].forEach(n=>console.log(n));
    console.log();
    
[1,2,3,4].forEach(udskriv);
    console.log();
[1,2,3,4].forEach(udskrivdeluxe);
    console.log();
[1,2,3,4].forEach(console.log);
    console.log();

udskriv(215);
    console.log();

function udskriv(n) {
    console.log(n);
}

function udskrivdeluxe(n) {
    console.log('tal: ' + n);
}

// Der kan opstå fejl når der ikke er angivet en bestemt type:
function add(a,b){
    return a + b;
}
console.log('- DER KAN OPSTÅ FEJL MED TYPER -');

console.log(add(5,2));
console.log(add('Jeg vil have en ','hest'));
console.log(add(5,'hest'));
console.log(add(5,"hest"));
console.log(add('hest '));
console.log(add);
    console.log();
    
console.log('- CALLBACK -');
var f1 = function(n1,n2, callback){
  return "Result using the numbers: "+n1+" and "+n2+" = "+callback(n1,n2);
};
console.log( f1(3,3,add) );