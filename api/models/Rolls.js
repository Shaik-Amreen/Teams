var mongo = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const teamS=new Schema({
    rollnum: {type:String},
    name:{type:String},
 },{ collection : 'teams' })
const team=
 mongoose.model('team',teamS);
 module.exports = {team};



 


 