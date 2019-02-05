// Here we have a handful of ES5 functions.
// Spice them up by converting them to arrow functions!


let introduction = function(name, otherName) {
    let introduction = name + ", let me introduce you to " + otherName;
    return introduction;
}

let introduction6 = (name, otherName) => name + ", let me introduce you to " + otherName;

console.log(introduction6("lauren", "alex"));

// This one only has one parameter! 
let boringFunction = function (topic) {
    let complain = topic + " is so boooooring!!!";
    return complain;
}

let boringFunction6 = topic => topic + " is so boring!";

console.log(boringFunction6("trumpoleo"));

// This one has a single return statement!
let shout = function() {
    return "AAAHHHH!!"
}

let shout6 = () => "ahhh!";

console.log(shout6());