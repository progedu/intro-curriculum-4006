'use strict';
const dc = require ('damage-calc');
const crypto = require ('crypto');
const root = document.getElementById('root');
root.innerHTML = '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、'
  + dc.effectiveDamage(100, 50, 30) + 
  '</p>今日のあなたのラッキー文字列は、 ' 
  + crypto.randomBytes(8).toString('hex') + '</p>';