'use strict';
import dc from 'damage-calc';
const root = document.getElementById('root');
root.innerHTML = '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、'
  + dc.effectiveDamage(100, 50, 30) + '</p>';

import crypto from 'crypto';
const root_crypto = document.getElementById('root-crypto');
root_crypto.innerHTML = '<p>' + crypto.randomBytes(8).toString('hex') + '</p>';