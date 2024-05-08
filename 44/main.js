//define a function with a parameter that accept items arguments repenting our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich witha following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("now enjoy sandwich \n");
}
//call the functions 3 times with 3 different number of arguments
makeSandwich("chicken", "cheese", "mayo", "eggs");
makeSandwich("bread", "butter");
makeSandwich("fish", "eggs", "mayo", "ketchup", "veniger", "butter", "cheese", "mustard sause", "red sause");
