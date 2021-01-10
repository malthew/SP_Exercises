
console.log("\n---- Callbacks (with map, filter and forEach) ----");

console.log();
console.log("Opgave 1:");
    var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Ole"];
    console.log("    Names: ");
    names.forEach(n=>console.log("        " + n));
    
    var result = names.filter(name => name.length >= 3);
    console.log("    Names with 3 or more letters (where is Bo?): ");
    result.forEach(n=>console.log("        " + n));

console.log("\nOpgave 2:");
    console.log("    Names uppercase: ");
    var upper = names.map(n => n.toUpperCase());
    upper.forEach(n => console.log("        " + n));

console.log("\nOpgave 3:");
    var newNames = ["Lars", "Peter", "Jan", "Ian"];
    var html = newNames.map(n => "<li>"+n+"</li>");
    console.log("        <ul>" + html.join('') + "</ul>\n");
    
    console.log("        <ul>\n          " + html.join('\n          ') + "\n        </ul>");
    console.log("Want 1. print because much simpler");

console.log("\nOpgave 4:");
    var cars = [
      { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
      { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
      { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
      { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
      { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
    ];
    function filter_year(year) {
        return year.year > 1999;
    }
    function filter_make(make) {
        return make.make === "Volvo";
    }
    function filter_price(price) {
        return price.price < 5000;
    }

    var filtered = cars.filter(filter_year);
    console.log("    Cars newer than 1999: ");
    filtered.forEach(n=> console.log(n));
    
    var filtered2 = cars.filter(filter_make);
    console.log("    All Volvo's:");
    filtered2.forEach(n=> console.log(n));
    
    var filtered3 = cars.filter(filter_price);
    console.log("    All cars with a price below 5000:");
    filtered3.forEach(n=> console.log(n));
    
console.log("\nOpgave 4a:");
    sqlcars = cars.filter(x => x.year > 1999).map(x => 'INSERT INTO cars (id,year,make,model,price) VALUES '
    +'(' + x.id + ',' + x.year + ',' + x.make + ',' + x.model + ',' + x.price + ');\n');
    console.log(sqlcars.join(""));
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


