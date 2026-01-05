const express = require('express');
const mongoose = require('mongoose');
const Product =  require('./Modules/product');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cloudinary = require('./Cloudinary/cloudinary');


const port = 4000;

const databaseUrl = process.env.DATABASE_URL

let app = express();
app.use(express.json());
app.use(cors(
    {origin: "*"}
));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer configuration
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });



// Post-Method
app.post("/product", upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No image file provided');
    }

    try {
        // Upload the file saved by multer to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, { folder: '4nine_products' });

        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            imageUrl: result.secure_url,
        });

        await newProduct.save();

        // Remove the local file after upload
        fs.unlink(req.file.path, (err) => {
            if (err) console.error('Failed to delete local file:', err);
        });

        res.send('Product saved successfully!');
    } catch (err) {
        console.error('Error uploading to Cloudinary or saving product:', err);
        res.status(500).send('Error saving product: ' + err);
    }
});


//Get-Method
app.get("/products",(req,res)=>{
    Product.find().then((products)=>{
        res.json(products);
    }).catch((err)=>{
        res.status(500).send('Error retrieving products: ' + err);
    });
})

app.get("/products/:id", (req,res)=>{
    const productId = req.params.id;
    Product.findById(productId).then((product)=>{
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    }).catch((err)=>{
        res.status(500).send('Error retrieving product: ' + err);
    });
});


app.get('/', (req, res) => {
  res.send('Welcome to the 4Nine Backend!');
});


// Connect MongoDB
mongoose.connect(databaseUrl).then(() => {
    console.log('Connected to MongoDB');
    }
).catch((err) => {
    console.error('Error connecting to MongoDB', err);
}
);


app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});