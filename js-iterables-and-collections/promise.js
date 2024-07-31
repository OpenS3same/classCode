//비동기식 처리가 많아질수록 코드가 복잡해지고 이해하기 어려워진다. 콜백지옥 -> 코드가 지저분해짐, 그래서 비동기 프로그래밍을 단순하게 하기위해 등장한 것

//promise
//비동기 연산의 결과를 표현하는 객체 ( 최종 성공 또는 실패를 나타냄 )
// 작업중(pending), 완료됨(fulfilled), 거부됨(rejected)
//promise() 생성자 함수는 비동기 연산을 수행하는 콜백함수를 인수로 받아들인다.


// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => { //시뮬레이션을 위해 setTimeout 이용
//       resolve( //resolve를 열어서 콜백함수로 쓰임
//         [
//           {name:"Kim", email: "kim@gmail.com"},
//           {name:"Lee", email: "lee@gmail.com"},
//           {name:"Park", email: "park@gmail.com"}
//         ]
//       )
//     }, 1000);
//   })
// }
// let promise = getUser(); //promise를 이용해 getUser호출을 해줌 
// promise.then(users => console.log(users)); //then 메소드 이용으로 반환하는 값을 구할 수 있음

// let success = false;
// function getUser() {
//   return new Promise((resolve, reject) => {
//     if(success){
//       setTimeout(() => { 
//       resolve( 
//         [
//           {name:"Kim", email: "kim@gmail.com"},
//           {name:"Lee", email: "lee@gmail.com"},
//           {name:"Park", email: "park@gmail.com"}
//         ]
//       )
//     }, 1000);
//     } else {
//       reject("실패");
//     }  
//   })
// }
// let promise = getUser(); //promise를 이용해 getUser호출을 해줌 
// promise.then(users => console.log(users), error => console.log(error)); //then 메소드 이용으로 반환하는 값을 구할 수 있음
// //=> 실패가 뜸, let success = false; 를 true로 바꾸면 성공내용이 뜸


//값을 반환하는 then
//then(), catch() - 를 함께 사용가능, 완료됨과 거부됨 상태일때 모두 처리해야 하는 콜백함수를 실행할수 있음

// let success = true;
// function getUser() {
//   return new Promise((resolve, reject) => {
//     if(success){
//       setTimeout(() => { 
//       resolve( 
//         [
//           {name:"Kim", email: "kim@gmail.com"},
//           {name:"Lee", email: "lee@gmail.com"},
//           {name:"Park", email: "park@gmail.com"}
//         ]
//       )
//     }, 1000);
//     } else {
//       reject("실패");
//     }  
//   })
// }
// let promise = getUser(); 
// promise.then(users => 
//   console.log(users))
//   .catch(error => console.log(error))
//   .finally(() => console.log("작업완료"))



  //then() 메소드는 체인으로 연결 가능

//   let success = true;
// function getUser() {
//   return new Promise((resolve, reject) => {
  //   if(success){
  //     setTimeout(() => { 
  //     resolve( 
  //       [
  //         {name:"Kim", email: "kim@gmail.com"},
  //         {name:"Lee", email: "lee@gmail.com"},
  //         {name:"Park", email: "park@gmail.com"}
  //       ]
  //     )
  //   }, 1000);
  //   } else {
  //     reject("실패");
  //   }  
  // })
// }
// let promise = getUser(); 
// promise
//    .then(users => users.find(user => user.name === "Kim"))
//    .then(user => console.log(user.email))
//    .catch(error => console.log(error))
//    .finally(() => console.log("작업완료"))



//병렬 Promise
//여러 비동기 연산을 병렬로 동시에수행

// const p1 = new Promise ((resolve, reject) => setTimeout(() => resolve(10),2000));
// const p2 = new Promise ((resolve, reject) => setTimeout(() => resolve(20),1000));
// const p3 = new Promise ((resolve, reject) => setTimeout(() => resolve(30),3000));
// let promises = [p1, p2, p3];

// Promise.all(promises)
// .then(results => { //then 을 이용하여 결과확인!
//   const total = results.reduce((s, r) => s + r); //total 을 이용하여 합계를 만들어줌 
//   console.log(`결과: ${results}`);
//   console.log(`합계: ${total}`)
// })


// const p1 = new Promise ((resolve, reject) => setTimeout(() => resolve(10),2000));
// const p2 = new Promise ((resolve, reject) => setTimeout(() => resolve(20),1000));
// const p3 = new Promise ((resolve, reject) => setTimeout(() => reject(30),3000));
// let promises = [p1, p2, p3];

