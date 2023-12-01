'use strict';
const seeds = require("./seeder");
const characters = require("./characters");
const bigInt = require("big-integer");

let prefix = "";
let postfix = "";


module.exports.get = () => {
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
    return (prefix + result + postfix);
}

module.exports.characters = (unique64Characters) => {
    return characters.setFillers(unique64Characters);
}

module.exports.setPrefix = (prefixInput = '') => {
    if (typeof prefixInput !== 'string') {
        return {
            message: 'Invalid input type, Required string.',
            status: false
        };
    };
    if (prefixInput.length > 50) {
        return {
            message: 'Max chars limit is 50.',
            status: false
        };
    };
    prefix = prefixInput;
    return { status: true };
}

module.exports.setPostfix = (postfixInput = '') => {
    if (typeof postfixInput !== 'string') {
        return {
            message: 'Invalid input type, Required string.',
            status: false
        };
    };
    if (postfixInput.length > 50) {
        return {
            message: 'Max chars limit is 50.',
            status: false
        };
    };
    postfix = postfixInput;
    return { status: true };
}