//define a function with a parameter that accept items arguments repenting our sandwich

function makeSandwich(...items : string[]){

    console.log("making a sandwich witha following items: \n");

  items.forEach(singleItem => console.log(singleItem));

  console.log("now enjoy sandwich \n");
}

//call the functions 3 times with 3 different number of arguments
makeSandwich("chicken","cheese","mayo","eggs");

makeSandwich("bread","butter");

makeSandwich("fish","eggs","mayo","ketchup","veniger","butter","cheese","mustard sause","red sause");

