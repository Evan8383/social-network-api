const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const Thought = require('./Thought');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String, 
    unique: true,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  thoughts: [Thought],
  friends: [this._id],
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
}
);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;