function stretch() {
  // Your code here
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("done stretching");
    }, 1000);
  });
  return p;
}

function runOnTreadmill() {
  // Your code here
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("done running on treadmill");
    }, 500);
  });
  return p;

}

function liftWeights() {
  // Your code here
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("done lifting weights");
    }, 2000);
  });
  return p;
}

function workout() {
  // Your code here
  stretch()
  .then(() => runOnTreadmill())
  .then(() => liftWeights())
  .then(() => console.log("done working out"));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


// runOnTreadmill();

workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out