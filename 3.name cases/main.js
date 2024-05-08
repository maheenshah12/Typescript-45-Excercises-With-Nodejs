var personName = "maheen imran";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (name) { return name.toUpperCase(); }));
