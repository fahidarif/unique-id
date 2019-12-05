'use strict';
const seeds = require("./seeder");
const characters = require("./characters");
var bigInt = require("big-integer");

let fillers = characters.fillers;
module.exports.get = () => {
    let rixit;
    let residual = seeds();
    let result = '';
    while (true) {
        rixit = bigInt(residual).remainder(64).toString()
        result = fillers.charAt(rixit) + result;
        residual = bigInt(residual).divide(64);
        if (residual == 0)
            break;
    }
    return result;
}