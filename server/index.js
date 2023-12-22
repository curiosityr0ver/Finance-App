import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { MongoClient } from "mongodb";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(9000, () => console.log(`Server Port: 9000`));

app.get("/", async (req, res) => {

  const mongoClient = new MongoClient('mongodb+srv://ranvijay:Ytrewq321@cluster0.xpzam.mongodb.net/?retryWrites=true&w=majority'
  );

  console.log("*********** hey ***********");
  const data = await mongoClient.db().collection('kpis').find().toArray();
  const products = await mongoClient.db().collection('products').find().toArray();
  const transactions = await mongoClient.db().collection('transactions').find().toArray();

  const proData = JSON.parse(JSON.stringify(data))
  const proProducts = JSON.parse(JSON.stringify(products))
  const proTransactions = JSON.parse(JSON.stringify(transactions))

  res.json([proData, proProducts, proTransactions])
})

