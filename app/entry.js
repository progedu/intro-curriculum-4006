'use strict';
import dc from 'damage-calc';
import crypto from 'crypto';

const root = document.getElementById('root');

root.innerHTML = '<p>' + crypto.randomBytes(8).toString('hex') + '</p>';
