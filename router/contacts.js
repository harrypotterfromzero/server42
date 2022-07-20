import express, { response } from "express";
var app = express.Router();
import fetch from "node-fetch";
// app.use(expressEjsLayouts);
// app.set('view engine', 'ejs');
// import jsdom, { JSDOM } from 'jsdom'

// global.document = new JSDOM().window.document;
app.get("/", async (req, res) => {
  const url = `http://10.4.18.46:13081/SM/9/rest/contacts`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic aHB0LmFkbWluOmhwdGhuYWRtaW4=",
      Connection: "closed",
    },
  };
  const response = await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const html = data.content
        .map((user) => {
          // return ` ${user.Contact.ContactName}`;
          return user
        });
        // .join("");
        console.log(JSON.stringify(html));
      res.render("contacts", { data: html });
    })
    .catch((e) => {
      console.error({
        message: "co loi",
        error: e,
      });
    });
  //     const html = data.content.map((user) => {
  //   return `${user.Contact}`
  // })

  // res.send(response.json())
  // console.log(array);
});

export default app;
