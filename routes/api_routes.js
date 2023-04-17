const router = require('express').Router();
// above line pulls in the router
// Data routes:  Select all from courses - return all courses
// pull in models
const {Products,Store} = require('../models');

// Route to GET all books
// set root: http://localhost:3000/api/books
router.get('/products', async(req,res)=> {
    const product  = await Products.findAll();

    res.send(product);
});

// Route to CREATE a book
// POST http://localhost:3000/api/books
router.post ('/products', async (req,res) =>{
    const bookData =req.body;

    const newProduct = await Products.create(bookData);

    res.send(newProduct);
})

// Route to GET all stores
router.get('/stores', async(req,res)=> {
    const stores = await Store.findAll();

    res.send(stores);
});

// Route to CREATE all stores.
router.post ('/stores', async (req,res) =>{
    const storeData =req.body;

    const newStore = await Store.create(storeData);

    res.send(newStore);
});

module.exports = router;
