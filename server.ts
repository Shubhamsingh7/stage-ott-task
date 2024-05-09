const  express = require('express');
const path = require('path');
const cors = require('cors');

// data import 
const  { storyList } = require('./data/story.ts');

const app = express();

app.use(cors());
const SERVER_PORT = 5000;


app.use(express.static(path.join(__dirname, 'public')));

// serve the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// serve stories data
app.get('/api/stories', async (req, res) => {
    res.json(storyList);
});

// Start the server
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});




