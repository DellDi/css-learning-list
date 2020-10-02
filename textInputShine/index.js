const text = document.getElementById('text');

let shadow = "";
// 循环阴影值

for(let i = 0; i< 20; i++) {
  shadow += `${(shadow ? ',' : '')}${i*1}px ${i*1}px 0 #01ded3`
}

text.style.textShadow = shadow;