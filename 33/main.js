//creating a array
var numders = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for-loop
for (var _i = 0, numders_1 = numders; _i < numders_1.length; _i++) {
    var oneNumber = numders_1[_i];
    var ordinalEnding = void 0;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else
        (ordinalEnding = "th");
    console.log("".concat(oneNumber).concat(ordinalEnding));
}
