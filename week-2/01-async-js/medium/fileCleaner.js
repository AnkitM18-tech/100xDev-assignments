const fs = require("fs");

/* const getContent = (source, encoding, cb) => {
  fs.readFile(source, encoding, cb);
};

const putContent = (destination, modifiedInput, encodingOptions, cb) => {
  fs.writeFileSync(destination, modifiedInput, encodingOptions, cb);
};

const cleanFile = (inputString) => {
  let modifiedString = inputString.replace(/\s+/g, " ");
  return modifiedString;
};

getContent("./test.txt", "utf-8", (err, data) => {
  let modifiedContent = cleanFile(data);
  putContent(
    "./test.txt",
    modifiedContent,
    { encoding: "utf-8", flag: "w" },
    (err) => {
      err
        ? console.log(err)
        : getContent("./test.txt", "utf-8", (err, data) => {
            console.log(data);
          });
    }
  );
}); */

fs.readFile("./test.txt", "utf-8", (err, data) => {
  let readContent = data.replace(/\s+/g, " ");
  fs.writeFile(
    "./test.txt",
    readContent,
    { encoding: "utf-8", flag: "w" },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        fs.readFile("./test.txt", "utf-8", (err, data) => {
          console.log(data);
        });
        console.log("inside write");
      }
    }
  );
});
