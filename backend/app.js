import express from "express";
import morgan from "morgan"


import { router } from "./routes/apiRoutes.js";


const app = express()
const port = process.env.PORT || 8000;

app.use(morgan('dev'))
app.use(express.json())
app.use((req, res, next) => {
  const origin = req.get('origin');
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow additional HTTP methods
  next();
});

app.use("/api", router)


app.listen(port, console.log(`Server running on ${port}`))
