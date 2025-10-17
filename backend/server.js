const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer'); 
const Product = require('./models/product');
const Category = require('./models/category');
const Order = require('./models/order');
const Message = require('./models/message');
const User = require('./models/user');

const app = express();
const port = 3000;

// --- Multer Configuration ---
// This tells multer where to store uploaded files and how to name them.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Files will be saved in an 'uploads' folder in the project's root directory
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: function (req, file, cb) {
    // To avoid naming conflicts, add the current timestamp to the filename
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });


// --- Database Connection ---
const dbURI = 'mongodb+srv://scentsational:scentsational69@scentsational.xrssjxr.mongodb.net/?retryWrites=true&w=majority&appName=ScentSational';

mongoose.connect(dbURI)
  .then((result) => {
    console.log('Successfully connected to MongoDB!');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));


// ## MIDDLEWARE ##
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));
// Make the 'uploads' folder publicly accessible so images can be displayed
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));


// ## API ROUTES ##

// --- ORDER ROUTES ---

// CREATE a new order
app.post('/api/orders', (req, res) => {
  const order = new Order({
    customerName: req.body.customerName,
    items: req.body.items,
    totalPrice: req.body.totalPrice,
  });

  order.save()
    .then(result => res.status(201).json(result))
    .catch(err => res.status(500).json({ error: 'Failed to create order' }));
});

// GET all orders
app.get('/api/orders', (req, res) => {
  Order.find().sort({ createdAt: -1 })
    .populate('items.productId') // Populates product details in the order
    .then(orders => res.json(orders))
    .catch(err => res.status(500).json({ error: 'Failed to fetch orders' }));
});

// UPDATE an order's status
app.put('/api/orders/:id', (req, res) => {
  Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true })
    .then(updatedOrder => res.json(updatedOrder))
    .catch(err => res.status(500).json({ error: 'Failed to update order' }));
});

// DELETE an order by ID
app.delete('/api/orders/:id', (req, res) => {
  const id = req.params.id;
  Order.findByIdAndDelete(id)
    .then(result => {
      if (!result) { return res.status(404).json({ error: 'Order not found' }); }
      res.json({ message: 'Order deleted successfully' });
    })
    .catch(err => res.status(500).json({ error: 'Failed to delete order' }));
});


// --- CATEGORY ROUTES ---

// GET all categories
app.get('/api/categories', (req, res) => {
  Category.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(500).json({ error: 'Failed to fetch categories' }));
});

// CREATE a new category
app.post('/api/categories', (req, res) => {
  const category = new Category({ name: req.body.name });
  category.save()
    .then(result => res.status(201).json(result))
    .catch(err => res.status(400).json({ error: 'Failed to create category' }));
});

// UPDATE a category
app.put('/api/categories/:id', (req, res) => {
  Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
    .then(updatedCategory => res.json(updatedCategory))
    .catch(err => res.status(500).json({ error: 'Failed to update category' }));
});

// DELETE a category
app.delete('/api/categories/:id', (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Category deleted successfully' }))
    .catch(err => res.status(500).json({ error: 'Failed to delete category' }));
});

// --- MESSAGE ROUTES ---

// CREATE a new message from contact form
app.post('/api/messages', (req, res) => {
  const message = new Message(req.body);
  message.save()
    .then(result => res.status(201).json(result))
    .catch(err => res.status(500).json({ error: 'Failed to send message' }));
});

// GET all messages
app.get('/api/messages', (req, res) => {
  Message.find().sort({ createdAt: -1 })
    .then(messages => res.json(messages))
    .catch(err => res.status(500).json({ error: 'Failed to fetch messages' }));
});

// DELETE a message
app.delete('/api/messages/:id', (req, res) => {
    Message.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Message deleted successfully' }))
    .catch(err => res.status(500).json({ error: 'Failed to delete message' }));
});


// --- IMAGE UPLOAD ROUTE ---
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  // Send back the path to the newly uploaded file
  res.json({ filePath: `/uploads/${req.file.filename}` });
});


