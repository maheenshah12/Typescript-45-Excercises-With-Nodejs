//define a funtion to print each megician name from an array
function show_megician(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
//define an array containing megician name
var megician_names = ["harry poter", "ali", "huzaifa"];
//call the function to print megician name
show_megician(megician_names);
