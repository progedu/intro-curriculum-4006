'use strict';
import crypt from 'crypto';
const root = document.getElementById('root');
root.innerHTML = `<p>${crypt.randomBytes(8).toString('hex')}</p>`;