// --- PRODUCT ROUTES ---

// GET all products
app.get('/api/products', (req, res) => {
  Product.find().sort({ createdAt: -1 })
    .populate('category') // Fetches the associated category details
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ error: 'Failed to fetch products' }));
});

// GET all menu items (can be the same as products)
app.get('/api/menu-items', (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ error: 'Failed to fetch menu items' }));
});

// CREATE a new product
app.post('/api/products', (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    imageUrl: req.body.imageUrl
  });
  product.save()
    .then(result => res.status(201).json(result))
    .catch(err => {
      console.error("Failed to create product:", err);
      res.status(500).json({ error: 'Failed to create product' })
    });
});

// GET a single product by ID
app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  Product.findById(id)
    .then(product => {
      if (!product) { return res.status(404).json({ error: 'Product not found' }); }
      res.json(product);
    })
    .catch(err => res.status(500).json({ error: 'Failed to fetch product' }));
});

// UPDATE a product by ID
app.put('/api/products/:id', (req, res) => {
  const id = req.params.id;
  Product.findByIdAndUpdate(id, req.body, { new: true })
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.status(500).json({ error: 'Failed to update product' }));
});

// DELETE a product by ID
app.delete('/api/products/:id', (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then(result => {
      if (!result) { return res.status(404).json({ error: 'Product not found' }); }
      res.json({ message: 'Product deleted successfully' });
    })
    .catch(err => res.status(500).json({ error: 'Failed to delete product' }));
});


// --- USER AUTHENTICATION ROUTES ---

// User Sign Up
app.post('/api/signup', (req, res) => {
  const newUser = new User({
    fullName: req.body.fullName,
    username: req.body.username,
    password: req.body.password,
  });
  newUser.save()
    .then(user => res.status(201).json(user))
    .catch(err => res.status(400).json({ error: 'Username may already be taken.' }));
});

// User Sign In
app.post('/api/signin', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username })
    .then(user => {
      if (!user) { return res.status(404).json({ error: 'User not found.' }); }
      if (user.password !== password) { return res.status(401).json({ error: 'Incorrect password.' }); }
      res.json({ message: 'Login successful!', user: { id: user._id, username: user.username } });
    })
    .catch(err => res.status(500).json({ error: 'An error occurred.' }));
});

// GET all users
app.get('/api/users', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: 'Failed to fetch users' }));
});

// GET orders for a specific user
app.get('/api/users/:id/orders', (req, res) => {
    Order.find({ customerName: req.params.id })
        .then(orders => res.json(orders))
        .catch(err => res.status(500).json({ error: 'Failed to fetch orders' }));
});


// UPDATE a user's password
app.put('/api/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, { password: req.body.password }, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(500).json({ error: 'Failed to update user' }));
});

// DELETE a user by ID
app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
        .then(result => {
            if (!result) { return res.status(404).json({ error: 'User not found' }); }
            res.json({ message: 'User deleted successfully' });
        })
        .catch(err => res.status(500).json({ error: 'Failed to delete user' }));
});


// ## ADMIN ROUTES ##

// Serve the admin login page
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'admin', 'login.html'));
});

// Handle admin login
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password123') {
    res.redirect('/admin/dashboard');
  } else {
    res.send('Invalid username or password. <a href="/admin">Try again</a>');
  }
});

// Serve the main admin dashboard page
app.get('/admin/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin', 'index.html'));
});

// Serve the admin products management page
app.get('/admin/products', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin', 'products.html'));
});

// Serve the admin orders management page
app.get('/admin/orders', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin', 'orders.html'));
});

// Serve the admin categories management page
app.get('/admin/categories', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin', 'categories.html'));
});

// Serve the admin messages management page
app.get('/admin/messages', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin', 'messages.html'));
});

// Serve the admin users management page
app.get('/admin/users', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin', 'users.html'));
});