!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t){for(var n=JSON.parse(localStorage.getItem("books")||"[]"),r=0;r<n.length;r++){var o=document.createElement("Item");o.setAttribute("class","Item");var i=document.createElement("imgBlock");i.setAttribute("class","imgBlock");var u=document.createElement("img");u.setAttribute("src",n[r].BookImg[0]),i.appendChild(u);var a=document.createElement("infomation");a.setAttribute("class","infomation"),a.innerHTML+="Название: "+n[r].BookName+"<br>",a.innerHTML+="Автор: "+n[r].BookAuthor+"<br>",a.innerHTML+="Издательство: "+n[r].PublishingHouse+"<br>",a.innerHTML+="Год издания: "+n[r].DataPublication+"<br>",a.innerHTML+="Адрес издательства: "+n[r].Addres+"<br>",a.innerHTML+="Телефон издательства: "+n[r].Phone+"<br>",a.innerHTML+="Категория: "+n[r].BookHeading+"<br>";var l=document.createElement("button");l.setAttribute("onclick","dleteItem("+r+")"),l.setAttribute("class","delBtn"),l.innerHTML="Удалить";var c=document.createElement("button");c.setAttribute("onclick","editeItem("+r+")"),c.setAttribute("class","editeBtn"),c.innerHTML="Редактировать",o.appendChild(i),o.appendChild(a),o.appendChild(l),o.appendChild(c),document.getElementById("content").appendChild(o)}}]);