const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB

mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');

// create schema

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo

/* Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description lorem ipsum 2',
}); */

// read a photo

/* Photo.find({}, (err, data) => {
  console.log(data);
}); */

// update a photo

/* const id = '6396f00bf69585571df17ed4';

Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 111 Updated',
    description: 'Photo description 111 updated',
  },
  { new: true },
  (err, data) => {
    console.log(data);
  }
); */

// delete a photo
const id = '6396f1b237939ccea9d76f2b';
Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is removed..');
});
