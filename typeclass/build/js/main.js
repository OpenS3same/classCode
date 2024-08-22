"use strict";
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
fetch('url').then((response) => {
    return response.json();
}).then((result) => {
});
// const result = JSON.parse('{"hello": "json"}')
const result = JSON.parse('{"hello": "json"}');
// 트라이캐치문
try {
    // }catch(e) {
    //   console.log(e.message);
    // }
}
catch (e) {
    const error = e; //개발자가 타입에러라고 말해주는 것
    console.log(error.message);
}
//*** void
