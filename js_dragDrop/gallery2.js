let slides = document.querySelectorAll("#container > img") //container 안에 있는 이미지 불러옴
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let current = 0;

showSlide(current);

prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide(n){
  for(let i = 0; 1 < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[n].classList.add("active");
} // 매개변수

//이전페이지: 슬라이드가 첫번째가 아닐경우 -1 , 첫번째라면 마지막으로 갈수있도록
//다음페이지: 현재이미지가 마지막이 아니면 +로 가게하고 

//클릭하면 이벤트발생하게 함(아래)
function prevSlide() {
  if(current > 0){ //현재가 0보다 큰 경우
    current =- 1;
  } else { //그렇지 않으면 현재이미지가 첫번쨰라는 것
    current = slides.length -1;
  }
  showSlide(current); //현재이미지 보여줌
}

//반대의 경우(아래)
function nextSlide() {
  console.log("1")
  if(current < slides.length -1) {
    current += 1 
  } else {
    current = 0; //마지막이라는 뜻
  }
  showSlide[current];
}