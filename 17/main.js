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
//informed that only two guests can be invited for dinner
console.log("unfortunalely, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");
//using while loop to remove guests from the array until only two guests names remain
while (guest_list.length > 2) {
    var removeGuest = guest_list.pop();
    console.log("sorry, ".concat(removeGuest, " I cant invite to diner"));
}
//sending a invitions to the last two guests on the list
console.log("invition to the last two guests");
guest_list.forEach(function (lastTwo) { return console.log("Luckly ".concat(lastTwo, ", you are still invited to dinner")); });
//removing last to guest from the list
guest_list.pop();
guest_list.pop();
console.log("Empty lists:", guest_list);
