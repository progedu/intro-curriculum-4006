'use strict';
const dc = require('damage-calc');

document.writeln(
  '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' +
  dc.effectiveDamage(100, 50, 30) + ' です。</p>');

document.writeln(
  '<p>ランダムな8バイトの値の16進数文字列: ' + require('crypto').randomBytes(8).toString('hex') + '</p>'
);