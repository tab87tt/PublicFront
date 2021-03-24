const express = require("express");
const app = express();
const path = require("path");

//react app served statically through the build folder
app.use(express.static(path.join(__dirname, "build")));

//routed to the index.html entry point
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "build", "index.html"))
});

//catch all edge cases for react router to reroute when linked from external and/or not coming from homepage
app.get('/*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
})

console.log("App listening on port [redacted]");

app.listen([redacted]);