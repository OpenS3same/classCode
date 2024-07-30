// const me = [1, 2, 3, 4, 5]
// console.log(me);

// let carSales = [300, 350, 400, 450, 600, 650, 620, 580, 620, 580, 500, 450]
// console.log(carSales);

// let carSales2 = new Array(300, 350, 400, 450, 600, 650, 620, 580, 620, 580, 500, 450)

// let copy = Array.from(carSales);
// console.log(copy);

// let concat = [0, carSales, 300, 500];
// console.log(concat);

// let numbers = [..."0123456789"];
// console.log(numbers);

// let may = carSales[4];
// console.log(may);
// let june = carSales[5];
// console.log(june);

// carSales[12] = -50;
// console.log(carSales);

// let a = [1, 2, 3, 4, 5]
// let len = a.length //길이를 알수있다
// console.log(len);
// a.length = 0; //삭제를 할수 있다
// console.log(a);


// //여러변수에 저장하는 구조 해체 대입
// //*****다시해보기 */
// let jan, feb, mar, rest;
// [jan, feb, mar, ...rest] = carSales;
// console.log(jan, feb, mar);
// console.log(rest);


// let sum = 0;
// for(let sale of carSales) //let을 같이 써줘야함
//   sum += sale;
// let average = sum / carSales.length;
// let roundedAverage = average.toFixed(2); //뒤에 소수점 없애줌
// console.log(average);
// console.log(roundedAverage);


// let sum = 0; //0으로 초기화
// for (let [index, sale] of carSales.entries()){ //.메소드 이용
//     if(index % 2 === 0) //짝수번째에 있는것을 뽑아줌
//         sum += sale;
// }
// let average = sum / (carSales.length / 2);
// console.log(average);

//for... of : 값을 반환 (위 내용)
//for...in  : 키의 목록을 반환 (아래 내용)

// let list = [4, 5, 6];
// for(let i in list) {
//   console.log(i);
// }

// // for(let i of list){
// //   console.log(i);
// // }


// const car = {
//   brand: "BMW",
//   color: "red",
//   year: "2012"
// }
// for(let prop in car){
//   console.log(prop);
// } 


// //forEach : 새로운 배열 반환 안함
// let sum = 0; //초기화 0
// carSales.forEach(sale => {sum += sale}); //함수를 호출해 배열의 요소를 다룬다
// let average = sum / carSales.length;
// console.log(average);

// //50씩 늘었다면..?
// carSales.forEach((sale, index, array) => {array[index] = sale + 50});
// console.log(carSales);


// //map
// let newCarSales = carSales.map(sale => sale + 50); //메소드는 괄호까지 먼저 준비해주기! 
// console.log(newCarSales);
// console.log(carSales);


// //filter
// let highSales = carSales.filter(sale => sale > 500);
// console.log(highSales);


// let evenSales = carSales.filter((sale, index) => index % 2 === 1) //2로 나눠서 나머지가 1인것
// console.log(evenSales);


//find 예제
// let firstSaleSix = carSales.find(sale => sale > 600);
// console.log(firstSaleSix);
// let firstSalesSixIndex = carSales.findIndex(sale => sale > 600);
// console.log(firstSalesSixIndex);


// //every, some 
// let allsaleSix = carSales.every(sale => sale > 600); //600 아닌것도 있기때문에 false가 뜸
// console.log(allsaleSix);
// let anysaleSix = carSales.some(sale => sale > 600); //하나라도 해당되는게 있으면 true가 뜸
// console.log(anysaleSix);


// //reduce : 더이상 배열 요소가 없을때까지 함수를 반복시켜주고 반환한다.
// let sum = carSales.reduce((t1, t2) => t1 + t2, 0) //0부터 시작을 한다는 의미로 0 붙여줌
// console.log(sum);
// let average = sum / carSales.length;
// console.log(average);


// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1: t2))//t1: t2 t1이 크면 t1 을 반환하고 아니면 t2를 반환
// console.log(highest);


// //flat : 배열 요소에 다른 배열을 포함하고 있을때 배열을 풀어준다.
// let flat = [1, [2, 3]].flat();
// console.log(flat); //결과는 [1, 2, 3] 으로 나옴 풀어줘서


//flatMap:배열의 각 요소에 주어진 콜백함수를 적용한 다음 그결과를 한단계씩 평탄화하여 새배열로 반환
// let message = ["오늘은", "비가옵니다."]
// let words = message.flatMap(msg => msg.split(""));
// console.log(words);


//concat
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4, 5);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(newArray);


// //push(): 배열의 끝에 요소를 추가
// let stack = [];
// stack.push(1);
// stack.push(2, 3);
// console.log(stack);

