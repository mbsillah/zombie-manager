const { model, Schema } = require('mongoose');

const locationSchema = new Schema({
  name: String,
  zombies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Zombie',
    },
  ],
});

module.exports = model('Location', locationSchema);
