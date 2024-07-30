//순회 할수 있는 객체
//배열, 문자열, Set, Map
// for...of 문을 사용할 수 있다
// 스프레드 오퍼레이터(확산 연산자)를 사용하여 배열을 초기화 할수 있따
//   가변인수를 갖는 함수를 호출 할때 인수로 전달할 수 있다

//이터레이터
//이터레이션 결과를 반환하는 next() 매서드를 갖는 객체
// 이터레이션 결과는 done, value 속성을 갖는 객체


// let arr = [1, 2, 3, 4, 5];
// let iterator = arr[Symbol.iterator]();

// console.log(iterator);
// let result = iterator.next(); //콘솔에서 확인했던 프로토타입 사용 해봄 
// console.log(result);

// while(!result.done){
//   console.log(result.value);
//   result = iterator.next();
// }


// //이터레이터로 초기화 가능
// let copy = [...iterator];
// console.log(copy);

//위 내용 다시 확인
// ---------------

// class Sequence {
//   constructor(from = 0, to = Infinity, interval = 1) {
//     this.from = from;
//     this.to = to;
//     this.interval = interval;
//   }
//   [Symbol.iterator]() {
//     let next = this.from;
//     return {
//       next: () => {
//         if(next <= this.to){
//           let result = {value: next, done: false};
//           next += this.interval;
//           return result;
//         }
//         return{value: undefined, done: true};
//       }
//     }
//   }
// } //클래스 작성


// let evenNumbers = new Sequence(2, 10, 2);
// let iterator = evenNumbers[Symbol.iterator]() //Symbol.iterator 호출
// let result = iterator.next();
// console.log(result);

// while(!result.done){ //result가 done이 아니면
//   console.log(result.value);
//   result = iterator.next();
// }

// for(let num of evenNumbers)
//   console.log(num);

// for(let num of evenNumbers)
// console.log(num); 
//여기에 아래와 같이 다른것도 써봄
// for (let num of evenNumbers){
// if(num > 7)
//break;
//console.log(num);
//}



// 어떤 연산의 결과로 생성된 값을 순회할때 유용하다 
//function * 예약어로 정의된다. 

function* generate() {
  console.log("제너레이터 실행");
  console.log("1생성");
  yield 1;
  console.log("2생성");
  yield 2;
  console.log("3생성");
  yield 3;
}
let gen = generate(); //함수 호출
let result = gen.next();
result = gen.next();
// result = gen.next(); //3까지 생성해줌
// console.log(gen);

// while(!result.done){
//   console.log(result.value);
//   result = gen.next();
// }

// for(let ge of gen)
//   console.log(gen);


// let iterator = gen[Symbol.iterator]();
// console.log(iterator);
function* sequence(from = 0, to = Infinity, interval = 1){ //제너레이터함수 실행
let next = from;
while(next <= to){
  yield next;
  next += interval;
  }
};
let evenSeq = sequence (2, 10, 2);
for(let seq of evenSeq)
  console.log(seq)

