/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 *
 * returned undefined
 * non promisified functions -> return nothing --> callback as an i/p to the caller which tells that async work has been done.
 *
 * function ownSetTimeout(callback,duration) {
 * setTimeout(callback,duration);
 * }
 *
 * returning a promise
 *
 * function promisifyOwnSetTimeout(duration) {
 * const p = new Promise(function(resolve) {
 *  setTimeout(resolve,duration);
 * });
 *  return p;
 * }
 *
 * const ans = promisifyOwnSetTimeout(1000);
 * ans.then(function(){
 *  console.log('Done');
 * })
 * promisified functions -> return Promise -> that's how the caller knows that async work has been done.
 */

function sleep(milliseconds) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, milliseconds);
  });
  return p;
}

module.exports = sleep;
