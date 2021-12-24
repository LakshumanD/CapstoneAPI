const express = require("express");
const PORT = process.env.PORT || 3001;
const mongo = require("./mongo");

const app = express();
const cors = require("cors");
(async () => {
  try {
    // middleware
    app.use(express.json());
    app.use(cors());

    await mongo.Connect();

    //listen the port
    app.listen(PORT, (req, res) => {
      console.log("request port " + PORT);
    });
  } catch (err) {
    console.log(`error starting app ${err}`);
  }
})();
