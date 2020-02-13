'use strict';
import crypto from 'crypto';
const root = document.getElementById('root');
root.innerHTML = '<p>' + crypto.randomBytes(8).toString('hex') + '</p>';