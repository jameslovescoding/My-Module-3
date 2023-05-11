/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
let p = await fetch('/products', {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: "11.99",
    categories: "grocery"
  })
});
console.log(p.status);
console.log(p.ok);
console.log(p.headers.get("Content-Type"))
console.log(await p.text());


/* ============================== Phase 2 ============================== */

// Your code here



/* ============================== Phase 3 ============================== */

// Your code here