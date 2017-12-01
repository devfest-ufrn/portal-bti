exports.setUser = (id) => {
    let mongoose = require('mongoose');
    mongoose.connect('0.0.0.0:27017/test');
    let userSchema = require('./userSchema');
    var userData = mongoose.model('userData',userSchema);
    
    
    var data = new userData({id_discente:id});
    data.save();
}