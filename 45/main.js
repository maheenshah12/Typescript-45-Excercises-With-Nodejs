//define a function to creat a car object with optional options...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initialize a car object with manufacuturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // add  additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], Value = _a[1];
        car[key.trim()] = Value.trim();
    });
    return car;
}
//call the function to creat a car object
var my_car = create_car("toyota", "corrolla", "color: black", "sunroof: true");
//print the varible to ensure all the information is stored correctly in the car object
console.log(my_car);
