/*
 Scenario: You have recorded time for 10 trials, as recordedTimes. However, recordedTimes includes not only the reaction time, but also a stimuli presentation time 200 ms.
 */

 const recordedTimes = [550, 490, 510, 890, 1450, 470, 940, 620, 930, 360];
        
 /* exercise 5.2.1 */
 
 // Using a for loop, to get the data only stores your reaction time
 // console.log each iterate index and each reactionTime value accordingly in the loop
 let reactionTimes = [];
 for (let i = 0; i < recordedTimes.length; i++){
    reactionTimes[i] = recordedTimes[i] - 200;
    
    console.log("index", i, "reactionTime:", reactionTimes[i]);
 }

 
 /* # Plus 1: can you think of more than one way of doing it? */
let reactionTimes1 = [];
let i = 0;

for (const time of recordedTimes) {
  let rt = time - 200;
  reactionTimes1.push(rt);
  console.log("index", i, "reactionTime:", rt);
  i++;
}
 
 
 
 /* exercise 5.2.2 */
 
 //Using a while loop: when the total reaction time exceeds a certain threshold (e.g., 2000 milliseconds), console.log the thisTrial. thisTrial will start from 1.
 
// add your code below

let totalTime = 0;
let thisTrial;
let j = 0;

while (totalTime <= 2000 && j < reactionTimes.length) {
  totalTime += reactionTimes[j];
  thisTrial = j + 1; // because trials start at 1

  if (totalTime > 2000) {
    console.log("Threshold exceeded at trial:", thisTrial);
  }

  j++;
}




 console.log(`Cumulative reaction time exceeded 2000 ms at trial ${thisTrial}.`);