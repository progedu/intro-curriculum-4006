'use strict';
import dc from 'damage-calc';
import crypto from 'crypto';
// Reactに必要なものをインポート
import React from 'react';
import ReactDOM from 'react-dom';

const displayDamage = document.getElementById('damage');
displayDamage.innerHTML =
  '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' +
  dc.effectiveDamage(100, 50, 30) +
  '</p>';
// 練習問題部分
const displayCrypto = document.getElementById('crypto');
displayCrypto.innerHTML =
  `<p>${crypto.randomBytes(8).toString('hex')}</p>`;

// ReactでHelloWorld
const Greet = () => {
  return (
  <div>
    <h1>Hello world!</h1>
  </div>
  );
}

ReactDOM.render(
  <Greet />,
  document.getElementById('react')
);