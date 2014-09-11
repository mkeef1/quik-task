'use strict';

var Mongo = require('mongodb');

function Priority(){
}

Object.defineProperty(Priority, 'collection', {
  get: function(){return global.mongodb.collection('priorities');}
});

Priority.create = function(o, cb){
  Priority.collection.save(o, cb);
};

Priority.all = function(cb){
  Priority.collection.find().toArray(cb);
};

Priority.findById = function(id, cb){
  id = Mongo.ObjectID(id);
  Priority.collection.findOne({_id:id}, cb);
};

module.exports = Priority;
