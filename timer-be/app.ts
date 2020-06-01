import dotenv = require("dotenv");
dotenv.config();
import express = require("express");
import jsonwebtoken = require("jsonwebtoken");
import cors = require("cors");
import helmet = require("helmet");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(helmet());

type JwtPayload = { id: string; user: string };

app.get("/", (req, res) => {
  const {
    query: { jwt },
  } = req;
  const savedId = "THIS_IS_RANDOM_STRING";

  jsonwebtoken.verify(jwt.toString(), process.env.JWT_SECRET, function (
    err,
    decoded: any
  ) {
    if (!err && savedId === decoded.id && decoded.user) {
      return res.status(200).json({ user: decoded.user });
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  });
});

app.listen(port, () => console.log(`listening on port: ${port}`));

export default app;
