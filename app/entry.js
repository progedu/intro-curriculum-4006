'use strict';
const crypto = require('crypto');
document.writeln(
  '<p>' + crypto.randomBytes(8).toString('hex') + '</p>');