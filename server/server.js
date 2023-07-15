const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const authRoutes = require('./routes/auth.js');
const binRoutes = require('./routes/bins.js');
const port = process.env.PORT || 8800;

app.use(express.json());
app.use(cookieParser());

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

app.use('/api/auth', authRoutes);
app.use('/api/bins', binRoutes);

/*
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
*/

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
