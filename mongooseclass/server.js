//가지고 올것!
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import route from "./routes/userRoutes.js"

const app = express();
dotenv.config();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(() => { //응답 받을것을 적어준다
  console.log("연결 잘 됐어!");
  app.listen(PORT, () => { //포트 연결하는 법
    console.log(`연결 잘 됐어요. http://localhost:${PORT}`) // port 연결하는 법
  }) 
})

//에러
.catch((error) => console.log(error))

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number, 
//   //네임을 스트링 에이지는 숫자
// })
// const userModel = mongoose.model("users", userSchema);

// app.get("/users", async ( req, res) => {
//   const userData = await userModel.find();
//   res.json(userData);
// })


app.use("/user", route);
