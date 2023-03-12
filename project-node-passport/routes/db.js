const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project-node-passport', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
