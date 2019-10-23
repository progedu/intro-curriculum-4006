'use strict';
import crypto from 'crypto';
document.writeln(
  '<p>' + crypto.randomBytes(8).toString('hex') + '</p>');