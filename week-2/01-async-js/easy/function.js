const fs = require("fs");
//5
// fs.readFile will get delegated and the rest of the code below will execute and then the readFile executes.
fs.readFile("./4-write-to-file.md", "utf-8", (err, data) => {
  console.log(data);
});

//1
let ans = 0;
for (let i = 0; i <= 1000000000; i++) {
  ans += 1;
}
console.log(ans);

// setTimeout, setInterval and other async functions will go to callback queue and if only the js thread is idle then it will be executed, else if any expensive operation is going on, the callback functions will be executed only after that expensive operation is finished. then it will get pushed to call stack and get executed.

//4
let dataToAppend = "\nThis thing is being written in this markdown file";
fs.writeFile(
  "./4-write-to-file.md",
  dataToAppend,
  { encoding: "utf-8", flag: "a" },
  (err) => {
    err ? console.error(err) : console.log("Done writing");
  }
);

//2
for (let i = 0; i <= 1000000000; i++) {
  ans += 1;
}
console.log(ans);

//6
fs.readFile("./4-write-to-file.md", "utf-8", (err, data) => {
  console.log(data);
});

//3
for (let i = 0; i <= 1000000000; i++) {
  ans += 1;
}
console.log(ans);
