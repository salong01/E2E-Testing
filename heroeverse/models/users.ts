const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    password: {
        type: String
    }
},{ timestamps: true 
}, {
    collection: 'Users'
})

export default mongoose.model('Users', UserSchema);