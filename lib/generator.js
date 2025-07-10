'use strict';
const seeds = require("./seeder");
const characters = require("./characters");
const bigInt = require("big-integer");

module.exports.get = (prefix = '', suffix = '') => {
    let fillers = characters.fillers();
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
    return ((prefix || '') + result + (suffix || ''));
}

module.exports.characters = (unique64Characters) => {
    return characters.setFillers(unique64Characters);
}

