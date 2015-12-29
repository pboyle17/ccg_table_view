var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/';

mongoose.connect(connectionString);

mongoose.connection.on('connected',function(){
  console.log('connected to the database');
});

mongoose.connection.on('error',function(err){
  console.log(err);
});

mongoose.connection.on('disconnected',function(){
  console.log('hes dead jim');
});
