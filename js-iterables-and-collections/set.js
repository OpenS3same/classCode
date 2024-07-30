//Set : Set 객체는 중복되지 않는 유일한 값들의 집합이다
// set 객체는 set 생성자 함수로 생성함. set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성하고 중복된 값은 set 객체에 요소로 저장되지 않는다.

// const set = new Set(); //생성자 함수
// console.log(set); //Set(0) {} 로 나옴

// const set1 = new Set([1, 2, 3, 3]); //일부러 중복된 값을 넣어봄
// console.log(set1); //Set(3) { 1, 2, 3 } 결과값

// const uniq = array => [...new Set(array)];
// console.log(uniq([2, 1, 2, 3, 4, 5, 4])); //[ 2, 1, 3, 4, 5 ] 결과값


// // Set 객체의 요소 개수 확인 size 프로퍼티는 getter함수만 존재하는 접근자 프로퍼티다. 

// const {size} = new Set([1, 2, 3, 3]) //프로퍼티라서 {}에 들어간다.
// console.log(size);


// //set 객체에 요소를 추가할 때는 add 메서드를 사용함 연속 호출 가능. 
// const set = new Set();
// set.add(1);
// console.log(set); //Set(1) { 1 }

// //여기서 메소드체이닝이 가능
// const set = new Set();
// set.add(1).add(2); //메소드체이닝
// console.log(set); //Set(2) { 1, 2 }


// //**Set : 특정 요소가 존재하는지 확인할때 has 메서드를 사용함 */
// const set = new Set ([1, 2, 3]);
// console.log(set.has(3)); // 여기서 (5)를 나오면 false 가 나옴

// //*** delete 사용하기
// const set = new Set ([1, 2, 3]);
// set.delete(2);
// console.log(set); //Set(2) { 1, 3 }



// const set = new Set ([1, 2, 3]);
// set.clear // 다 지우려면 clear 사용
// console.log(set);


// // *** for of 로 값을 순회할수 있다(?)
// let odds = new Set([1, 3, 5, 7, 9]);
// let sum = 0
// for(let o of odds)
//   sum += o;
// console.log(sum); //25 결과값 


// let product = 1;
// odds.forEach(o => product *= o);
// console.log(product); //945 결과값


// //*** set 객체의 요소를 순회하려면 forEach 매서드 사용 */
// const userIDs = [101, 102, 101, 103, 102];
// const uniqueUserIDs = new Set(userIDs);
// uniqueUserIDs.forEach(userID => {
//   console.log(`ID: ${userID}`) // ID: 101 ID: 102 ID: 103 결과값
// });

// const tags = ['JavaScript', 'CSS', 'HTML', 'HTML'];
// const uniqueTags = new Set(tags);
// uniqueTags.forEach(tag => {
//   console.log(`tag: ${tag}`); //tag: JavaScript tag: CSS tag: HTML
// });


// const set = new Set ([1, 2, 3]);
// console.log([...set]); //[ 1, 2, 3 ]
// const [a, ...rest] = set;
// console.log(a, rest);



// //합집합, 교집합, 차집합 개념을 가질수 있다
// let set1 = new Set ([1, 2, 3]);
// let set2 = new Set ([4, 2, 3]);
// let union = new Set ([...set1, ...set2]);
// let intersection = new Set ([...set1].filter(x => set2.has(x)));
// console.log(intersection); //Set(2) { 2, 3 } 결과 / 교집합 개념

// let difference = new Set([...set1].filter(x => !set2.has(x)));
// console.log(difference); //Set(1) { 1 } 결과


// // 예제)) Set 객체의 요소의 개수구하기
// //"I am a student"
// //풀이)) 
// const set1 = new Set("I am a student");
// document.write(set1.size)

// //내가 푼 것
// const {size} = new Set("I am a student")
// console.log(size);

