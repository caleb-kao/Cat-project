const express = require('express');
const app = express();
const path = require('path');

// uncomment the below for proxy challenge

const leaderList = [
  { name: 'Anna', id: 'a0' },
  { name: 'Ben', id: 'b0' },
  { name: 'Clara', id: 'c0' },
  { name: 'David', id: 'd0' },
];

app.get('/signup', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../client/signup.html'));
});

app.get('/api/leaders', (req, res) => {
  return res.status(200).send(leaderList);
});


// statically serve everything in the build folder on the route '/build'
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

