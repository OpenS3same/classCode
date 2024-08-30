import express, { NextFunction, Router, Request, Response } from "express";
// Express 라이브러리
import bodyParser from "body-parser"; // 요청 본문을 파싱하기 위한 body-parser
import cors from "cors"; // CORS(Cross-Origin Resource Sharing) 설정을 위한 모듈
import { Customer, Product } from "./types";
import databaseA from "./database";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connetDB from "./database";
import CustomerModel from "./models/customer";
import jwt, { VerifyErrors } from "jsonwebtoken";

const app = express(); // Express  생성
const PORT = 4000; // 서버  포트를 지정
const router = Router(); //  Express 라우터를 사용

//jwt 적용
const sec: string = process.env.TOKEN_SECRET || "default_secret_key"; // 기본값 추가
const generateAcessToken = (username: any) => {
  return jwt.sign({ username }, sec, { expiresIn: "600s" });
};
//auth
router.post("/api/v1/auth", (req, res) => {
  const token = generateAcessToken({ username: req.body.username });
  console.log(token);
  res.json(token);
});

//token 생성 함수
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  //const authHeader = req.headers["authorization"];
  const authHeader = req.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401).send("Token is missing");
  }

  jwt.verify(token, sec, (err: VerifyErrors | null, decoded: any) => {
    if (err) {
      return res.status(403).send("Invalid token");
    }
    (req as any).user = decoded;
    next(); // 여기로 이동
  });
};

//bodyParser 사용
app.use(bodyParser.json()); //express.json()
//cors 사용
//app.use(cors);
const corsOptions = {
  origin: "*", //모든 도메인에서의 요청을 허용
  credential: true, //// 자격 증명을 포함한 요청을 허용
};
app.use(cors(corsOptions)); // CORS 설정 적용
require("dotenv").config(); //환경변수 설정 적용

app.listen({ port: PORT }, () => {
  // 지정된 포트에서 서버를 시작
  console.log(`localhost:${PORT}에서 실행`); // 서버가 성공적으로 실행 확인
});

//Get요청 , 경로('/')
app.get("/", (req, res) => {
  res.send("hello World");
});

//db 연결 확인
connetDB();

//express에 router연결하여 사용
app.use(router);

//jwt 미적용
//router.get("/api/v1/customers", async (req, res) => {
const ranId = () => {
  return Math.floor(Math.random() * 1000);
};
//jwt 적용
router.get("/api/v1/customers", authenticateToken, async (req, res) => {
  try {
    const customers = await CustomerModel.find();
    res.json(customers);
  } catch (error) {
    console.error("고객 조회 실패", error);
    res.status(500).json({ error: " 조회 중 오류가 발생하였습니다." });
  }
});

//특정 id 조회
router.get("/api/v1/customers/:id", async (req, res) => {
  try {
    const customer = await CustomerModel.findOne({ id: req.params.id });
    if (!customer) {
      return res.sendStatus(404);
    }
    res.json(customer);
  } catch (error) {
    console.error("고객 조회 실패", error);
    res.status(500).json({ error: "조회 중 오류가 발생하였습니다." });
  }
});

//생성
router.post("/api/v1/customers", async (req, res) => {
  //typescript id 제외 옵션 : Omit
  const customer: Omit<Customer, "id"> = req.body;

  const newCustomer = new CustomerModel({
    id: uuidv4(),
    name: customer.name,
    address: customer.address,
    email: customer.email,
  });

  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error("고객 저장 실패", error);
    res.status(500).json({ error: "고객 정보 저장 중 오류 발생하였습니다." });
  }
});

//특정 id의 정보 삭제
router.delete("/api/v1/customers/:id", async (req, res) => {
  try {
    const result = await CustomerModel.findByIdAndDelete({ id: req.params.id });
    res.status(201).json("{고객 저장 성공}");
  } catch (error) {
    console.error("고객 삭제 실패", error);
    res.status(500).json({ error: "고객 정보 삭제 중 오류 발생하였습니다." });
  }
});

router.put("/api/v1/customers/:id", async (req, res) => {
  try {
    const customer = await CustomerModel.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );

    if (!customer) {
      return res.sendStatus(404);
    }
    res.json(customer);
  } catch (error) {
    console.error("고객 정보 수정 오류", error);
    res.status(500).json({ error: "고객 정보 수정 중 오류 발생하였습니다." });
  }
});



// import express, { NextFunction, Request, Response, Router } from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import { Customer, Product } from "./types"
// import databaseA from "./database";
// import CustomerModel from "./models/customer";
// import { v4 as uuidv4 } from "uuid";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import connectDB from "./database";
// import jwt, {VerifyErrors} from 'jsonwebtoken'

// //connectDB 호출
// connectDB();

// const sec: string = process.env.TOKEN_SECRET || "default_secret_key";
// const generateAccessToken = (username: any) => { //빨간줄 없애기 위해 (username) 에 any 를 넣는다
//   return jwt.sign({username}, sec, {expiresIn:'600s'})
// }


