/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, t * 1000);
  });
  return p;
}

function wait2(t) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, t * 1000);
  });
  return p;
}

function wait3(t) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, t * 1000);
  });
  return p;
}

async function calculateTime(t1, t2, t3) {
  let start = new Date().getTime();
  let end;
  await wait1(t1)
    .then(function () {
      return wait2(t2);
    })
    .then(function () {
      return wait3(t3);
    })
    .then(function () {
      end = new Date().getTime();
    });
  return end - start;
}

module.exports = calculateTime;
