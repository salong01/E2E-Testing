const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let HeroSchema = new Schema({
    name: {
        type: String
    },
    faction: {
        type: String
    },
    description: {
        type: String
    }
}, {
    collection: 'Heroes'
})

export default mongoose.model('Heroes', HeroSchema);