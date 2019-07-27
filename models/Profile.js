const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  idtype: {
    type: String,
    required: true
  },
  idnumber: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  hobbies: {
    type: [String],
    required: true
  },
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      finishdate: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
