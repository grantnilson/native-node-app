const express = require("express");
const app = express();
const port = 8000;

let details = [
  { id: 1, title: "test 1", content: "desk 1" },
  { id: 2, title: "test 2", content: "desk 2" },
  { id: 3, title: "test 3", content: "desk 3" },
];

//get list

app.get("/details", (req, res) => {
  res.json(details);
});

//get by id

app.get("/details/:id", (req, res) => {
  const detail = details.find((a) => a.id === parseInt(req.params.id));
  if (!detail) return res.status(404).send("Detail not found");
  res.json(detail);
});

//create

app.post("/details", (req, res) => {
  const detail = {
    id: details.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  details.push(detail);
  res.json(detail);
});

//update

app.put("/details/:id", (req, res) => {
  const detail = details.find((a) => a.id === parseInt(req.params.id));
  if (!detail) return res.status(404).send("Detail not found");
  detail.title = req.body.title;
  detail.content = req.body.content;
  res.json(detail);
});

//delete

app.delete("/details/:id", (req, res) => {
  const detail = details.find((a) => a.id === parseInt(req.params.id));
  if (!detail) return res.status(404).send("Detail not found");
  const index = details.indexOf(detail);
  details.splice(index, 1);
  res.json(detail);
});

app.listen(port, () =>
  console.log(`Details API listening at http://10.251.181.93:${port}`)
);
