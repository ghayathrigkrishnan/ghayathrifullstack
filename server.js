// server.js
const express = require('express');
const mongoose = require('mongoose');
const Contact = require('./models/contact.js');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || mongodb+srv://ghayu2006:ghayathri@cluster0.ec4cpsl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// POST route - Save contact form
app.post('/api/contact', async (req, res) => {
  const { companyName, email, phone, message } = req.body;

  console.log('Received POST data:', req.body); 

  if (!companyName || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const contactEntry = new Contact({ companyName, email, phone, message });

  try {
    await contactEntry.save();
    res.status(200).json({ message: 'Contact submitted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
