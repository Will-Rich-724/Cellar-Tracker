const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopolgy: true
})
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Error"));
