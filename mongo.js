const mongoose = require("mongoose");
const { Schema } = mongoose;
const MONGO_DBNAME = "capstoneapi";
const mongo = {
  schema: Schema,
  Model: mongoose.model,
  async Connect() {
    try {
      await mongoose.connect(
        "mongodb+srv://admin:1234@lakshman.4dwgr.mongodb.net/capstoneapi?retryWrites=true&w=majority"
      );

      console.log(`Mongo DB Connected successfully...`);
    } catch (err) {
      console.log(`error connecting th db ${err}`);
    }
  },
};
module.exports = mongo;
