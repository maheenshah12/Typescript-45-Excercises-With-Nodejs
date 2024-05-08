//making a array of countries and prient its original order.
let countriesTovisit:string[] = ["Singapour", "China", "Turkey", "Dubai", "Thailand"];
console.log("original order", countriesTovisit);
//print the array in alphabetical order wiyh out modifying actual array list
console.log("Alphabetical order;", [...countriesTovisit].sort());
//show that the array is still in its orginal order 
console.log("still in orginal order;",countriesTovisit);
//print the array in reverse order without modifying the actual array list
console.log("Reverse order:", [...countriesTovisit].reverse());

//show that the array is still in its orginal order 
console.log("still in orginal order;",countriesTovisit);
//we have change the original array order now
console.log("original atrray reversed:", countriesTovisit.reverse())

//print the array to show that its back to  its original order
console.log("Back to original order:", countriesTovisit.reverse())
//print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabetical order:",countriesTovisit.sort());

//we have change the original array order now in reverse order again
console.log("original atrray reversed again:", countriesTovisit.reverse())
