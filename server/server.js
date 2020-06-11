import express from 'express';
const app = express();
const bodyParser = require('body-parser')

const PORT = 5000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Woosh ✈️')
});

app.post('/flights', (req, res, next) => {
  console.log(req.body)
  res.json(req.body);
  debugger
  res.send('Hi');
})

app.listen(PORT, () => console.log(`Rubiq flight app listening at http://localhost:${PORT}`));
