'use strict';

const BigInt = require('big-integer');

const loadNs = process.hrtime();
const loadMs = new Date().getTime();

function seeds() {
  let diffNs = process.hrtime(loadNs);
  return BigInt(loadMs).times(1e6).add(BigInt(diffNs[0]).times(1e9).plus(diffNs[1])).toString();
}

module.exports = seeds;