// making a function
function make_shirt (size: string = "large", print_message: string = "I love typescript"){
console.log(`creating a ${size} shirt with the ${print_message} prints on shirt`)
}

//calling a function with by default values but in urdu means neecahi koi value nhi di hai bass uper hi likh dia hai
make_shirt();

//calling a function with medium size and default message
make_shirt("medium")

//calling a function with any size but change message and print on shirt
make_shirt("small", "food is life");
