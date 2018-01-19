'use strict';
const dc = require('damage-calc');
const area = document.getElementById('area');
const button = document.getElementById('button');

let num_hex = require('crypto').randomBytes(8).toString('hex');

let attack = parseInt(num_hex.slice(-4), 16);
let defense = parseInt(num_hex.slice(-6, -3), 16);
let defense_penetration = parseInt(num_hex.slice(-9, -6), 16);
let damage = dc.effectiveDamage(attack, defense, defense_penetration);
let MAOU_HP = 20000;
let turn_num = 1;



//console.log(typeof parseInt(attack, 16).valueOf()); // 文字列を数値化するのに手こずった名残
function min_HP(remaining) {
  if (remaining < 0) {
    return 0;
  } else {
    return remaining;
  }
}
console.log(min_HP(MAOU_HP));

/*=== 攻撃ボタンを押したときの動作 ===*/
button.onclick = () => {
  if (MAOU_HP > 0) {
    num_hex = require('crypto').randomBytes(8).toString('hex');
    console.log(num_hex);
    attack = parseInt(num_hex.slice(-4), 16);;
    defense = parseInt(num_hex.slice(-6, -3), 16);;
    defense_penetration = parseInt(num_hex.slice(-9, -6), 16);;
    damage = dc.effectiveDamage(attack, defense, defense_penetration);;

    MAOU_HP -= damage;

    const write = document.createElement('p');
    write.innerHTML = turn_num + 'ターン目<br />' +
      '<br />勇者折原のステータス: 攻撃力= ' + attack + ', 防御貫通力 = ' + defense_penetration +
      '<br />勇者瀧本のステータス(瀕死): 攻撃力= 0, 防御貫通力= 0' +
      '<br />魔王吉村のステータス: 防御力= ' + defense + '<br />勇者折原の攻撃。魔王吉村に' + damage + 'のダメージ。' +
      '<span style="color:#800000; font-weight: bold;">残りのHP= ' + min_HP(MAOU_HP) + '</span>';
    area.appendChild(write);
    turn_num++;
  } else {
    const write = document.createElement('p');
    write.innerHTML = turn_num + 'ターン目<br />' +
      '<br />勇者折原のステータス: 攻撃力= ' + attack + ', 防御貫通力= ' + defense_penetration +
      '<br />勇者瀧本のステータス(瀕死): 攻撃力= 0, 防御貫通力= 0' +
      '<br />魔王吉村のステータス: 防御力= ' + defense + '<br />勇者折原の攻撃。魔王吉村に' + damage + 'のダメージ。' +
      '<span style="color:#800000; font-weight: bold;">残りのHP= ' + min_HP(MAOU_HP) + '</span>' +
      '<span style="color:#800000; font-weight: bold;"><br />魔王吉村をたおした！</span>';
    area.appendChild(write);
    button.disabled = true;
  }
}

/*=== 攻撃ボタンを押したときの動作 ===*/

/**
 * ・onclickは{}で囲まれた部分しか作用しない。よって表の書き換えや計算させたい部分はすべて{}の中にぶち込む。
 * 
 * ・let attack =8000; というattackの定義があったとする。これは他の場所でattackと使えば、8000という数字を使うことができる。
 * ということは、let attack = require('crypto').randomBytes(8).toString('hex'); という定義があったとすると、
 * attackをほかの場所で使えば同じ数字しか返ってこない。
 * 
 * もし違う数字を使いたければ代入をすればよい。
 * onclick内でもう一度 attack = require('crypto').randomBytes(8).toString('hex'); と代入してやれば乱数は簡単に出来る。
 * 
 * これらを正しく認識できずエラーが出てたと考えられる。
 * 
 * ・createElement関数はただ単にそれを作り出すだけ。例えばdocument.createElement('p') はpタグを作り、
 * innerHTML,innerText はその変数の中のHTML形式の文かText形式の文かという意味。
 * document.createElement('p').innerText はpタグを作って、その中の文という意味になる。=で繋げば文に代入できるということ。
 * あまり深く考えないでやりたいことを一つずつこなす。
 */

