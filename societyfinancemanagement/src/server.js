const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// User schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

// Routes
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Implement other CRUD operations as needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

