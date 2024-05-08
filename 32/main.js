//array of current users
var current_users = ['usman', 'aiman', 'ali', 'hani', 'areeba'];
//array of new users
var new_users = ['maheen', 'arbeen', 'Areeba', 'Hani', 'asim'];
//loop through new_users to check for usersname avaibility
new_users.forEach(function (new_one_user) {
    //making a condition for username already exist and save in
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    ////print different messages using if - statement
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is availble"));
    }
});
