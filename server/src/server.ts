export {};
let express = require("express");
const server = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");

server.use(bodyParser.json());

server.use("/api/product", require("./routes/product"));

server.listen(PORT, () => {
  console.log(`server running at PORT_${PORT}`);
});
