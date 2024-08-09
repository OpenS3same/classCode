const express = require('express');
const app = express();
//위 두줄은 무조건 외우기
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
// const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser());

app.set('views', path.join(__dirname, 'views'));  //views 폴더안에 있음
app.set('view engine', 'ejs'); //ejs를 쓴다고 하는것!

app.use(expressLayouts); //쓸거예요용용
app.use(express.static('public')); //css 정적파일을 불러와야하므로 static 이 필요(?)

// app.get('/', (req, res) => {
//   const data = {message: 'hello world'};
//   res.render('index', data); //렌더로 응답을 해준다
// })
// app.listen(8000, () => {
//   console.log("서버 연결 http://localhost:8000")
// })




app.get('/', (req, res) => {
  const data = {message: 'hello world'};
  res.render('index', { //렌더로 응답을 해준다
    tasks: tasks, //이것을 안해줘서 찾느라고 애먹었다
    data,
    people: [
      {name: 'kim'},
      {name: 'lee'},
      {name: 'park'},
    ]
});
});

app.get('/about', (req, res) => {
  res.render('about') //about을 렌더시켜주세요
})//이거 모르면 페이지 아무것도 띄울수가 없다! 기억하기

app.get('/form', (req, res) => {
  res.render('form');
})

app.post('/submit', (req, res) => {
  const {name, email} = req.body;
  res.render('result', {name, email}) // result 창에 name과 email을 뿌려줭
})

//task 가 여러개일수 있어서 빈 배열을 써준다.
let tasks = []; 

app.post('/addTask', (req, res) => {
  const newTask = req.body.newTask;
  if(newTask){
    tasks.push(newTask)
  }
  res.redirect('/'); //다시 리다이렉트
})
app.post('/deleteTask', (req, res) => {
  const deleteTask = req.body.task;
  tasks = tasks.filter(task => task !== deleteTask); //deleteTask가 아닌것은 addTask에 담길것이다
  res.redirect('/');
})

app.listen(8000, () => {
  console.log("서버 연결 http://localhost:8000")
})



// ========예제========== //
const users2 = [
  {name: 'kim', age: 17, role: 'front'}, 
  {name: 'lee', age: 25, role: 'back'}, 
  {name: 'park', age: 30, role: 'full'}, 
  {name: 'choi', age: 16, role: 'front'}, 
]

// 18세 이상이면 pass를 표시 나머지는 reject 표시
// role에 맞는 색깔 지정하여 표시하기

//루트에 넣어주기
// app.get('/', (req, res) => {
//   const data = {message: 'hello world'};
//   res.render('index', { //렌더로 응답을 해준다
//     tasks: tasks, //이것을 안해줘서 찾느라고 애먹었다
//     data,
//     users2
//     people: [
//       {name: 'kim'},
//       {name: 'lee'},
//       {name: 'park'},
//     ]
// });
// });