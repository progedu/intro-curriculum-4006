'use strict';
import dc from 'damage-calc';
import cp from 'crypto';
const root = document.getElementById('root');
const roots = document.getElementsByClassName('roots');
const a = [100, 50, 30];

root.innerHTML =
`攻撃力 ${a[0]}, 防御 ${a[1]}, 防御貫通 ${a[2]} のダメージは、${dc.effectiveDamage(a[0], a[1], a[2])}<br>
${cp.randomBytes(8).toString('hex')}`;
roots[0].innerHTML = `${dc.effectiveDamage(a[0], a[1], a[2])}`;
roots[1].innerHTML = `①${cp.randomBytes(8).toString('hex')}`;
roots[2].innerHTML = `②${cp.randomBytes(8).toString('hex').slice(0, 6)}`;
roots[3].innerHTML = `③${parseInt(cp.randomBytes(8).toString('hex'), 16)}`;
roots[4].innerHTML = `④${parseInt(cp.randomBytes(8).toString('hex').slice(0, 6), 16)}`;
roots[5].innerHTML = `⑤${parseInt(cp.randomBytes(8).toString('hex'), 16).toString().slice(0, 6)}`;