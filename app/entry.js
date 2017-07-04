'use strict';
document.writeln(
  '<p>' + require('crypto').randomBytes(8).toString('hex') + '</p>');