// Promise.all(promises)
// .then(results => { //then 을 이용하여 결과확인!
//   const total = results.reduce((s, r) => s + r); //total 을 이용하여 합계를 만들어줌 
//   console.log(`결과: ${results}`);
//   console.log(`합계: ${total}`)
// }) 

//위와 같이 하나가 실패함이 있기때문에 실패를 하면 promise.all()메소드 또한 결과를 내지 않는다 / 하나라도 실패하면 안된다. 

// .allSettled 실행을 완료하기를 기다렸다가 객체를 반환 (성공 실패 상관없이 결과를 나오게 한다)


// const p1 = new Promise ((resolve, reject) => setTimeout(() => resolve(10),2000));
// const p2 = new Promise ((resolve, reject) => setTimeout(() => resolve(20),1000));
// const p3 = new Promise ((resolve, reject) => setTimeout(() => reject(30),3000));
// let promises = [p1, p2, p3];

// Promise.allSettled(promises)
// .then(results => { 
//   const fulfilledResults = results.filter(result => result.status === "fulfilled")
//   .map(result => result.value);
//   const total = fulfilledResults.reduce((sum, value) => sum + value, 0); 
//   console.log(`결과: ${fulfilledResults}`);
//   console.log(`합계: ${total}`)
// }) 
//하나라도 실패할 가능성이 있을때는 all 보다는 fulfilled 를 사용 



// *** 순차 promise ***//
//then 메서드 체인을 이용해 비동기 연산을 수행하는 함수를 순차적으로 실행할수 있음
// function getUser(){
//   return new Promise ((resolve, reject) => {
//     setTimeout(() => { 
//     resolve( 
//       [
//         {name:"Kim", email: "kim@gmail.com"},
//         {name:"Lee", email: "lee@gmail.com"},
//         {name:"Park", email: "park@gmail.com"}
//       ]
//     )
//   }, 2000);
// });
// };
// function findUser(users) { //매개변수로 users가 들어간다
//   return new Promise((resolve, reject) => {
//     console.log(users); //잘되는지 확인하기 위해 넣어줌
//     setTimeout(() => {
//       resolve(users,find(user => user.name ==="Kim"))
//     } ,1000);
//   })
// }
// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     console.log(user); //잘되는지 확인하기 위해 넣어줌
//     setTimeout(() => {
//       resolve(user.email)
//     }, 3000)
//   })
// }

// getUser()
// .then(findUser)
// .then(getEmail)
// .then(console.log)




//Promise.race() 는 이터러블에 포함된 프로미스들 중 가장 먼저 성공 또는 실패한 결과를 반환



// *** 예제 1초 후에 "A" 를, 2초 후에 "B" 를 반환하는 두 개의 promise를 생성하고, 두 promise 가 모두 완료된 후에 "완료!" 를 출력하세요 *** //

  // const promiseA = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("A완료");
  //   }, 1000);
  // }); // A생성

  // const promiseB = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("B완료");
  //   }, 2000)
  // }); //B생성

  // let promises = [promiseA, promiseB];
  // Promise.all(promises).then((results) => {
  //   console.log("완료", results);
  // })

  //promise 는 비동기작업에 최종 resolve, reject 성공 실패 결과를 나타내는 객체 
  //가독성을 위해 사용 


//  *** 예제 *** //
//1초 후에 숫자 5를 반환하는 Promise와 1.5초 후에 그 숫자에 10을 곱한 값을 반환하는
//Promise를 작성하세요. 만약 5를 반환하는 Promise 가 실패하면 "에러!" 를 출력하세요

// let success = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(success) {
//       resolve(5);
//     }else{
//       reject("에러!")
//     }
//   }, 1000);
// });

// promise.then(

//   num => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(num * 10)
//       }, 1500);
//     })
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   })



// ******* async 와 await ******* //

// function sayHello() {
//   return "안녕"
// }
// sayHello()
// .then(console.log);

// async function sayHello() {
//   return "안녕"
// }
// sayHello()
// .then(console.log);

// let sayHello = async function () {
//   return "안녕"
// }
// sayHello()
// .then(console.log);


// let sayHello = async () => "안녕"
// sayHello()
// .then(console.log);


// class Greeter {
//   async sayHello() {
//     return '안녕'
//   }
// }
// const greeter = new Greeter();
// greeter.sayHello()
// .then(console.log)


// async function sayHello() {
//   return Promise.resolve("안녕")
// }
// sayHello()
// .then(console.log);


// async function sayHello() {
//   return Promise.resolve("안녕")
// }
// sayHello()
// .then(console.log);



