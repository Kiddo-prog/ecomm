const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ecomm', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Database connected..."))
.catch((error) => {
    console.log(error)
})