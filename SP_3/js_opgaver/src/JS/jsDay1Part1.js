
// Function Declaration
    //Observe: no return type, no type on parameters
    function add(n1, n2){
        if (typeof n1 !== "number" || typeof n1 === "undefined")
            return "n1 is not a number";
        else if (typeof n2 !== "number" || typeof n2 === "undefined")
            return "n2 is not a number";
         else 
            return n1 + n2;
    };

// Function Expression
    var sub = function(n1,n2){
        if (typeof n1 !== "number" || typeof n1 === "undefined")
            return "n1 is not a number";
        else if (typeof n2 !== "number" || typeof n2 === "undefined")
                return "n2 is not a number";
         else 
            return n1 - n2;
    };

// Callback example
    var cb = function(n1,n2, callback){
        if (typeof n1 !== "number" || typeof n1 === "undefined")
            return "n1 is not a number";
        else if (typeof n2 !== "number" || typeof n2 === "undefined")
            return "n2 is not a number";
        else if (typeof callback !== "function" || typeof callback === "undefined")
            return "callback is not a function or empty";    
        else 
            return "Result from the two numbers: " + n1 + " + " + n2 + " = " + callback(n1,n2);
    };

console.log("---- JavaScript functions and Callbacks ----");
console.log();
console.log("Opgave 2:");

console.log("     1) Denne vil ligge 1 og 2 samme og returnerer 3:");
    console.log("        \"add(1,2)\" = " + add(1,2));

console.log("     2) Denne vil printe funktionen add ud:");
    console.log("        \"add\" = " + add);

console.log("     3) Den ignorere alt der kommer efter de værdier som skal stå der:");
    console.log("        \"add(1,2,3)\" = " + add(1,2,3));

console.log("     4) Den returnerer en NaN fejl - Not-a-Number da der mangler en værdi:");
    console.log("        \"add(1)\" = " + add(1));

console.log("     5) Den returnerer 6 - callback:");
    console.log("        \"cb(3,3,add)\" = " + cb(3,3,add));

console.log("     6) Den returnerer 1 - callback:");
    console.log("        \"cb(4,3,sub)\" = " + cb(4,3,sub));

console.log("     7) Den printer en fejl fordi add er tom og siger at callback (add) ikke er en funktion");
    console.log("        \"cb(3,3,add())\" = " + cb(3,3,add()));
    
console.log("     8) Den tror 3 er en String og vil derfor skrive 3hh:");
    console.log("        \"cb(3,\"hh\",add)\" = " + cb(3,"hh",add));    

console.log();
console.log("Opgave 3:");
    try {
        console.log("        \"cb(3,3,add())\" = " + cb(3,3,add()));
    } catch (e) {
        console.error("        " + e.name + ': ' + e.message);
    }

console.log();
console.log("Opgave 4:");
    function mul(n1, n2){
        return n1*n2;
    }
    console.log("        \"mul(5,5)\" = " + mul(5,5));    

console.log();
console.log("Opgave 4:");
    function mul(n1, n2){
        if (typeof n1 !== "number" || typeof n1 === "undefined")
            throw new Error("n1 is not a number");
        else if (typeof n2 !== "number" || typeof n2 === "undefined")
                throw new Error("n2 is not a number");
         else 
            return n1 * n2;
    }
    console.log("        \"cb(5,5,mul)\" = " + cb(5,5,mul));    

console.log();
console.log("Opgave 5:");
    function anonymous(n1, n2){
        if (typeof n1 !== "number" || typeof n1 === "undefined")
            throw new Error("n1 is not a number");
        else if (typeof n2 !== "number" || typeof n2 === "undefined")
                throw new Error("n2 is not a number");
         else 
            return n1 / n2;
    }
    console.log("        \"cb(6,2,anonymous)\" = " + cb(6,2,anonymous));  






