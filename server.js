const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'templates')))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.get('/extract', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/extract.html'));
});

app.get('/remove', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/remove.html'));
});

app.get('/reorder', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/reorder.html'));
});

app.get('/merge', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/merge.html'));
});

app.get('/addwatermark', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/addwatermark.html'));
});

app.get('/insert', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/insert.html'));
});

app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/create.html'));
});

app.get('/htmltopdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/htmltopdf.html'));
});

app.get('/imagetopdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/imagetopdf.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
