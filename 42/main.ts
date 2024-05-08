//define a funtion to print each megician name from an array
function show_megician(megicians: string[]){
    megicians.forEach(name => console.log(name))
}
//function to make megician great through map()it will modify array
function make_great(megician : string[]){
   return megician.map(name => `the great ${name}`);
}

//define an array containing megician name
let megician_names = ["harry poter", "ali", "huzaifa"]

//call make great function to modify megician names
let great_megician = make_great(megician_names)

//call show_megician that show modified list of megicians 
show_megician(great_megician);


