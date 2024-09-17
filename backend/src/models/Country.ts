import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema({
  name: String,
  population: Number,
  region: String,
  capital: String,
  flag: String,
  currencies: [String],
  languages: [String],
  timezones: [String]
});

export const Country = mongoose.model('Country', CountrySchema);
