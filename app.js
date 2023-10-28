const path = require('path');

const express = require('express');
const db = require("./data/database");
const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(authRoutes);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to the database!");
    console.log(error);
  });


// const path = require('path');
// const fs = require('fs');



// const express = require('express');
// const app = express();
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
// //static file serving

// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: false }));


// //requesest
// app.get('/', (req, res) => {
//     res.render('index');
// });


// app.listen(3000);