// 클래스는 프로토타입 객체에서 속성을 상속하는 객체의 집합
// 같은 프로토타입 객체에서 속성을 상속했다면 이들 객체는 같은 클래스의 서로 다른 인스턴스가 된다.
// 인스턴트 객체가 프로토타입을 참조하며 이를 통해 프로토타입에 정의된 속성과 메소드를 상속받는다.

// 팩토리함수 쓸일은 잘 없음 
// Object.create() 매서드를 사용하여 객체를 생성한다
// toString() 메서드를 호출해 객체의 정보를 문자열로 출력함
// 생성자함수와 프로토타입은 서로 참조를 한다 


// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype = {
//   toString: function() {
//     return `(${this.x}, ${this.y})`;
//   }
// }
// let pt1 = new Point(10, 20);
// let pt2 = new Point(100, 200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// console.log(pt1 instanceof Point);
// console.log(pt2 instanceof Point);






// // *** 인스턴스에 대해 독립적으로 정의 *** //

// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype.getArea = function() {
//     return Math.PI * this.radius **2;
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea)
// // 결과 : true 가 나옴

//this 를 함수객체 안에서 사용했었지만 클래스에서는? 


// **인스턴스 함수 ** //
// 클래스를 호출할때는 new 를 사용해서 꼭 호출 
// 클래스는 함수이다. 클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로토타입메서드, 정적메서드



// class Person{
//   constructor(name){
//     this.name = name; //매개변수로 = name;이 들어간다
//   }
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
//   static sayHello() {
//     console.log('Hello');
//   }
// }
// const me = new Person('Lee');
// me.sayHi();
// Person.sayHello(); //클래스를 넣어줘야함. me.를 쓸경우 오류가 생겼다.

// const Person = (function() {
//   function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.sayHi = function() { //프로토타입을 만들어줌
//     console.log('Hi' + this.name);
//   };
//   Person.sayHello = function() {
//     console.log('Hello!');
//   }
//   return Person;
// });

// //인스턴스 만들기
// const me = new Person('Lee');
// console.log(me.name);
// me.sayHi();
// Person.sayHello();


//클래스 몸체에는 0개 이상의 메서드만 선언 가능
//constructor 는 인스턴스를 생성하고 초기화 하기 위한 특수한 메서드

//*** 정적메서드와 프로토타입 메서드의 차이 ***//

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
// }
// const square = new Square(10, 10);
// console.log(square.area());

//위 와 아래 코드 비교

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
//   static areas (width, height){
//     return width * height;
//   }
// }
// const square = new Square(10, 10);
// console.log(square.area());
// console.log(square.areas(20, 10));



// *** 접근자 프로퍼티 *** //
//자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티이다.

// const Person = {
//   firstName: 'Minji',
//   lastName: 'Choi',

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`; 
//   },
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split('');
//   }
// }
// console.log(Person.fullName);


// *** 클래스 필드 *** //
// constructor 내에서는 this 에 바인딩
// 클래스 필드를 초기화할 필요가 있다면 constructor 내부에서 클래스 필드를 참조하여 초기값을 할당한다

// *** public / private *** //

// class Person {
//   #name = '';
//   constructor(name) {
//     this.#name = name
//   }
// }
// const me = new Person('Lee')
// // console.log(me.#name) -> 이렇게 쓸수없음


// class Person {
//   #name = '';
//   constructor(name) {
//     this.#name = name
//   }
//   get name () {
//     return this.#name.trim();
//   }
// }
// const me = new Person('Lee')
// console.log(me.name);
// console.log(me.#name) -> 이렇게 쓸수없음
//클래스 외부에서 참조


// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('자전거', 2)
// console.log(myVehicle); //결과값 : Vehicle { name: '자전거', wheel: 2 }

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// }
// const myBicycle = new Bicycle('따릉이', 2)
// console.log(myBicycle); //결과값 Vehicle { name: '자전거', wheel: 2 }
// // Bicycle { name: '따릉이', wheel: 2 }

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel) //기존에 있던 부분
//     this,license = license //새로운 부분
//   }
// }
// const myCar = new Car ('벤츠', 4, true);
// console.log(myCar);

//위 코드 설명: super 에 집중! extends로 자전거와 차를 새로 넣어줌, super는 기존 클래스를 지칭하는것. 그래서 클래스 그대로 바로 받을 수 있음. 차에서 새로운 부분이 작성되는 것은 새로 넣어줬음. 
//함수처럼 호출할수있고 this와 같이 식별자처럼 참조할 수 있음

//메서드 내에서 슈퍼를 참조하면 수퍼클래스의 메서드를 호출할수 있음
//=>

  class Base {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      return `Hi ${this.name}. 잘 지냈니?`;
    }
  }

  class Derived extends Base {
    sayHi() {
      return `${super.sayHi()}`  //super 를 이용해 sayHi 호출
    }
  }
const derived = new Derived('Lee');
console.log(derived.sayHi());


// *** 예제 *** //
// Book 이라는 생성자 함수를 만들고 프로토타입을 이용하여 프로퍼티를 추가하세요. (title, author, price) / 생성할 프로토타입 예) 출판일, 페이지수
function Book(title, author, price){
  this.title= title,
  this.author = author, 
  this.price = price
}
Book.prototype.year = "1999"