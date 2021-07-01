export {};
const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");
const path = require("path");

type ProductType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  rate: number;
};

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const readFile = async (path: string) => {
  try {
    const data = await readFileAsync(path, "utf8");
    const result = JSON.parse(data);
    return result;
  } catch (err) {
    console.log("error:", err);
  }
};

/**
 * @route   GET api/product
 * @desc    Get all products
 * @access  Public
 */
router.get("/", async (req: any, res: any) => {
  try {
    const products = await readFile(
      path.join(__dirname, "..", "data", "products.json")
    );
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ msg: "Server error..." });
  }
});

/**
 * @route   PUT api/product
 * @desc    For admin to update old product
 * @access  Private
 */
// @route   PUT api/product
// @desc    For admin to update old product
// @access  Private
router.put("/:productId", async (req: any, res: any) => {
  const productId = +req.params.productId;
  const { newRate } = req.body;
  const filePath = path.join(__dirname, "..", "data", "products.json");
  try {
    const products = await readFile(filePath);

    const newProducts = products.map((product: ProductType) => {
      if (product.id === productId) {
        return { ...product, rate: newRate };
      }
      return product;
    });
    await writeFileAsync(filePath, JSON.stringify(newProducts));
    return res.status(200).json({ message: "Thank you for rating." });
  } catch (err) {
    return res.status(500).json({ msg: "Server error..." });
  }
});

module.exports = router;
