'use strict';
const dc = require('crypto');

document.writeln(
  '<p>' + require('crypto').randomBytes(8).toString('hex') + '</p>');