//pop(): 배열 끝의 요소를 꺼내와 반환하고 해당요소를 배열에서 삭제
// let stack = [];
// stack.push(1);
// stack.push(2, 3);
// console.log(stack);
// stack.pop();
// stack.push(4);
// console.log(stack);


// //unshift(): 배열의 처음에 요소를 추가
// let stack = [];
// stack.unshift(1);
// stack.unshift(2, 3); //추가하고 결과를 보면 [2, 3, 1]로 확인됨 처음에 요소를 추가해서
// console.log(stack);


// //shift(): 배열의 처음에 있는 요소를 꺼내와 삭제
// let stack = [];
// stack.unshift(1);
// stack.unshift(2, 3); 
// stack.shift(); //결과를 보면 [3, 1]을 확인할 수 있음
// console.log(stack);



// // *** 예제 1 *** document.wirte 를 이용해서 출력//
// const numbers = [20, 37, -21, 32, -2];
// document.write(numbers[1] + ",");
// document.write(numbers[3]);

// let numberArrey = [20, 37, -21, 32, -2];
// let number = numberArrey.filter( number => number > 30);
// console.log(number);


// slice(): 서브 배열을 반환, 원래의 배열을 변경하지 않음, 두번째 인수는 인덱스
// let a = [1, 2, 3, 4, 5];
// a.splice(0, 2); //배열 수, 잘라낸 갯수
// a.splice(2);
// a.splice(0, 2, 10, 20);
// console.log(a);

// let a = [1, 2, 3, 4, 5];
// let b = a.slice(0,2);
// console.log(b);
// console.log(a);

// let a = [1, 2, 3, 4, 5];
// let b = a.slice(0,2);
// let c = a.slice(1, -1); //뽑아도 아무런 변화가 없음
// console.log(c);
// console.log(a);



// flll(): 배열을 첫번째 인수에 지정된 값으로 채움, 첫번째인수는 값으로 채우고 두번째는 시작인덱스 세번째인수는 끝 인덱스
// let a = new Array(5);
// a.fill(0); //[0, 0, 0, 0, 0]의 결과가 나옴
// // a.fill(1, 1); [0, 1, 1, 1, 1]의 결과가 나옴
// a.fill(1, 1, -1); //세번째는 끝 인덱스를 의미
// console.log(a);



// indexOf(): 배열에서 인수와 일치하는 맨 처음 요소의 인덱스
// let a = [0, 1, 2, 3, 2, 1, 0];
// let b = a.indexOf(2);
// console.log(b);


//lastindexOf(): 배열의 끝에서 인수와 일치하는 요소를 찾는 맨처음 요소의 인덱스, 찾지 못하면 -1을 반환함
// let a = [0, 1, 2, 3, 2, 1, 0];
// let c = a.lastIndexOf(2);
// console.log(c);

// let a = [0, 1, 2, 3, 2, 1, 0];
// let c = a.lastIndexOf(2);
// let d = a.indexOf(5);
// console.log(d); //5가 없음. 찾지 못하면 -1을 반환함


//includes(): 포함하고 있니? 맞으면 true, 아니면 false
// let a = [0, true, 2, false, NaN];
// let b = a.includes(true); //true 가 있니?
// let c = a.includes(NaN); //NaN 이 있니? - 있기때문에 true 
// console.log(b);
// console.log(c);



//sort(): 배열을 정리할때 사용, 알파벳 순으로 정렬 / 숫자의 경우 함수를 통해 지정

// let a = ["apple", "cherry", "banana"];
// let b = a.sort();
// console.log(b); //알파벳 순으로 정렬되어 [ 'apple', 'banana', 'cherry' ] 로 나옴


// let c = [22, 333, 121];
// let d = c.sort();
// console.log(d);  //[ 121, 22, 333 ] 가 나옴 따라서
// let e = c.sort((a, b) => a - b);
// console.log(d); //[ 22, 121, 333 ] 으로 원하는 결과 값이 나옴 / 함수를 써야한다 이정도만 기억하기.


//join(): 배열의 모든 요소를 문자열로 변환하여 결합한 문자열을 반환 ( 아주 중요 !)

// let a = [1, 2, 3];
// let b = a.join(); // 1,2,3 으로 결과값 나옴
// let c = a.join(""); //결합한 문자열, 합쳐서 123 으로 결과값 나옴
// console.log(b);
// console.log(c);



// ***예제*** //
//score = [67, 82, 97, 100, 92] 배열의 각 요소 값을
//1) for문을 이용하여 출력
//  const scores = [67, 82, 97, 100, 92]
//  for (let i = 0; i<scores.length; i++){
//   document.write(scores[i] + "<br>");
//  }

