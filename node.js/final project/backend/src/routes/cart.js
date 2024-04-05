const express = require("express");
const {addItemToCart,getCartitem, deleteCartitem} = require("../controller/cart");

const router = express.Router();

router.post("/cart/addtocart/:id", addItemToCart);
router.get("/cart/getcart", getCartitem);
router.delete("/cart/deletecart/:pid", deleteCartitem);


module.exports = router;