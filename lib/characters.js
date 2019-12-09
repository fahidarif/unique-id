'use strict';

let uniqueCharacters = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz-"

module.exports.setFillers = (fillers) => {
    if (typeof fillers !== 'string') {
        return {
            message: 'invalid characters!',
            status: false
        };
    } else if (fillers.length < 64) {
        return {
            message: 'need 64 unique characters!',
            status: false
        };
    } else {
        if (!checkUniqueness(fillers)) {
            return {
                message: 'duplicate characters found!',
                status: false
            };
        }
        uniqueCharacters = fillers;
        return { status: true };
    }
}

function checkUniqueness(characters) {
    // If at any time we encounter 2 same 
    // characters, return false 
    for (let i = 0; i < characters.length; i++) {
        for (let j = i + 1; j < characters.length; j++) {
            if (characters.charAt(i) == characters.charAt(j)) {
                return false;
            }
        }
    }
    // If no duplicate characters encountered, 
    // return true 
    return true;
}

module.exports.fillers = uniqueCharacters;