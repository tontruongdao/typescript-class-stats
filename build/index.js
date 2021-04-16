"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var matchResult;
(function (matchResult) {
    matchResult["homeWin"] = "H";
    matchResult["awayWin"] = "A";
    matchResult["Draw"] = "D";
})(matchResult || (matchResult = {}));
var manUWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
        manUWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
        manUWins++;
    }
}
console.log("Manchester United won " + manUWins + " games");
