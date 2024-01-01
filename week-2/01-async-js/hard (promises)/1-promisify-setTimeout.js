/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

    // Wrapping async function
    function myOwnSetTimeout(fn,duration) {
        setTimeout(fn,duration);
    }
    myOwnSetTimeout(function(){
        console.log('myOwnSetTimeout')
    },1000);

    // Promisify
    function myOwnSetTimeoutPromise(duration) {
        let p = new Promise(function(resolve,reject) {
            // after duration seconds call resolve
            setTimeout(resolve,duration);
        });
        return p;
    }
    myOwnSetTimeoutPromise(1000)
    .then(function() {
        console.log('myOwnSetTimeoutPromise');
    })
*/

function wait(n) {
  let p = new Promise(function (resolve, reject) {
    setTimeout(resolve, n * 1000);
  });
  return p;
}

module.exports = wait;
