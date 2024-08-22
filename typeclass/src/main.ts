// const add = function(a,b) { //any타입은 웬만하면 사용하면 안된다
//   return a + b
// }

// const add = function(a: number, b: number): number { //뒤에 : number 까지 붙여줘야 완벽하게 타입이 됨
//   return a + b
// }
// function add2(a: number, b: number): number { 
//   return a + b
// }
// const result1 = add2(1, 2);

//** const 와 let 추론 비교
// const str = 'hello'
// const num = 123;
// const bool = false;
// const n = null;
// const u = undefined;
// const sym = Symbol('sym');
// const obj = {hello: 'world'}


// let str = 'hello'
// let num = 123;
// let bool = false;
// let n = null;
// let u = undefined;
// let sym = Symbol('sym');
// let obj = {hello: 'world'}
//let은 넓게 추론하므로
//변수에 대입할때(let n = null; 와
// let u = undefined;) any 로 추론한다는 것을 주의 깊게 볼것



// //**리터럴타입은 값 자체가 타입이다 */
// let str: 'hello' = 'hello';
// str = 'world' //에러가 뜸


// const obj = {name: 'kim'};
// const arr = [1, 2, 'three'];

// const obj = {name: 'kim'} as const;
// const arr = [1, 2, 'three'] as const;

// obj.name = 'lee'
//읽기전용 속성이므로 name에 할당 할수없음

// const obj = {name: 'kim'};
// const arr = [1, 2, 'three'] as const;

// obj.name = 'lee'

// const obj = {name: 'kim'};
// const arr = [1, 2, 'three'];

// obj.name = 'lee'
// arr.push(4);

// // const arr1: string = ['1', '2', '3']
// const arr1 = ['1', '2', '3']
// const arr2: Array<number> = [1, 2, 3]

// const arr3 = [1, '3', 3];
// const arr4= []; //any로뜸 타입을 제대로 지정해줘야한다



// const tuple = [number, boolean, string] = [1, true, 'hello'];
// tuple[0] = 3;
// tuple[2] 'world';
// tuple.push('hello');
// console.log(tuple);


// // const strNumBools = ['hello', 1, false, true, false]
// const strNumBools : ['hello', number, ...boolean[]] = ['hello', 1, false, true, false]

// const[a, ...rest] = ['hello', 1, 2, 3];
// const[b, ...rest2]: [string, ...number[]] = ['hello', 1, 2, 3];

// function add(x: number,  y: number) { //매개변수로 나오므로 항상 타입을 지정해줘야한다 / 내장객체 타입은 Number 가 아닌 소문자 사용.
//   return x + y;
// }
// const str1: String = 'hello'
// const str2: String = str1


// function add(x:number, y:number){return x + y}
// // const result1: add(1, 2) = add(1, 2);
// // const result2: typeof add(1, 2) = add(1, 2);
// const add2: typeof add = (x: number, y: number) => x + y



//** 유니언타입
// let strNum: string | number = 'hello';
// strNum = 1;
// const arr = [1, '2', 3]

// function unionType(value) { //매개변수는 NA가 포함
//   return parseInt(value);
// }

// function unionType(value: string | number):number { 
//   return parseInt(value);
// }
// unionType(1);
// unionType('1');

// function unionType(value: string | number):number { 
//   if(typeof value === 'string'){ //value가 string과 일치한다면
//     return parseInt(value);
//   }
//   return value; // 해당안된 number
// }
// unionType(1);
// unionType('1');


// any: 타입스크립트에서 지양해야 할 타입

// const arr: string[] = []

// const arr = [];
// arr.push('1');
// arr;
// arr.push(3);
// arr;

// const a: any = '123';

// const any1 = a + 1;
// const any2 = a - 1;
// const any3 = a * 1;
// const any4 = a + '1';
// const any5 = a / 1;


// fetch('url').then((response) => { //결과에 해당되는 부분을 then 함수 이용
//   return response.json();
// }).then((result) => {

// })
// const result = JSON.parse('{"hello": "json"}')

