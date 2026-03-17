console.log("Hello")

//let age = 20;   // define the variable
let ageGroup;
const age = 25

if (age < 18) {
  ageGroup = "Child";
} else {
  ageGroup = "Adult";
}

console.log(ageGroup);

let age1 = 17.9
let ageGroup1 = age1 < 18 ? "Child" : "Adult";

console.log(ageGroup1);

let newAge = 25
switch (true) {
  case newAge < 18 && newAge >= 0:
    console.log("You're aChild!");
    break;

  case newAge <= 45 && newAge >= 19:
    console.log("You're an Adult!");
    break;

  case newAge > 45:
    console.log("You're a Senior!");
    break;

    default:
      console.log("Invalid age.");
}

let reactionTime = 100;

switch (true) {
  case reactionTime < 200 && reactionTime > 0:
    console.log("Fast Response! Excellent!");
    break;

  case reactionTime <= 500 && reactionTime >= 200:
    console.log("Moderate Response! Keep it up!");
    break;

  case reactionTime > 500:
    console.log("Slow Response. Try to improve!");
    break;

  default:
    console.log("Invalid reaction time.");
}

for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}

for (let j = 0; j <= 5; j++) {
    console.log("Value:", j);
}

for (let i =0; i<5;i++){
  console.log("i/numner:", i+1);
}

const responseTimes = [350, 420, 510];
for (const time of responseTimes) { console.log(`Response Time: ${time} ms`); }

const trial = { id: 1, responseTime: 350, correct: true };

for (const key in trial) {
  console.log(`${key}: ${trial[key]}`);
}

let i = 0;

while (i < 5) {
  console.log(`Number: ${i}`);
  i++;
}

let x = 0;

do {
  console.log(`Number: ${x}`);
  x++;
} while (x < 5);

let globalVar = "I'm global!";

function scope() {
  let localVar = "I'm local!";
  console.log(localVar);
  console.log(globalVar);
}

console.log(globalVar);
console.log(localVar);


//
//function checkEligibility(age4, hasParticipatedBefore, hasNormalVision, hasCognitiveImpairment) {
//  if (
//    age4 >=18 && age4 <== 35 && // Age condition
//    !hasParticipatedBefore && // Should NOT have participated before
//    !hasNormalVision && // Must have normal vision
//   !hasCognitiveImpairment // Must not have cognitive impairment
//  ) {
//    console.log("Participant is eligible for the experiment.");
//  } else {
//    console.log("Participant is not eligible for the experiment.");
//  }
//};

