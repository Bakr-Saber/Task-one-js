// Assignment With if Condition
prompt("type the score.");

let score = prompt("type the score.");

if ((score < 100) & (score >= 85)) {
  console.log("You got A");
} else if ((score < 85) & (score >= 75)) {
  console.log("You got a B");
} else if ((score < 75) & (score >= 65)) {
  console.log("You got a C");
} else if ((score < 65) & (score >= 50)) {
  console.log("You got a D");
} else if ((score < 50) & (score >= 0)) {
  console.log("You got a F");
} else if (score > 100 || score < 0) {
  console.log("Infalid Score");
} else if (score == NaN) {
  console.log("Not a Number");
} else if (score == 100) {
  console.log("Prifect Score");
}

// Assignment With Switch

switch (true) {
  case (score < 100) & (score >= 85):
    console.log("You got A");
    break;
  case (score < 85) & (score >= 75):
    console.log("You got B");
    break;
  case (score < 75) & (score >= 65):
    console.log("You got C");
    break;
  case (score < 65) & (score >= 50):
    console.log("You got D");
    break;
  case (score < 50) & (score >= 0):
    console.log("Infalid Score");
    break;
  case score == NaN:
    console.log("Not a Number");
    break;
  case score == 100:
    console.log("Prifect Score");
    break;
}
