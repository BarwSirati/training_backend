const express = require("express");
const app = express();
const { userRoute } = require("./routes");
require("./db/conn").connect()
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: false }));

app.use("/user", userRoute);

app.listen(3000);
