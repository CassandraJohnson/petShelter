var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
//Below is example create a schema
var PetSchema = new mongoose.Schema({
	name: { type: String, required: 'Pet name cannot blank!', unique: [true, 'Pets name already exist!'], trim: true, minlength: [3, 'Pet name must be longer than 3 characters']},
	pettype: { type: String, required: 'Pet type cannot blank!', trim: true, minlength: [3, 'Pets type must be longer than 3 characters']},
	description: { type: String, required: 'Description cannot blank!', trim: true, minlength: [3, 'Description must be longer than 3 characters']},
	skill1: { type: String},
	skill2: { type: String},
	skill3: { type: String},
	like_count: { type: Number, default: 0 }
	},{ timestamps: true })

PetSchema.plugin(uniqueValidator);
mongoose.model('petshelter', PetSchema); 