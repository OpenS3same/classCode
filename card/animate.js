const box = document.querySelector('.box');
const animationBtn = document.querySelector('.animationBtn')
const title = document.querySelector('.title')
const character = document.querySelector('.character')

function moveBox() {
  gsap.to(box, 1, {left:'1000px'}); //차례: 움직이고 싶은요소 , 시간, 속성
  gsap.to(title, 1, {opacity: 1});

  gsap.fromTo(character, {x: 700, y: 70, opacity: 0}) , {x: 400, y: 200, scale:3, duration: 2, opacity: 1}
}

animationBtn.addEventListener('click', moveBox);

gsap.set(title, {opacity: 0});

gsap.to('.target h1', { //움직이고 싶은 요소
 scrollTrigger:{
  trigger: ".target",
  start: "0% 0%",
  end: "100% 10%",
  markers: true,
  scrub:1,
 },
 scale: 2,
 rotation: 100
  
})