//2) for of 문을 이용하여 출력
// const scores = [67, 82, 97, 100, 92];
// for(let score of scores) {
//   document.write(score + '<br>');
// }


//예제3
//tel = ["010", "1234", "5678"]을 문자열 010-1234-5678 로 반환

// const tel = ["010", "1234", "5678"]
// let tel2 = tel.join("-")
// document.write(tel2);

//예제4
//colors = ["빨강", "노랑", "파랑", "주황"] 매서드를 이용하여 노랑, 파랑, 주황 / 빨강 의 실행결과를 내시오

// const colors = ["빨강", "노랑", "파랑", "주황"]
// //첫번째 요소를 삭제하는 것 shift 
// let arr = colors.shift();
// console.log(colors);
// document.write(colors + "/");
// document.write(arr);




//다차원 배열
// 자바스크립트 언어 자체에서 다차원 배열을지원하지 않는다. 그 대신에 내포된 배열을 사용하여 다차원 배열을 생성할 수 있다.

// - array of array

// let arr = new Array(2);
// //하나의 배열안에 3개를 넣을것이다.
// for(let i = 0; i < arr.length; i++)
//   arr[i] = new Array(3);
// console.log(arr);


// let arr = Array.from(new Array(2), () => new Array(3));
// console.log(arr);

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[0][0] = 4;
// arr[0][1] = 5;
// arr[0][2] = 6; 
// console.table(arr);

// for(let i = 0; i < arr.length; ++i){
//   for(let j = 0; j < arr[i].length; ++j){
//     console.log(arr[i][j]);
//   }
// }


// // ***예제 문제*** //
// //3명 학생 4과목 성적의 합계와 평균을 구하라
// // [83, 90, 70, 87], [87, 93, 62, 83], [98, 90, 77, 97]

//풀이))
// const scores = [[83, 90, 70, 87], [87, 93, 62, 83], [98, 90, 77, 97]];

// let sum, average;

// for(let i = 0; i < 3; i++){
//   sum = 0;
//   for(let j = 0; j<4; j++){
//     sum += scores [i][j];
//   }
//   average = sum/4;
//   text += i + "번째 학생의 합계:" + sum + ", 평균: " + average + '<br>';
// }
// document.write(text);

// 내가 풀었던 것))
// let scores = [
//   [83, 90, 70, 87], [87, 93, 62, 83], [98, 90, 77, 97]
// ];

// let results = scores.map(studentsScores => {
//   let sum = studentsScores.reduce((total, score) => total + score, 0);
//   let average = sum / studentsScores.length;
//   return {
//     sum: sum,
//     average: average.toFixed(2)
//   }
// });

// //결과출력
//결과 출력못함


//예졔))
// // 배열을 이용하여 성적의 합계와 평균을 구하시오
// // mathScore = [90, 85, 70, 86, 97]

// const mathScores = [90, 85, 70, 86, 97]
// let sum = 0;
// let average;
// for(let mathscore of mathScores){
//   sum += mathscore;
// }
// average = sum / mathScores.length;
// let text = "";
// text += "합계: " + sum +"<br>";
// text += "평균: " + average + "<br>";
// document.write(text);


// //예제))
// // tempNumbers = [7, -24, -8, 10, 17, -18] 0 보다 작은 수 중에서 가장 첫번째 숫자를 결과로 나타내시오

// let tempNumbers = [7, -24, -8, 10, 17, -18];
// tempFind = tempNumbers.find(number => number < 0);
// document.write(tempFind);


//예제))
//  a = [12, 0, 2, 5, 4]
//  b = [0, 2, 3, 12, 8]
//  두 배열의 요소 값이 서로 같은 요소들로 새로운 배열을 생성하여 결과로 내시오 (새로운 배열을 생성하는 것이 힌트!)

// let a = [12, 0, 2, 5, 4]
// let b = [0, 2, 3, 12, 8]

// let c = [];
// b.forEach(element => {
//   if(a.includes(element)){
//     c.push(element);
//   }
// });
//document.write(c);


//예제 ))
// numbers2 = [1, 3, 5];
// 위 배열을 이용하여 실행결과 10, 30, 50를 내시오
// //풀이))
// const numbers2 = [1, 3, 5]
// let numbersArray = numbers2.map(num => num * 10);
// document.write(numbersArray);

// //내가 푼 것))
// const numbers2 = [1, 3, 5]
// let newNumbers2 = numbers2.map(number => number * 10);
// console.log(newNumbers2)