import mongoose from 'mongoose';

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String },
  episodes: { type: Number },
  description: { type: String },
});

const Anime = mongoose.model('Anime', animeSchema);

export default Anime;