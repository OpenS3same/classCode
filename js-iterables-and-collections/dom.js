// let div = document.querySelector("div");
// console.log(div);
// function changeContent() {

//   div.outerHTML = "<h1>DOM API</h1><p>선수 조건: 없음</p>"
// }

// const ele = document.getElementById('banana');
// ele.style.color = 'red';

// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele => {ele.style.color = 'red'});

// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach(elem => {elem.style.color = 'red'});

// const apple = document.getElementsByClassName('fruit apple');
// [...apple].forEach(elem => {elem.style.color = 'blue'});

// const boxEl = document.querySelector('.box');
// boxEl.addEventListener('click', function() { //이벤트의 이름 
//   console.log('Click!')

//   // if(boxEl.classList.contains('active')){
//   //     boxEl.classList.remove('active');
//   // } else {
//   //   boxEl.classList.add('active') //없으면 더해줘
//   // }

//   // boxEl.classList.toggle('active')

//   const boxEls = document.querySelectorAll('.box');
//   boxEls.forEach(function (boxEl, index){
//     boxEl.classList.add(`order-${index + 1}`);
//   })

// })

// const div = document.getElementById('my_div');
// const clearbtn = document.getElementById('clearbtn')
// const result = document.getElementById('result');

// div.addEventListener('click', (event) => {
//   result.innerHTML+='<div>click</div>';
// });
// div.addEventListener('mousedown', (event) => {
//   result.innerHTML+='<div>mousedown</div>';
// });
// div.addEventListener('mouseup', (event) => {
//   result.innerHTML+='<div>mouseup</div>';
// });
// clearbtn.addEventListener('click', (event) => {
//   result.innerHTML+="";
// })
// // *** event handler attributes *** //
// function sayHi(name) {
//   console.log(`Hi ${name}`)
// }

// const button = document.querySelector('button')
// button.onclick = function() {
//   console.log('button clicked 1')
// }
// button.onclick = function() {
//   console.log('button clicked 2')
// } // 하나의 이벤트에 하나의 핸들러 바인딩



// button.addEventListener('click', function() {
//   console.log('button clicked 1');
// })

// button.addEventListener('click', function() {
//   console.log('button clicked 2');
// })

// const button = document.querySelector('button');
// const handleClick = () => console.log('button click')
// button.addEventListener('click', handleClick);

// button.removeEventListener('click', handleClick);

// const button = document.querySelector('button');

// button.addEventListener('click', function add() {
//   console.log('click!')
//   button.removeEventListener('click', add);
// });


// const button = document.querySelector('button');
// const handleClick = () => console.log('button click')

// button.onclick = handleClick;
// //프로퍼티 방식으로 하면 remove를 해도 영향 x
// button.removeEventListener('click', handleClick);
// button.onclick = null; 


// const msg = document.querySelector('.message');

// function showCoords(e){
//   msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`
// }
// document.onclick = showCoords; 
//내가 마우스로 찍는 좌표점이 나타남


// const fruits = document.getElementById('fruits');
// function activate ({target}) {
//   [...fruits.children].forEach(fruit => {
//     fruit.classList.toggle('active', fruit === target)
//   })
// }
// document.getElementById('apple').onclick = activate;
// document.getElementById('banana').onclick = activate;
// document.getElementById('cherry').onclick = activate;

//아래 코드와 같이 한번에 해결!
 
// const fruits = document.getElementById('fruits');
// function activate ({target}) {
//   if(!target.matches('#fruits > li')) return;
//   [...fruits.children].forEach(fruit => {
//     fruit.classList.toggle('active', fruit === target)
//   })
// }
// fruits.onclick = activate;



// // *** task checked 예제 ***
// const buttons = document.querySelectorAll(".check");
// buttons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     button.classList.toggle('active');
//   })
// })

const box = document.querySelector(".box");
const initialMousePos = {x: 0, y: 0};
//이동이 됐을때 위치값 저장을 하고 이동했을때 얼마나 이동했는지 (아래)
const offset = {x: 0, y: 0};

const move = e => {
  offset.x = e.clientX - initialMousePos.x;
  offset.y = e.clientY - initialMousePos.y;
  box.style.transform = `translate3d(${offset.x})px, ${offset.y}px, 0`
};
// //박스이벤트 리스너
// box.addEventListener('mousedown', e => {
//   initialMousePos.x = e.clientX - offset.x;//있는자리를 initialMousePos 에 넣어줌
//   initialMousePos.y = e.clientY - offset.y;

//   //마우스 뗐을때
//   document.addEventListener('mousemove', move);
// });

// document.addEventListener('mouseup', () => {
//   document.removeEventListener('mousemove', move);
// })


// document.addEventListener('click', e => {

//   const newX = e.clientX
//   const newY = e.clientY
  
//   const boxWidth = box.offsetWidth;
//   const boxHeight = box.offsetHeight;

//   offset.x = newX;
//   offset.y = newY;
//   box.style.transform = `translate3d(${offset.x})px, ${offset.y}px, 0`;
// })


document.addEventListener('click', e => {
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;

  const newX = e.clientX - boxWidth /2;
  const newY = e.clientY - boxHeight /2;


  offset.x = newX;
  offset.y = newY;
  box.style.transform = `translate3d(${offset.x})px, ${offset.y}px, 0`;
})
