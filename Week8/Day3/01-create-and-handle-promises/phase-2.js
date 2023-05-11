function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here

  const p = new Promise((resolve, reject) => {
    if (timeLeft < 1000) {
      reject("you dont have enough time to stretch");
    } else {
      setTimeout(() => {
        resolve();
        console.log("done stretching");
      }, 1000);
    }
  });
  return p;
}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const p = new Promise((resolve, reject) => {
    if (timeLeft < 500) {
      reject("you dont have enough time to run on treadmill");
    } else {
      setTimeout(() => {
        resolve();
        console.log("done running on treadmill");
      }, 500);
    }
  });
  return p;
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const p = new Promise((resolve, reject) => {
    if (timeLeft < 2000) {
      reject("you dont have enough time to lift weights");
    } else {
      setTimeout(() => {
        resolve();
        console.log("lifting weights");
      }, 2000);
    }
  });
  return p;
}


function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here

  let finalStage = (timeLeft) => {
    if (timeLeft > 0) {
      console.log(`done working out with ${timeLeft / 1000} seconds left`)
    }
  }

  stretch(totalTime)
  .then(() => runOnTreadmill(totalTime - 1000))
  .then(() => liftWeights(totalTime - 1500))
  .then(() => finalStage(totalTime - 3500))
  .catch((error) => console.log(error));

}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left