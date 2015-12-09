var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://127.0.0.1/person');
mongoose.model('User',new mongoose.Schema({
    username:String,
    password:String
}));

mongoose.model('Article',new mongoose.Schema({
    title:String,
    content:String,
    poster:String,
    user:{type:ObjectId,ref:'User'}
}));


global.Model = function (modlName){
    return mongoose.model(modlName);
};
