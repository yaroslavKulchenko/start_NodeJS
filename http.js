const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    User = require('./models/UserModel'),
    port = process.env.PORT || 3000
    routes = require('./routes.js');
    
mongoose.connect('mongodb://localhost/users_db');
routes(app);
app.listen(port);