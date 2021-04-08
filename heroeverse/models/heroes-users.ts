const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let HeroUserSchema = new Schema({
    user: {
        type: String
    },
    name: {
        type: String
    }
}, {
    collection: 'Heroes-Users'
})

export default mongoose.model('Heroes-Users', HeroUserSchema);