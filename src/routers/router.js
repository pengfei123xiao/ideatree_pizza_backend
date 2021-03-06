"use strict";
const Router = require("koa-router");
const router = new Router();

// user controller
const createUser = require("../controllers/user/create");
const deleteUser = require("../controllers/user/delete");
const updateUser = require("../controllers/user/update");
const getUser = require("../controllers/user/get");
const Login = require("../controllers/user/login");
const getUserOrders = require("../controllers/user/userOrder");
const listUser = require("../controllers/user/list");

//product controller
const getProduct = require("../controllers/products/get");
const productList = require("../controllers/products/productList");
const updateProduct = require("../controllers/products/update");
const deleteProduct = require("../controllers/products/delete");

// address controller
const createAddress = require("../controllers/address/create");
const getAddressByUserId = require("../controllers/address/getByUserId");
const deleteAddress = require("../controllers/address/delete");
const updateAddress = require("../controllers/address/update");
const listAddress = require("../controllers/address/list");

// order controller
const createOrder = require("../controllers/order/create");
const getOrder = require("../controllers/order/get");
const bulkGetOrder = require("../controllers/order/bulkGet");
const deleteOrder = require("../controllers/order/delete");
const updateOrder = require("../controllers/order/update");
const listOrder = require("../controllers/order/list");

//store controller
const getStores = require("../controllers/stores/get");

//topping controller
const getTopping = require("../controllers/toppings/get");

//user middleware
const ExpandUsername = require("../middleware/ExpandUsername");
const deleteItem = require("../controllers/products/delete");

// user CRUD
router.post("/user/login", Login);
router.post("/user/signup", ExpandUsername, createUser);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.get("/user/:page/:pageSize", listUser);

//user orders
router.get("/userorders/:id", getUserOrders);

//product
router.get("/products", getProduct);
router.get("/products/:page/:pageSize", productList);
router.put("/products/item/:id/:idOfItem", updateProduct);
router.delete("/products/item/:id/:idOfItem", deleteProduct);

// topping controller
router.get("/toppings", getTopping);

// order CRUD
router.post("/order", createOrder);
router.get("/order", bulkGetOrder);
router.get("/order/:id", getOrder);
router.delete("/order/:id", deleteOrder);
router.put("/order/:id", updateOrder);
router.get("/order/:page/:pageSize", listOrder);

// address CRUD
router.post("/address", createAddress);
router.get("/address/:id", getAddressByUserId);
router.delete("/address/:id", deleteAddress);
router.put("/address/:id", updateAddress);
router.get("/address/:page/:pageSize", listAddress); // pagination

// store CRUD
router.get("/stores", getStores);

module.exports = router;
