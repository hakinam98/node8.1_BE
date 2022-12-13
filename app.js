const cors = require('cors');
const express = require('express');
const http = require('http');
const app = express();
app.use(express.json());

app.use(cors());

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(shopRoutes)
app.use('/admin', adminRoutes)

const server = http.createServer(app);
server.listen(5000);