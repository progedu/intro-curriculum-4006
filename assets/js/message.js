//ダイアログの表示
'use strict';
function Message(str,element) {
  if(confirm(str)){
    element.innerHTML = `<p><img src="https://www.homepage-tukurikata.com/image/lion.jpg" alt="ライオンです" title="ライオンです"></p>`;
  }
  else
    element.innerHTML = `<p><img src="https://cdn.nnn.ed.nico/images/icons/icon-user-c-red.png" alt="ユーザアイコンです" title="ユーザアイコンです"></p>`;

  return element.innerHTML;
}

module.exports = {
  Message
};