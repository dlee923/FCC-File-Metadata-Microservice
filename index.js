var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
let bodyParser = require('body-parser');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// enable bodyParser
app.use('/', bodyParser.urlencoded({ extended: false }));

app.post('/api/fileanalyse', upload.single("upfile"), function(req, res) {
  console.log(req.body);
  console.log(req.files);
  let filePropertiesObj = {
    name: 'filename',
    type: 'filetype',
    size: 'filesize'
  }
  res.json(filePropertiesObj);
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
