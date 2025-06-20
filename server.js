const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'templates')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.get('/extract', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/enhancement.html'));
});

app.get('/remove', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/enhancement.html'));
});

app.get('/reorder', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/enhancement.html'));
});

app.get('/merge', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/enhancement.html'));
});

app.get('/addwatermark', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/enhancement.html'));
});

app.get('/insert', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/enhancement.html'));
});

app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/enhancement.html'));
});

app.get('/htmltopdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/enhancement.html'));
});

app.get('/imagetopdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/enhancement.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
