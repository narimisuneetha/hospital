var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//change the database connection URL with yours
mongoose.connect('mongodb+srv://suneetha536marolix:giTze3rlvmVoPAm4@cluster0.mnv4bve.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully!');
}).catch((error) => {
  console.error('Error connected to MongoDB:', error.message);
});

module.exports = {mongoose};
