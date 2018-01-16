var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27018/mongoose_test', {useMongoClient: true});
mongoose.connection.once('open', function(){
    console.log('连接成功！');
});
var Schema = mongoose.Schema;

var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: String
});

var StuModel = mongoose.model('students', stuSchema);
StuModel.create({
    name: 'xiao',
    age: 28,
    gender: 'male'
}, function(err) {
    if (!err) {
        console.log('插入成功！');
    }
});