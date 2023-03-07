//guesing game try
let maxnum = parseInt(prompt("Enter max number"));
while (!maxnum) {
  maxnum = parseInt(prompt("Enter valid max number"));
}
const target = Math.floor(Math.random() * maxnum) + 1;
console.log(target);
let guess = parseInt(prompt("Enter number:"));
while (guess != target) {
  if (guess > target) {
    guess = parseInt(prompt("guess too high!! Enter new guess"));
  } else {
    guess = parseInt(prompt("guess too low!! Enter new guess"));
  }
}
console.log("You got it right!!");
