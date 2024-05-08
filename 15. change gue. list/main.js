var guest_list = ["Alishan", "aiman", "hani"];
var dont_come = guest_list[0];
console.log(dont_come, "is not coming");
guest_list.splice(0, 1, "areba");
guest_list.forEach(function (guest) { return console.log("hey ".concat(guest, ",would you like to dinner withme?")); });
