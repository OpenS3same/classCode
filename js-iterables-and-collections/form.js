// const x = document.forms[0].id;
// console.log(x);
// document.getElementById("show").innerHTML = x;


// Function getInput() {
//   const x = document.forms["form1"];
//   let text = " ";
//   for(let i = 0; i < x, length; i++)
//     text += x.elements[i].value + '<br>'
//   document.getElementById("show").innerHTML = text;
//   };


// function myFunction() {
//   let id = document.getElementById("id").value;
//   let pw = document.getElementById("pass").value;

//   if(pw.length < 1) {
//     document.getElementById('show').innerHTML = "비밀번호를 입력해주세요!"
//   } else if(pw.length > 10) {
//     document.getElementById('show').innerHTML = "비밀번호는 10자리 이하로 입력해주세요"
//   } else {
//     document.getElementById('show').innerHTML = "입력 OK"
//   }
//   ["id", "pass"].forEach(fideld => document.getElementById(field).value="");

//   setTimeout(() => {
//     document.getElementById("show").innerHTML="";
//   }, 2000);
// }



// **** 회원가입 양식 만들기 **** //

const x = document.getElementById("name");
x.onfocus = function() {changeBgcolorFo();}
x.onblur = function() {changeBgcolorBl();}

function changeBgcolorFo(){
  x.style.backgroundColor = "pink"
}
function changeBgcolorBl(){
  x.style.backgroundColor = "gray"
}

const keyInput = document.getElementById("keyInput");
// let text = "";

// keyInput.addEventListener("keydown", showKey); //이벤트함수는 나중에 입력..
// function showKey(){
//   text += e.key;
//   document.getElementById("show").innerHTML = text;
// } //<p id="show"></p>


keyInput.addEventListener("keyup", changeUpper); //대문자로 입력된다
function changeUpper() {
  keyInput.value = keyInput.value.toUpperCase();
}

//셀렉트
const selectFruits = document.getElementById("selectFru");
selectFruits.addEventListener('change', (e) =>{
  document.getElementById("show").innerHTML = "내가 좋아하는 과일은" + e.target.value + "입니다."
})