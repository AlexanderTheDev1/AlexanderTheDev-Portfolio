console.log("Testing if this works")
let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome");

console.log(position);

let age = prompt("How old are you");
if (age != null) {
    console.log(`You are ${age} years old.`);
} else {
    console.log("User cancelled the prompt");
}
do {
    console.log("Put Your age");
    age = prompt("How old are you");
} while (age = null);
 
