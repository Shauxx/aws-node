const express = require('http');

const app = express();
app.get('/', (req, res) => res.send('Hello, world!'));

app.listen(3000);
console.log('Server on port 3000');