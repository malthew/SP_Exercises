
console.log("\n---- Asynchronous Callbacks ----");

console.log();
console.log("Opgave 1:");
    console.log("    Jeg regner med at det uskrives således:");
    console.log("        aaaaaaaaaa");
    console.log("        dddddddddd");
    console.log("        ffffffffff");
    console.log("        eeeeeeeeee");
    console.log("        bbbbbbbbbb");

console.log("\nOpgave 2:");
    console.log("    Sådan her ser det ud:");
        var msgPrinter = function(msg,delay){
          setTimeout(function(){
            console.log(msg);
          },delay);
        };
        console.log("        aaaaaaaaaa");
        msgPrinter ("        bbbbbbbbbb",2000);
        console.log("        dddddddddd");
        msgPrinter ("        eeeeeeeeee",1000);
        console.log("        ffffffffff");
    msgPrinter("\n    Hvilket var hvad jeg havde angivet!", 2000);










