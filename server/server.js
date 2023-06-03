const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const authRoutes = require('./routes/auth.js');
const port = process.env.PORT || 8800;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);

/*
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
*/

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
