const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let UserHeroesSchema = new Schema({
    username: {
        type: String
    },
    hero: {
        type: String
    }
}, {
    collection: 'UserHeroes'
})

export default mongoose.model('UserHeroes', UserHeroesSchema);