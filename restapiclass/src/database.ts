// import {Customer, Product} from './types'



// const customer: Customer[] = [
//   {id:1, name: "hjy", address: "abcabc", email:"ee@eee;", description: "222"},
//   {id:2, name: "yong", address: "abcabc", email:"ee@eee;", description: "222"},
//   {id:3, name: "hjy", address: "abcabc", email:"ee@eee;", description: "222"},
// ]

// const products: Product[] = [
//   {id: "1", name: "product1", description: "product1_설명, price: 10000"},
//   {id: "2", name: "product2", description: "product2_설명, price: 20000"},
//   {id: "3", name: "product3", description: "product3_설명, price: 30000"},
// ]

// const databaseA = { //database로 내보내주기
//   customer,
//   products
// }

// export default databaseA

//mongoDB



import mongoose from 'mongoose'
import dotenv from 'dotenv' //환경변수에 저장해놓은 것을 가져올수 있게


// const connectDB = () => {
//   try {
//     mongoose.connect {process.env.MONGODV_URL || ''};
//     console.log('mongoDB 연결됨');
//   } catch(error) {
//     console.error('MongoDB 연결안됨', error);
//   }
// }

dotenv.config()
const connectDB = async() => {
  try {
    await mongoose.connect (process.env.MONGODB_URL || '');
    console.log('mongoDB 연결됨');
  } catch(error) {
    console.error('mongoDB 연결안됨', error);
  }
}

export default connectDB;
