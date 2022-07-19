import express from "express";
const app = express();
import bodyParser from "body-parser";
import Contacts from "./router/contacts.js";
import path from "path";
const __dirname = path.resolve();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//set templating engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//nhan su
app.use("/contacts", Contacts);



//kiem tra port
app.listen(process.env.PORT || 8081, () => {
  console.log("Server is started on 127.0.0.1:" + (process.env.PORT || 8081));
});