// // require("dotenv").config();
// const app = express();
// const PORT = 4000;
// const router = Router();
// //import해준 bodyParser, cors를 사용한다고 적어주기
// app.use(bodyParser.json());
// //아래 코드로 표현도 가능
// //app.use(express.json());
// //app.use(cors);
// const corsOptions = {
//   origin: "*",
//   credential: true,
// };

// //auth
// router.post('/api/v1/auth', (req, res) => {
//   const token = generateAccessToken({username: req.body.username})
//   res.json(token)
// })
// //http 요청할때 인증하는 함수 below
// const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
//   //const authHeader = req.headers['authorization']
//   const authHeader = req.get("authorization");
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null){
//     return res.status(401);
//   } //  token이 null이면 status를 내보내 준다
//   jwt.verify(token, sec, (err:VerifyErrors | null , decoded: any) => {
//     if (err) {
//       return res.status(403).json({msg:'Forbidden', error: err.message})
//     }
//     (req as any) = decoded;
//   })
//   next();
// }

// app.use(cors(corsOptions));
// app.get("/", (req, res) => {
//   res.send("hello World");
// });

// //mongoDB 연결 확인
// mongoose
//   .connect(process.env.MONGODB_URL || "")
//   .then(() => console.log("mongoDB 연결 완료"))
//   .catch((err) => console.error("몽고디비연결실패", err));

// const ranId = () => {
//   return Math.floor(Math.random() * 1000);
// };
// //database의 customer의 전체 데이터를 가져오도록 http get 요청 작성
// router.get("/api/v1/customers", async (req, res) => {
//   //res.send(databaseA.customer);
//   try {
//     const customers = await CustomerModel.find();
//     res.json(customers);
//   } catch (error) {
//     console.error("고객 조회 실패", error);
//     res.status(500).json({ error: "조회 중 오류 발생" });
//   }
// });

// //databaseA 를 사용안하니 CustomerModel을 사용하도록 수정하기
// router.get("api/v1/customers/:id", (req, res) => {
//   //   const customer = databaseA.customer.find(
//   //     (customer) => customer.id === req.params.id
//   //   );
//   try {
//     const customer = CustomerModel.findOne({ id: req.params.id });
//     res.json(customer);
//   } catch (error) {
//     console.error("고객 조회 실패", error);
//     res.status(500).json({ error: "조회 중 오류가 발생하였습니다" });
//   }
// });
// //   //customer 타입이 undefined 이면, 404를 응답 아니라면 customer 응답
// //   if (typeof customer === "undefined") {
// //     res.sendStatus(404);
// //   } else {
// //     res.send(customer);
// //   }
// // });

// router.post("/api/v1/customers", async (req, res) => {
//   //omit 을 사용해서 id를 제외하고 보겠다.
//   const customer: Omit<Customer, "id"> = req.body;

//   const newCustomer = new CustomerModel({
//     id: uuidv4(),
//     name: customer.name,
//     address: customer.address,
//     email: customer.email,
//   });
//   try {
//     const savedCustomer = await newCustomer.save();
//     res.status(201).json(savedCustomer);
//   } catch (error) {
//     console.error("새로운 고객 저장 실패", error);
//     res.status(500).json({ error: "고객 정보 저장 실패" });
//   }
//   // 이전에 만든 코드 주석 처리
//   //     const customer: Customer = req.body;
//   //   databaseA.customer.push({
//   //     //id: ranId(),
//   //     id: uuidv4(),
//   //     name: customer.name,
//   //     address: customer.address,
//   //     email: customer.email,
//   //     // description: customer.description,
//   //   });
//   //   res.sendStatus(200);
// });

// //index를 가지고 id 에 해당되는 customer를 찾고, index조건이 -1이 아니면 있다는 것을 이용해서 있다면, customer를 다시 써준는 것을 작성
// router.put("/api/v1/customers/:id", async (req, res) => {
//   try {
//     const customer = await CustomerModel.findOneAndUpdate(
//       { id: req.params.id },
//       req.body
//     );
//     res.json(customer);
//   } catch (error) {
//     console.error("고객정보 수정 오류", error);
//     res.status(500).json({ error: "고객 정보 수정 중 오류 발생" });
//   }

//   //이전코드 주석처리
//   //   const index = databaseA.customer.findIndex(
//   //     (customer) => customer.id === req.params.id
//   //   );
//   //   //index가 -1이 아니라면 존재한다는 뜻
//   //   if (index != -1) {
//   //     // bode를 input에 담아준다
//   //     const input = req.body;
//   //     const prev = databaseA.customer[index];
//   //     const customer = {
//   //       id: prev.id,
//   //       name: input.name,
//   //       address: input.address,
//   //       email: input.email,
//   //       //   description: input.description,
//   //     };
//   //     databaseA.customer[index] = customer;
//   //     res.sendStatus(200);
//   //   } else {
//   //     res.sendStatus(404);
//   //   }
// });

// router.delete("/api/v1/customers/:id", async (req, res) => {
//   try {
//     //delete된 결과를 담아주는 result 생성
//     const result = await CustomerModel.findOneAndDelete({ id: req.params.id });
//     res.status(200).json({ msg: "고객 정보 삭제 완료" });
//   } catch (error) {
//     console.error("고객 삭제 실패", error);
//     res.status(500).json({ error: "고객 정보 삭제 중 오류 발생" });
//   }

//   // 이전 코드 주석 처리
//   //   databaseA.customer = databaseA.customer.filter(
//   //     (customer) => customer.id != req.params.id
//   //   );
//   //   res.sendStatus(200);
// });

// //라우터 사용 설정
// app.use(router);
// app.listen({ port: PORT }, () => {
//   console.log(`127.0.0.1:${PORT}에서 실행`);
// });


















// import express from "express"
// import bodyParser from "body-parser"
// import cors from 'cors'
// import {Customer, Product} from './types'
// import databaseA from "./database"
// import customerModel from './models/customer'
// // import {v4} from 'uuid'
// import {v4 as uuidv4} from 'uuid'
// import dotenv from 'dotenv'
// import mongood from 'mongoose'
// import connectDB from './database'
// import CustomerModel from "./models/customer"

// connectDB();
// // require('dotenv').config();
// const app = express();
// const PORT = 4000;
// const router = Router(); //참조로 사용한다
// // app.use(bodyParser); 
// app.use(bodyParser.json()) //사용할것을 써줘야한다
// // app.use(cors);
// const corsOptions = {
//   origin : '*',
//   credential: true
// }
// app.use(cors(corsOptions));


// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// //mongoose connect
// mongoose.connect(process.env.MONGODB_URL || '')
// .then(() => console.log('mongodb 연결 완료'));
// .catch(err => {
//   console.error('mongodb 연결 실패', err)
// })

// const ranId = () => {
//   return Math.floor(Math.random()*1000);
// }
// //데이터베이스를 가지고 온다 below
// // router.get("/api/v1/customors" (req, res) => { //http get 요청을 이렇게 한다
// //   res.send(databaseA.customer)
// // });

// router.get("/api/v1/customors", async (req, res) => { 
//   try {
//     const customers = await customerModel.find();
//     res.json(customers);
//   }catch(error){
//     console.error('고객 조회 실패', error);
//     res.status(500).json({error: '조회 중 오류가 발생하였습니다.'})
//   }
// });

// // router.get("/api/v1/customer/:id", (req, res) => {
// //   const customer = databaseA.customers.find(
// //     (customer)
// //   )
// // })

// router.get("/api/v1/customer/:id", (req, res) => {
//   try{
//   const customer = CustomerModel.findOne( {id: req.params.id});
//   res.json(customer);
//   } catch(error){
//     console.error('고객 조회실패', error);
//     res.status(500).json({error: '조회 중 오류가 발생하였습니다.'})
//   }
// })

// // router.post("/api/v1/customers", (req, res) => {
// //   const customer: Customer = req.body;
// //   databaseA.customer.push({
// //     id:uuidv4,
// //     name: customer.name,
// //     address: customer.address,
// //     email: customer.email,
// //   });
// //   res.sendStatus(200);
// // })

// router.post("/api/v1/customers", async(req, res) => {
//   const customer: Omit<Customer, 'id'> = req.body; //타입스크립트에서 제외하기 Omit
// })

// const newCustomer = new CustomerModel({
//   id:uuidv4(),
//   name: customer.name,
//   address: customer.address,
//   email: customer.email,
// })
// try{
//   const savedCustomer = await newCustomer.save();
//   res.status(201).json(savedCustomer)
// }catch(error){
//   console.error('고객 저장 실패', error)
//   resizeBy.status(500).json({error: '데이터베이스에 고객 정보 저장 실패'})
// }

// // router.delete("/api/v1/customers/:id", async (req, res) => {
// //     databaseA.customer = databaseA.customer.filter (
// //       (customer) => customer.id != req.params.id
// //     );
// //     res.sendStatus(200);
// // })

// router.delete("/api/v1/customers/:id", async (req, res) => {
//   try {
//     const result = CustomerModel.findOneAndDelete({id: req.params.id})
//     res.status(200).json({msg: '고객 정보 삭제 완료'})
//   } catch (error) {
//     console.error('고객 삭제 실패', error)
//     res.status(500).json({error: '고객 정보 삭제 중 오류 발생하였습니다.'})
//   }
// })


// // router.put("api/v1/customers/:id", async (req, res) => {
// // }

// router.put("api/v1/customers/:id", async (req, res) => {
//   try {
//     const customer = await CustomerModel.findOneAndUpdate({id: req.params.id}, req.body)
//     res.json(customer)
//   } catch (error) {
//     console.error('고객 정보 수정 오류', error)
//     res.status(500).json({error: '고객 정보 수정 중 오류발생하였습니다.'})
//   }
// })


// app.use(router);
// app.listen({ port: PORT }, () => {
//   console.log(`127.0.0.1:${PORT}에서 실행`);
// });