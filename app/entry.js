'use strict';
// 'damage-calc'モジュールを読み込む
const dc = require('damage-calc');
// 'crypto'モジュールを読み込む
const crypto = require('crypto');

document.writeln(
  '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' +
  dc.effectiveDamage(100, 50, 30) + '</p>');
document.writeln(
  '<p>' + crypto.randomBytes(8).toString('hex') + '</p>');
