'use strict';
const dc = require('damage-calc');
const area = document.getElementById('area');
const button = document.getElementById('button');

const num_hex = require('crypto').randomBytes(8).toString('hex');

let attack = parseInt(num_hex.slice(-5), 16);
let defense = parseInt(num_hex.slice(-6, -3), 16);
let defense_penetration = parseInt(num_hex.slice(-9, -6), 16);
let damage = dc.effectiveDamage(attack, defense, defense_penetration);
let MAOU_HP = 20000;
let turn_num = 1;



//console.log(typeof parseInt(attack, 16).valueOf()); // 文字列を数値化するのに手こずった名残



/*=== 攻撃ボタンを押したときの動作 ===*/
button.onclick = () => {
  MAOU_HP -= damage;
  
  if (MAOU_HP > 0){
    const write = document.createElement('p');
    write.innerHTML = turn_num + 'ターン目<br />' +
      '<br />勇者折原のステータス: 攻撃力= ' + attack + ', 防御貫通力= ' + defense_penetration +
      '<br />勇者瀧本のステータス(瀕死): 攻撃力= 0, 防御貫通力= 0' +
      '<br />魔王吉村のステータス: 防御力= ' + defense + '<br />勇者折原の攻撃。魔王吉村に' + damage + 'のダメージ。' +
      '<span style="color:#800000; font-weight: bold;">残りのHP= ' + MAOU_HP + '</span>';
    area.appendChild(write);
    turn_num++;
 
  }else {
    const write = document.createElement('p');
    write.innerHTML = turn_num + 'ターン目<br />' +
      '<br />勇者折原のステータス: 攻撃力= ' + attack + ', 防御貫通力= ' + defense_penetration +
      '<br />勇者瀧本のステータス(瀕死): 攻撃力= 0, 防御貫通力= 0' +
      '<br />魔王吉村のステータス: 防御力= ' + defense + '<br />勇者折原の攻撃。魔王吉村に' + damage + 'のダメージ。' +
      '<span style="color:#800000; font-weight: bold;">残りのHP= ' + MAOU_HP + '</span>' +
      '<span style="color:#800000; font-weight: bold;"><br />魔王吉村をたおした！</span>';
    area.appendChild(write);
  }
}
/*=== 攻撃ボタンを押したときの動作 ===*/



