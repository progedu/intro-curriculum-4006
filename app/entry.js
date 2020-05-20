'use strict';
import dc from 'damage-calc';
import crypto from 'crypto';

const root = document.getElementById('root');
root.innerHTML = '<p>(1)攻撃力 100, 防御 50, 防御貫通 30 のダメージは、'
  + dc.effectiveDamage(100, 50, 30) + '<br>(2)ランダムな8バイトの値の 16 進数の文字列： ' + crypto.randomBytes(8).toString('hex') + '</p>';
