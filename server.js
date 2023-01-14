const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect to the database
connectDB();

app.get('/', (req, res) => res.send({ msg: 'welcome to contact api' }));

//Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
