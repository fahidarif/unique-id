'use strict';
const BigInt = require('big-integer');
const loadNs = process.hrtime();
const loadMs = new Date().getTime();

var address = '';
if (typeof __webpack_require__ !== 'function') {
  var mac = '', networkInterfaces = require('os').networkInterfaces();
  for (let interface_key in networkInterfaces) {
    const networkInterface = networkInterfaces[interface_key];
    const length = networkInterface.length;
    for (var i = 0; i < length; i++) {
      if (networkInterface[i].mac && networkInterface[i].mac != '00:00:00:00:00:00') {
        mac = networkInterface[i].mac; break;
      }
    }
  }
  address = mac ? parseInt(mac.replace(/\:|\D+/gi, '')).toString() : '';
}

function seeds() {
  let diffNs = process.hrtime(loadNs);
  let time = BigInt(loadMs).times(1e6).add(BigInt(diffNs[0]).times(1e9).plus(diffNs[1]));
  var last = seeds.last || time;
  return process.pid + (seeds.last = BigInt(time).greater(last) ? time.toString() : BigInt(last).add(1).toString()) + address;
}

module.exports = seeds;