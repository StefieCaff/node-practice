const express = require('express');
const app = express();
const myRouter = require('./my-router');

app.use('/my-router', myRouter);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact page</h1>');
});

app.get('/contact/:id', (req, res) => {
  res.send(`<h1>Contact</h1> Parameter: ${req.params.id}`);
});

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