// fetch('url').then< {data: string} > ((response) => { //결과에 해당되는 부분을 then 함수 이용 / < {data} > 에 빨간줄이 안나오게하기 위해 : string을 붙여준것, any 가 있는것은 다 없애줌
//   return response.json();
// }).then((result) => {

// })
// // const result = JSON.parse('{"hello": "json"}')
// const result: {hello: string} = JSON.parse('{"hello": "json"}')



// // 트라이캐치문

// try {
// // }catch(e) {
// //   console.log(e.message);
// // }
// }catch(e) {
//   const error = e as Error; //개발자가 타입에러라고 말해주는 것
//   console.log(error.message);
// }





// {}, object
const str:{} = "hello";



// *** never - 어떠한 타입도 대입할 수 없다
// function func1() {
//   throw new Error('error');
// }
// const result1: never = func1();
// const func2 = () => {
//   throw new Error('error');
// }
// const results = func2();
// const infinite = () => {
//   while(true) {
//     console.log('반복');
//   }
// }
// function infinity() {
//   while(true) {
//     console.log('반복')
//   }
// }
// // 무한반복 - void 반환
// // 함수선언문 - never 반환

// function strNum(param: string | number) {
//   if(typeof param === "number") {
//   }else {
//     param;
//   }}



// *** 타입 별칭 type alias
// 별칭을 사용하여 분리 -> 재사용 가능
// type Person = {
//   name: string,
//   age: number,
//   married: boolean
// }
// const person1 = { //타입 person 이 들어간다
//   name: 'kim',
//   age: 28,
//   married: false
// }
// // 타입을 지정을 해놓고 person2 에 넣어줌 


// ** 인터페이스 - page40
// interface Person {
//   name: string,
//   age: number,
//   married: boolean
// }
//인터페이스를 타입으로 지정을 해준다
// const person1: Person = {
//   name: 'kim',
//   age: 28,
//   married: false,
// }

// interface Func {
//   (x: number, y: number): number
// }
// const add: Func = (x, y) => x + y

// interface Arr{
//   length: number,
//   [key: number]: string;
// }
// const arr: Arr = ['1', '2', '3']


// const obj = {}
// obj[123] = '숫자 키';

// interface NoProp{}
// const obj2 = {
//   txt: '에러 안남',
// }
// const result: NoProp = "안녕"
// const results2: NoProp = undefined

////////////////////////////////
// interface Animal{
//   name: string;
// }
// interface Animal {
//   honey: boolean;
// }
// const bear1 = {
//   name: 'bear',
//   honey: true
// } //위에 타입 지정을해주면

// const bear1: Animal = {
//   name: 'bear',
//   honey: true
// }
////////////////////////////////////////

// type Animal = {
//   name: string;
// }
// type Bear = Animal& {
//   honey: boolean;
// }

// const bear1: Animal = {
//     name: 'bear',
//     honey: true
// }

// interface Animal {
//   name: string;
// }
// interface Bear Animal& {
//   honey: boolean;
// }

// const bear1: Animal = {
//     name: 'bear',
//     honey: true
// }

////////////////////////////////////////



// type Animal = {
//   name: string;
// }
// interface Bear extends Animal {
//   honey: boolean;
// }

// type Name = Bear['name'];

// const bear1:Bear = {
//     name: 'bear',
//     honey: true
// }


// type Animal = {
//   name: string;
// }
// interface Bear extends Animal {
//   honey: boolean;
// }
// interface Tiger extends Animal {
//   stripe: boolean;
// }

// interface BearTiger extends Bear, Tiger{}

// type hoeny = BearTiger['honey'];
// type stripe = BearTiger['stripe'];

// const bear1:Bear = {
//     name: 'bear',
//     honey: true
// }


// // 상속 시 부모 속성의 타입을 변경 할 수 있음

// interface Merge{
//   one: string;
//   two: string;
// }
// interface Merge2 extends Merge {
//   one: 'h' | 'w';
//   two: '123';
// }


// //Name 이라는 타입별칭을 만들어 문자열 타입을 나타내도록 하세요. 그리고 이 타입 별칭을 사용하여 fistName 과 lastName 변수를 선언하세요

// type Name = string;

