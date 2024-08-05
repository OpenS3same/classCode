import _ from 'lodash'
// import cube from './modules.js'
// import {arrs, getName} from './modules.js'
import * as R from './modules.js'
import myData from './myData.json'
import axios from 'axios' 
// axios 경로지정 생략

// console.log(myData);
// const user = {
//   name : "yongwoo",
//    age : 36,
// email : [
//   "yongyongdie@hmail.com",
//   "yongwoo@hmail.com"]
// }

// console.log(user);

// //JSON 으로 변경되었음
// const str = JSON.stringify(user);
// console.log(str)

// //JSON 에서 다시 객체로 변경됨
// const obj = JSON.parse(str);
// console.log(obj)

// // stringify 와 parse를 이용한 JSON 과 객체 변경법
// localStorage.setItem('user', JSON.stringify(user));
// console.log(localStorage.getItem('user'));
// console.log(JSON.parse(localStorage.getItem('user')));

const str = localStorage.getItem('user');
const obj = JSON.parse(str);
obj.age = 20;
console.log(obj);
localStorage.setItem('user', JSON.stringify(obj));


// console.log(cube(2,4));

// console.log(R.arrs);
// console.log(getName());
// const user = {
//   name : "yongwoo",
//   age : 36,
//   email : ["yongyongdie@hmail.com"]
// }


// const copyUser = user;
// console.log(copyUser === user);

// user.age = 30
// console.log(user);
// console.log(copyUser);


// const copyUser = Object.assign({}, user);
// console.log(user === copyUser);

// user.age = 20
// console.log(user);
// console.log(copyUser);


// const copyUser = {...user}
// console.log(copyUser === user);

// user.age = 30
// console.log(user);
// console.log(copyUser);

// user.email.push('kimyongwoo@hmail.com')
// console.log(user.email === copyUser.email);

// console.log(user);
// console.log(copyUser);

// const copyUser = _.cloneDeep(user);
// console.log(copyUser === user);

// user.age = 20
// console.log(user);
// console.log(copyUser);

// user.email.push('yongyonge@hmail.com');
// console.log(user.email === copyUser.email);
// console.log(user);
// console.log(copyUser);

// const userA = [
//   {userID: '1', name: 'yongwoo'},
//   {userID: '2', name: 'kim'},
// ]

// const userB = [
//   {userID: '3', name: 'Jiyoung'},
//   {userID: '4', name: 'han'},
// ]

// const userC = userA.concat(userB);
// console.log(userC);
// console.log(_.uniqBy(userC, 'userId'));

// const userD = _.unionBy(userA, userB, 'userId');
// console.log(userD);


// const users = [

// {userId:'1', name: 'yongwoo'},
// {userId:'2', name: 'kim'},
// {userId:'3', name: 'jiyoung'},
// {userId:'4', name: 'han'}

// ]

// const foundUser = _.find(users, {name: 'lee'});
// console.log(foundUser);
// const foundUserIndex = _.findIndex(users, {name: 'jiyoung'});
// console.log(foundUserIndex);
// // 결과값 2가 나왔음
// _.remove(users, {name: 'youngwoo'});
//   console.log(users);



// let array = [1, 2, 3, 4]
// let evens = _.remove(array, function(n) {
//   return n % 2 === 0
// })

// console.log(array);
// console.log(evens);


// let myFriend = [
//   {name: 'kim', active : false},
//   {name: 'han', active : false},
// ]
// console.log(_.every(myFriend, {name:'kim', active: false}));

// //every 는 요소값들을 모두 비교를 하기 때문에 kim과 han 이 같아야 결과가 false 가 아닌 true 가 나온다

// console.log(_.every(myFriend, ['active', false])); //true 가나옴
// console.log(_.every(myFriend, 'active')); //false 가 나옴, active를 true로 바꿔야 true로 나온다


// let mySister = [
//   {name: 'kim', age: 30, city: 'Inje'},
//   {name: 'lee', age: 23, city: 'Busan'},
//   {name: 'park', age: 40, city: 'Seoul'},
//   {name: 'han', age: 23, city: 'Daegu'},
// ]

// console.log(_.filter(mySister, {age: 30, name: 'kim'}))
// console.log(_.filter(mySister, sister => sister.age === 23));




// function getMovies() {
//   axios
//   .get('http://www.omdbapi.com/?apikey=7035c60c&s=PARASITE')
//   .then((response) => {
//     console.log(response);
//     const h1El = document.querySelector('h1')
//     const imgEl = document.querySelector('img')
//     const yearEl = document.getElementById('year')
//     const typeEl = document.getElementById('type')
//     h1El.textContent = response.data.Search[0].Title
//     imgEl.src = response.data.Search[0].Poster
//     yearEl.textContent = response.data.Search[0].Year
//     typeEl.textContent = response.data.Search[0].Type
//   })
// }
// //함수호출
// getMovies();




// 자전거 지도 만들기
const API_KEY = '684253514a68796737364e6543675a'
async function getData() { //await을 쓰면 함수 앞에 async도 붙여줘야한다.
  const url=`http://openapi.seoul.go.kr:8088/${API_KEY}/json/bikeList/1/5/`
  const response = await fetch(url);
  const data = await response.json(); //JSON 파일을 받아준다
  const locations = data.rentBikeStatus.row.map(spot => [spot.stationName, spot.stationLatitude , spot.stationLongitude])
  console.log(data);
  console.log("locations", locations)
  drawMap(locations);
}
getData();


function drawMap(locations){
  const map = new google.maps.Map(document.getElementById("map"),{
    zoom: 15,
    center: new google.maps.LatLng(locations[0][1], locations[0][2]), //위도와 경도에 해당
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  const infoWindow = new google.maps.InfoWindow();
  locations.forEach((location, i) => {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(location[1], location[2]),
      map: map,
      title: location[0]
    });

    marker.addListener('click', () => {
      infoWindow.setContent(location[3]);
      infoWindow.open(map, marker);
    })
  })
}