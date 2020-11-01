const { model, Schema } = require('mongoose');

const zombieSchema = new Schema({
  name: String,
  actor: String
});

module.exports = model('Zombie', zombieSchema);
