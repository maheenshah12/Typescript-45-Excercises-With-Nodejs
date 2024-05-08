//define a funtion to print each megician name from an array
function show_megician(megicians: string[]){
    megicians.forEach(name => console.log(name))
}
//function to make megician great through map()it will modify array
function make_great(megician : string[]){
   return megician.map(name => `the great ${name}`);
}

//define an array containing megician name
let megician_names = ["harry poter", "ali", "huzaifa"];

//making a copy of original array through .slice() function
let copy_megician_names = megician_names.slice()
 
// modify the copied array to include "The Great" with therir names
let copy_great_megicians = make_great(copy_megician_names);

//show both arrays original and copy

//original
console.log("original array\n")
show_megician(megician_names);

//copied
console.log("copied array\n")
show_megician(copy_great_megicians);


