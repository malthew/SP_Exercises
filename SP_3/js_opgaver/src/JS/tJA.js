

console.log("---- The Javascript Array ----");
console.log();

console.log("     a) ARRAYS:");
    var boys = ["Peter", "Lars", "Ole"];
    console.log("        1. " + boys);
    var girls = ["Janne", "Hanne", "Sanne"];
    console.log("        2. " + girls);
    
console.log("\n     b) CONCAT() - all:");    
    var all = boys.concat(girls);
    console.log("        " + all);
    
console.log("\n     c) JOIN():");        
    console.log("        " + all.join(','));
    console.log("        " + all.join('-'));

console.log("\n     d) PUSH() (end):");     
    all.push('Lone', 'Gitte');
    console.log("        " + all);

console.log("\n     e) UNSHIFT() (front):");   
    all.unshift('Hans','Kurt');
    console.log("        " + all);

console.log("\n     f) SHIFT() (front):");   
    var first = all.shift();
    console.log("        Removing " + first + ": " + all);

console.log("\n     g) POP() (end):");   
    var end = all.pop();
    console.log("        Removing " + end + ": " + all);

console.log("\n     h) SPLICE():");
    all.splice(3,1);
    all.splice(3,1);
    console.log("        Removing Ole and Janne: " + all);

console.log("\n     i) REVERSE():");
    all.reverse();
    console.log("        Reversed: " + all);
    
console.log("\n     j) SORT():");    
    all.sort();
    console.log("        Sorted: " + all);
    console.log("        (It sorts both alphabetical and uppercase)");

console.log("\n     k) SORT():");   
    var lowercaseArray = all.map((n) => n.toLowerCase()).sort();
    console.log("        Sorted regardless: " + lowercaseArray.map(n => n.charAt(0).toUpperCase().concat(n.slice(1,n.length))));

console.log("\n     l) MAP():");   
    var upper = all.map(n => n.toUpperCase());
    console.log("        " + upper);

console.log("\n     m) FILTER():"); 
//  use the filter function with a sufficient callback
    var l = all.filter(n => n.charAt(0) === 'l');
    var L = all.filter(n => n.charAt(0) === 'L');
    var all = L.concat(l);
    console.log("        " + all);
// Another way:    
    var filteredArray = all.filter(n => (n.charAt(0) === 'L') || (n.charAt(0) === 'l'));
    console.log("        " + filteredArray);
