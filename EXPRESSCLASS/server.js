// const express = require('express');
// const app = express();

// app.listen(3000, () => {
//   console.log("서버 실행!")
// })

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// }) //html 파일을 보내는거라 send가 아닌 sendFile

// app.get('/post', (req, res) => {
//   res.send('포스트 페이지 입니다!')
// })

// app.get('/shop', (req, res) => {
//   res.send('쇼핑 페이지입니다!')
// })



const express = require('express');
const app = express();
const post = 3000
const path = require('path'), async = require('async'), fs = require('fs')

// ***새로 추가한 내용*** //
const users = [
  {name: 'han', email: 'han@hmail.com'},
  {name: 'kim', email: 'kim@hmail.com'},
  {name: 'lee', email: 'lee@hmail.com'}
]


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
}) //html 파일을 보내는거라 send가 아닌 sendFile

// app.get('/post', (req, res) => {
//   res.send('포스트 페이지 입니다!')
// })

// app.get('/shop', (req, res) => {
//   res.send('쇼핑 페이지입니다!')
// })

// app.get('/greet', (req, res) => {
//   res.send(JSON.stringify({message: "안녕하세요:)"}));
// })

app.get('/users', (req, res) => {
  res.json(users);
})

app.listen(port, () => {
  console.log(`서버실행! http://localhost:$(port)`)
})