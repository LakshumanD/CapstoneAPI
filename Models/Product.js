const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Rating: { type: Number, required: true },
  ImageSource: { type: String, required: false },
});
const Product = mongoose.model("Product", productSchema, "Product");

module.export = Product;
