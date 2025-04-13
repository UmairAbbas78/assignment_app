const express = require('express');
const app = express();
const config = require('./config/config');
const db = require('./models');

app.use(express.json());

app.use('/api/auth', require('./routes/auth.routes'));

db.sequelize.sync({ alter: true }).then(() => {
    console.log('Database synchronized!');
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  }).catch(err => {
    console.error('Error syncing database:', err);
  });