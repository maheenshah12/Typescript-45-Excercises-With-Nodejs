var userNames = ['aiman', 'ali', 'admin', 'hani'];
if (userNames.length === 0) {
    console.log("your array in empty we need to find some users!");
}
else {
    // using foreach loop on array
    userNames.forEach(function (oneUser) {
        if (oneUser === 'admin') {
            console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
