const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Word = require('./Message')
const app = express();
app.use(cors({
  origin: ["https://deploy-mern-lmhq.vercel.app"],
  methods:['POST',"GET"],
  credentials:true,  // Allow all origins, or you can specify your deployed frontend URL
})); app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const URL = 'mongodb+srv://bbappuser:bbappuser1@restaurentdetails.lpjnw.mongodb.net/restaurantdb?retryWrites=true&w=majority';

mongoose.connect(URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.post('/message', async (req, res) => {
  const { word } = req.body;
  console.log("Received data:", word);

  try {
    const newWord = new Word({
      word

    })
    await newWord.save();


    res.status(201).json({ success: true, message: "Data received successfully", data: { word } });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
