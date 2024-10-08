const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(
  express.json({
    extended: true,
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.use("/", require("./routes/v1/router"));

app.get("/", (req, res) => {
  res.send("Hello World from Express");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
