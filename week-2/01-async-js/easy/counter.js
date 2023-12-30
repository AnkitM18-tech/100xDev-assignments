function counterUsingSetInterval() {
  let counter = 0;
  setInterval(() => timeDifference(counter++), 1000);
}

function timeDifference(counter) {
  console.log("----------------------");
  let start = new Date().getTime();
  console.log(counter);
  console.log(new Date().getTime() - start);
  console.log("----------------------");
}

function counterUsingSetTimeout() {
  setTimeout(() => counterUsingSetInterval(), 1000);
}

// counterUsingSetInterval();
counterUsingSetTimeout();
