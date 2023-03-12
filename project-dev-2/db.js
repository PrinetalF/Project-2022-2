const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project-dev-2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
