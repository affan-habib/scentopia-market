const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: "1",
    name: "Rose & Oud",
    price: 280,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75",
    description: "A sophisticated blend of Damascus rose and rare oud wood.",
    category: "Oriental",
    subCategory: "Woody",
    gender: "unisex",
    rating: 4,
  },
  {
    id: "2",
    name: "Vetiver Dreams",
    price: 240,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
    description: "Fresh vetiver mixed with citrus notes and amber.",
    category: "Fresh",
    subCategory: "Citrus",
    gender: "men",
    rating: 5,
  },
  {
    id: "3",
    name: "Midnight Jasmine",
    price: 260,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
    description: "Night-blooming jasmine with hints of vanilla and musk.",
    category: "Floral",
    subCategory: "White Floral",
    gender: "women",
    rating: 4,
  },
];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});