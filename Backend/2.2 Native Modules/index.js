const fileSystem = require("fs");

fileSystem.writeFile("message.txt", "First NodeJS Program", (err) => {
    if (err) throw errl
    console.log("The fiile has been saved!")
});

fileSystem.readFile("./message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});