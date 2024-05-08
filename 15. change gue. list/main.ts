let guest_list = ["Alishan","aiman" ,"hani"]
let dont_come = guest_list [0];
console.log(dont_come, "is not coming");
guest_list.splice(0, 1, "areba");
guest_list.forEach(guest => console.log(`hey ${guest},would you like to dinner withme?`));


