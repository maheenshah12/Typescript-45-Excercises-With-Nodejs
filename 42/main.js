//define a funtion to print each megician name from an array
function show_megician(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
function make_great(megician) {
    return megician.map(function (name) { return "the great ".concat(name); });
}
//define an array containing megician name
var megician_names = ["harry poter", "ali", "huzaifa"];
var great_megician = make_great(megician_names);
show_megician(great_megician);
