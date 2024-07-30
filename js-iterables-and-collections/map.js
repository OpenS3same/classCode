//Map
// Map 객체는 키와 값의 쌍으로 이루어진 컬렉션

//map 생성자 함수는 이터러블을 인수로 전달받아 map 객체를 생성
//set 했던것과 같이 new Map 으로 생성
//Map 생성자 함수는 중복된 키를 갖는 요소가 존재하면 값이 덮어써진다.

// const map1 = new Map ([['key1', 'value1'], ['key2', 'value2']]);
// console.log(map1); //결과값: Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// const map2 = new Map([1, 2]);
// console.log(map2);
// TypeError: Iterator value 1 is not an entry object 라는 오류가 나와서 new Map([[1, 2]]); 대괄호 하나 더 추가함. 이터러블을 인수로 전달받기때문에 그렇다. (?)
// const map2 = new Map([[1, 2]]);
// console.log(map2); //결과값: Map(1) { 1 => 2 }


// const map = new Map([['key1', 'value1'], ['key1', 'value2']]);
// console.log(map); //중복 안된다



//요소 개수 확인은 size 프로퍼티 사용
//Map객체에 요소를 추가할때는 .set 매서드 사용

// const {size} = new Map([['key1', 'value1'], ['key2', 'value2']]);
// console.log(size);
// const map = new Map();
// map.set('key1', 'value1');
// console.log(map);

// const {size} = new Map([['key1', 'value1'], ['key2', 'value2']]);
// console.log(size);
// const map = new Map();
// map.set('key1', 'value1').set('key2', 'value2'); //붙여서 이렇게 연속적으로 사용 가능
// console.log(map);


// //set 메서드를 호출한 후에 연속적으로 호출할수 있다.
// //map객체는 키 타입에 제한이 없다.
// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'Kim'};
// map.set(lee, 'developer').set(kim, 'designer')
// console.log(map);




// //delet 메소드는 삭제 성공 여부를 나타내는 불리언 값(true, false)을 반환한다.
// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'Kim'};

// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map.delete(kim));
// console.log(map); // 결과값 :Map(1) { { name: 'Lee' } => 'developer' }



// //has 는 simply 있니? 라고 물어보는 것! 
// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'Kim'};

// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map.has(kim)); //kim이 있니? 있으면 true
// console.log(map);



// //clear 사용
// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'Kim'};

// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map.clear());
// console.log(map); //결과값 : undefined Map(0) {}


// let map = new Map();
// map.set(0, "zero");
// map.set(1, "one");
// map.forEach((value, key) => console.log(key, value));
// // 결과값: 0 zero 1 one

// *** 예제 ***//
// map으로 합계, 평균 구하기
// 국어: 85, 영어:90, 수학: 95
//풀이))
// const scores = new Map([["국어", 85], ["영어", 90], ["수학", 95]]);
// let sum = 0;
// let average;
// scores.forEach(function(value){
//   sum += value;
// })
// average = sum / scores.size;
// console.log(sum);
// console.log(average);



// *** 예제 ***//
//Map 객체의 요소를 forEach() 메서드로 다음의 실행 결과를 만드시오
// title: 유럽 책방 문화 탐구
// author: 한미화
// price: 23000

//내가 푼 것))
// let map = new Map();
// map.set("title: ", "유럽 책방 문화 탐구");
// map.set("author: ", "한미화");
// map.set("price: ", 23000);
// map.forEach((value, key) => console.log(key, value));

//풀이))
// const book = new Map ([["title: ", "유럽 책방 문화 탐구"], ["author: ", "한미화"], ["price: ", 23000]]);
// let text = "";
// book.forEach(function(value, key){
//   text += key + ":" + value + "<br>";
// })
// document.write(text);



// // Set 을 이용하여 배열에서 중복 요소를 제거하여 결과를 내시오
// let numbers = [3, 7, 12, 3, 12, 3];
// const numbersSet = new Set(numbers);
// console.log(numbersSet);

