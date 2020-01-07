const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema ({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   done: {
      type: Boolean,
      default: false
   },
   createAt: {
      type: Date,
      default: Date.now
   }
});

mongoose.model('Task', TaskSchema);