// let firstName: Name = "Jiyoung";
// let lastName: Name = "Han";

// //두개의 숫자를 받아 숫자를 반환하는 함수 타입을 정의하고, 이를MathO이라는 타입 별칭으로 저장하세요. 이 타입 별칭을 사용하여 add 함수와 multiply 함수를 선언하세요
// type MathO = (a: number, b: number) => number; //타입이 만들어짐

// const add:MathO = (x, y) => x + y;
// const multiply:MathO = (x, y) => x + y

// // const add: MathO = (a, b) => {
// //     return a + b;
// // };

// // const multiply: MathO = (a, b) => {
// //     return a * b;
// // };


// //shape라는 인터페이스를 정의하세요 이 인터페이스는 color(문자열) 속성을 가집니다. shape를 확장하여 circle 인터페이스를 정의하고 radius(숫자) 속성을 추가하세요. 이 인터페이스를 사용하여 circle 객체를 선언하고 초기화하세요

// interface Shape {
//   color: string;
// }
// interface Circle extends Shape {
//   radius: number;
// }

// // const circle = {
// //   color: "purple",
// //   radius: 5
// // }; //타입 붙여주기! 아래
// const circle: Circle = {
//   color: "purple",
//   radius: 5
// };

// //Animal이라는 인터페이스를 정의하세요. 이 인터페이스는 name과 age라는 두개의 속성을 가집니다. Animal 인터페이스를 확장하여 Dog 인터페이스를 정의하고 breed 속성을 추가하세요 이 인터페이스를 사용하여 dog 객체를 선언하고 초기화하세요. 

// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// // const dog = {
// //   name: "merry",
// //   age: 8,
// //   breed: "Mixed"
// // };
// const dog: Dog = {
//   name: "merry", // Merry야 잘있쥐? 보고싶오
//   age: 8,
//   breed: "Mixed"
// };



//*** 네임스페이스

// namespace Exam {
//   export interface Inner { //export !
//     test: string;
//   }
//   export type test2 = number;
// }
// const ex1:Exam.Inner = {
//   test: 'hello', 
// }
// const ex2: Exam.test2 = 123;


interface Exam {
  hello: string;
  world: number;
  check: boolean;
  multiply: symbol //물음표는 속성이 있어도 되고 없어도된다 빨간줄이 사라짐 
}
const example = {
  hello: 'hi',
  world: 123,
  check: true,
}
example.check = false;

const obj = {
  hello: 'world',
  name: 'kim',
  age: 28
}
type Keys = keyof typeof obj;
type Values = typeof obj ['hello' | 'age']

type Arr = [1, 2, 3];
type First = Arr[0];
type length = Arr['length']

type Arr2 = (string | Boolean) [];








//product 라는 인터페이스를 정의하세요 이 인터페이스는 name(문자열)과 price(숫자) 속성을 가지며 description(문자열)은 선택적 속성으로 정의합니다. 이 인터페이스를 사용하여 product1 과 product2 객체를 선언하고 초기화하세요 


//Ditionary 라는 인터페이스를 정의하세요 이 인터페이스는 임의의 키는 문자열이고 값은 문자열인 속성을 가질수 있도록 인덱스 시그니처를 포함합니다. 이 인터페이스를 사용하여 dictionary 객체를 선언하고 임의의 키-값 쌍을 추가하세요



//배열의 첫번째 요소를 반환하는 제네릭 함수를 작성하세요


//두값을 받아서 그 중 큰 값을 반환하는 제네릭 함수를 작성하세요


//IsString<T> 타입을 구현하세요 T가 string 타입이라면 true 를 반환하고, 그렇지 않으면 false 반환
// type IsString<T> = T extends string ? true : false //string 타입이면 true, 아니면 false
// type Test1 = IsString<string>;
// type Test2 = IsString<number>;


//StringS<T> 타입을 구현하세요 T 가 유니온 타입일 경우, string 타입인 요소만 추출하여 반환
type StringS<T> = T extends string ? T : never;

// type Test1 = StringS<'a' | 1 | false>; //<>여기안에 유니온타입을 만들어 준다
type Test1 = StringS<string | boolean | number>;




