'use strict';
import dc from 'damage-calc';
import crypto from 'crypto';

//..で上の階層をみてもらう
const time = require('../assets/js/time');
const message = require('../assets/js/message');

const rootElement = document.getElementById('root');
const imageElement = document.getElementById('image');
const now = time.GetTime();
//htmlのdiv#rootなら実行される
rootElement.innerHTML = `<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、${dc.effectiveDamage(100,50,30)}</p><p>
乱数は${crypto.randomBytes(8).toString('hex')}です</p><p>
現在時刻は${now.Year}年${now.Month}月${now.Date}日(${now.Day})
${now.Hours}時${now.Minutes}分${now.Seconds}秒です</p><p>`;

imageElement.innerHTML = message.Message(`黄色でいいですか?`,message);