'use strict';
const dc = require('damage-calc');
document.writeln(
  '<p>' + require('crypto').randomBytes(8).toString('hex') + '</p>');