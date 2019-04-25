const express = require("express");
const path = require("path");
const app = express();

app.get(`/startPage`,  function (req, res) {
    res.sendFile(path.join(__dirname, './StartPage.html'));
});
app.get(`/irregularShape`,  function (req, res) {
    res.sendFile(path.join(__dirname, './irregularShape.html'));
});
app.get(`/cel`,  function (req, res) {
    res.sendFile(path.join(__dirname, './cell.html'));
});
app.get(`/converter`,  function (req, res) {
    res.sendFile(path.join(__dirname, './converter.html'));
});
app.get(`/roundProfile`,  function (req, res) {
    res.sendFile(path.join(__dirname, './roundProfile.html'));
});
app.get(`/squareProfile`,  function (req, res) {
    res.sendFile(path.join(__dirname, './squareProfile.html'));
});

app.listen(3000, () => console.log('Server started...'));