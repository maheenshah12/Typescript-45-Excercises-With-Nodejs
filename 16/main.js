// we are making guest list array
var guest_list = ["alishan", "hani", "aiman", "hira"];
var dontCome = guest_list[0];
console.log(dontCome, "is not coming");
guest_list.splice(0, 1, "areeba");
console.log("Good news! we have found a bigger table for dinner.");
// we are adding rabia in the index(starting) of array
guest_list.unshift("rabia");
//we are adding noor in the end of array
guest_list.push("noor");
//get a new member in the middle of array
var middleIndex = Math.floor(guest_list.length / 2);
//we are adding sadia in middle of array
guest_list.splice(middleIndex, 0, "sadia");
console.log("updated list of our guest");
guest_list.forEach(function (guest) { return console.log("hey ".concat(guest, ",would to like to dinner wiyh me? ")); });
