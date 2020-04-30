'use strict';
import crypto from 'crypto';
const root = document.getElementById('root');
root.innerHTML = `<p>あなたの ID は ${crypto.randomBytes(8).toString('hex')} です。</p>`;