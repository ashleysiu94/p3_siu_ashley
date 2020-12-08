(()=>{"use strict";const n=new class{constructor(n,e){this.title="Lunch Generator",this.logo="../images/logo.png"}}("Header content!");class e{constructor(n,e,t){this.name=n,this.photo=e,this.type=t}changeImage(){document.getElementById("main").addEventListener("click",(()=>{const n=t[Math.floor(Math.random()*t.length)];document.getElementById("main").src=n.photo,document.getElementById("main").alt=n.name,document.getElementById("main").title=n.name,document.getElementById("main-name").innerHTML=n.name}))}}let t=[new e("Bibimbap","../images/bibimbap_main_korean.png","Korean"),new e("Sandwich","../images/sandwich_main_american.png","American"),new e("Tacos","../images/tacos_main_mexican.png","Mexican"),new e("Pasta","../images/pasta_main_italian.png","Italian")];const a=t[Math.floor(Math.random()*t.length)];class i{constructor(n,e,t){this.name=n,this.photo=e,this.type=t}changeImage(){document.getElementById("side").addEventListener("click",(()=>{const n=m[Math.floor(Math.random()*m.length)];document.getElementById("side").src=n.photo,document.getElementById("side").alt=n.name,document.getElementById("side").title=n.name,document.getElementById("side-name").innerHTML=n.name}))}}let m=[new i("Kimchi","../images/kimchi_side_korean.png","Korean"),new i("Salad","../images/salad_side_american.png","American"),new i("Guacamole","../images/guac_side_mexican.png","Mexican"),new i("Minestrone","../images/minestrone_side_italian.png","Italian")];const o=m[Math.floor(Math.random()*m.length)],s=new class{constructor(n,e,t,a,i){this.title="Menu",this.main="Main Course: ",this.side="Side Dish: ",this.drink="Drink: ",this.prompt="Click on the photos to change food items!"}}("Menu Content!"),d=new class{constructor(n,e){this.prompt="Created by ",this.myName="Ashley Siu"}}("Footer Content!");new class{constructor(){this.renderTemplate(),a.changeImage(),o.changeImage()}renderTemplate(){const e=`\n      <header>\n        <div id="header">\n          <h1>${n.title}</h1>\n          <img src="${n.logo}" title="logo" alt="logo">\n        </div>\n      </header>\n\n      <main>\n        <div id="food">\n          <div>\n            <img id="side" src="${o.photo}" alt="${o.name}" title="${o.name}">\n            <img id="drink" src="../images/lemonade_drink_american.png" alt="lemonade" title="lemonade">\n          </div>\n          <img id="main" src="${a.photo}" title="${a.name}" alt="${a.name}">\n        </div>\n        <section>\n          <h2>${s.title}</h2>\n          <hr>\n          <ul>\n            <li>${s.main}<span id="main-name">${a.name}</span></li>\n            <li>${s.side}<span id="side-name">${o.name}</span></li>\n            <li>${s.drink}</li>\n          </ul>\n          <p>${s.prompt}</p>\n        </section>\n      </main>\n\n      <footer>\n        ${d.prompt}\n        ${d.myName}\n      </footer>\n    `;document.body.innerHTML=e}}})();