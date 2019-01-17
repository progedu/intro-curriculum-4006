'use strict';
import dc from 'damage-calc';
import crypto from 'crypto';// Node.jsのcryptoモジュールをクライアントサイドのJavaScriptで実行する
document.writeln(
  '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' +
  dc.effectiveDamage(100, 50, 30) + '</p>');
document.writeln(
  '<p>' + crypto.randomBytes(8).toString('hex') + '</p>');
document.writeln(
  '<p>怒りのハッシュアルゴリズム一覧</p><p>' + crypto.getHashes() + '</p>');

/**
 *  失敗作です；；
 *  【3章2節：集計処理を行うプログラム】をクライアントサイドで実行してみる 
import fs from 'fs';
import readline from 'readline';
const rs = fs.ReadStream('./popu-pref.csv');
const rl = readline.createInterface({'input': rs, 'output': {} });
rl.on('line', (lineString) => {
  console.log(lineString);
});

*/