// async function sayHello() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("안녕"))
//   })
// }
// sayHello()
// .then(console.log)



// async function sayHello() {
//   return new Promise((resolve, rejeect) => {
//     setTimeout(() => resolve("안녕"), 3000);
//   })
// }
// async function display() {
//   let result = sayHello();
//   console.log(result);
// }
// display();

// async function sayHello() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("안녕"), 3000);
//   })
// }
// async function display() {
//   try {let result = sayHello();
//     console.log(result);
//   }catch(e){
//     console.log(e); // 에러 나올수 있도록 해줌
//   }
  
// }
// display();



// *** 순차적 promise처럼 만들기 *** //
// function getUser(){
//   return new Promise ((resolve, reject) => {
//     setTimeout(() => { 
//     resolve( 
//       [
//         {name:"Kim", email: "kim@gmail.com"},
//         {name:"Lee", email: "lee@gmail.com"},
//         {name:"Park", email: "park@gmail.com"}
//       ]
//     )
//   }, 2000);
// });
// };
// function findUser(users, name){
//   return new Promise ((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(users.find(user => user.name === name)) //우선 보류 
//     }, 1000)
//   })
// }
// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(user.email);
//     }, 3000)
//   })
// }
// async function getUserEmail(name) {
//   let users = await getUser(); //호출
//   let user = await findUser(users, name);
//   let email = await getEmail(user) 
//   return email; //이렇게 최종적으로 우리가 구하고 싶은 유저의 이메일값을 가지고 오게 된다
// }

// async function displayUserEmail() {
//   let email = await getUserEmail('Kim'); //kim 의 이메일을 찾아주기
//   console.log(email);
// } //async 를 써야 await 에 빨간줄이 안생김 async안에서 사용할수있는 await

// displayUserEmail(); // 이제 여기서 async await 가 필요 / 이제 순서만 정하면 된다




// *** 제너레이터와 프로미스 *** //
// 별이 붙어있고 yield 가 있으면 이것은 제너레이터이다!

// const myPromise = () => new Promise((resolve) => {
//   resolve("value is");
// });

// function* gen() {
//   let result = ""; //우선 result = ""; 으로 처리
//   yield myPromise().then(data => {result = data});
//   yield result + '1';
// }

// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1);

// val1.value.then(() => {
//   console.log(asyncFunc.next());
// })


// async function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout){

// let next = from;
// while(next <= to){
//   yield new Promise((resolve, reject) => {
//     setTimeout(() => resolve(next), timeout);
//     next += interval; //이것으로 인해 4부터 시작
//   })
// }
// }
// (async() => {
//   let seq = asyncSequence(2, 10, 2);
//   for await (let value of seq)
//   console.log(value);
// })(); 
//// ** 결과값이 4부터 시작한다. next += interval;

// 예제))
// *** 제너레이터를 사용하여 여러 비동기 작업을 순차적으로 실행하는 함수를 작성하세요. 각 작업은 2초 후에 완료된다고 가정하고, 작업이 완료될 때마다 그 결과를출력해야 합니다. 제너레이터는 작업이 완료될때마다 다음 작업을 실행해야 합니다. *** //

function taskGenerator(){
  yield new Promise((resolve, reject) => setTimeout(() => resolve('1완료'), 2000));
  yield new Promise((resolve, reject) => setTimeout(() => resolve('2완료'), 2000));
  yield new Promise((resolve, reject) => setTimeout(() => resolve('3완료'), 2000));
}

const taskDisplay = async () => { //async 는 화살표함수 앞에 쓴다.
  const tasks = taskGenerator(); //호출을 해준다
  for (let task of tasks) {
    const result = await task; //taskGenerator 에 있는 하나하나
    console.log(result);
  }
}
taskDisplay();





// ***예제*** //
// 사용자 정보를 가져오는 비동기함수를 작성하고, 이를 async/await를 사용하여 호출하시오
const users = {
  1: {name:'Kim', age: 25},
  2: {name:'Lee', age: 30},
  3: {name:'Jung', age: 35}
};


function UserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: {name:'A', age: 25},
        2: {name:'B', age: 30},
        3: {name:'C', age: 28}
      }
      const user = users[userId];
      if(user){
        resolve(user);
      } else {
        reject("사용자를 찾을 수 없습니다.")
      }
    }, 1000);
    })
  }

  async function getUser(userId) {
     try { //에러 처리
      const userDataGet = await userData(userId);  //이 안에서 userData 호출
      console.log(`${userDataGet.name}, ${userDataGet.age}`);
     } catch(error) {
      console.error(error);
     }
     
  }
getUser(1);


