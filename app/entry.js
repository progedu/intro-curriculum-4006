'use strict';
/**  シンプルにするために、crypto だけにした。
const dc = require('damage-calc');
document.writeln(
  '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' +
  dc.effectiveDamage(100, 50, 30) + '</p>');
 */

const crypto = require('crypto');   //  最近の授業だと、require('crypto').○○○.△△△　みたいな使い方が多いけれど、どちらの方が便利で一般的なのだろうか？
document.writeln(
  '<p>' + crypto.randomBytes(8).toString('hex') + '　左に示されているのは、crypto　を利用した１６進数の文字列</p>');