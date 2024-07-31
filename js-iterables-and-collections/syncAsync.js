// 동기: 프로그래밍은 코드를 순차적으로 실행(앞선 작업이 완료되지 않으면 뒤에 모든작업이 이루어지지 않음)
// 비동기: 앞뒤 상관없이 코드를 실행
// 콜백함수, 프로미스, async, await 로 비동기식 코드를 작성할 수 있다 

// function callback() {
//   console.log("콜백함수가 호출됨");
// }
// setTimeout(callback, 1000);
// console.log("작업을 수행함");


// function getUsers(callback){
//   let users = [];
//   setTimeout(() => {
//     const users = [
//       {name:"Kim", email: "kim@gmail.com"},
//       {name:"Lee", email: "lee@gmail.com"},
//       {name:"Park", email: "park@gmail.com"}
//     ];
//     callback(users);
//   })
// }
// function findUser(name, callback) {
//   getUsers (users => {
//     const user = users.find(user => user.name === name);
//     callback(user, email);
//   });
//   // const users = getUsers(); //받아놓은 유저
//   // const user = users.find(user => user.name === name); //유저를 찾음
//   // return user;
// }
// let user= findUser("Kim", user => {
//   console.log(user);
// });




//이벤트 핸들러로서 콜백함수

let greeting = document.querySelector('#greeting');
greeting.addEventListener("click", sayHello );
function sayHello() {
  alert("안녕하세요.");
}















