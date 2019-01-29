//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {                    
    if(err)
        return console.log('Unable to connect to MongoDB server.');
    
    console.log('Connected to MongoDB server.');
   
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5c4d71d007a1477ce9251eb2")
    }, {
        $set: {
            completed: false,
            name: "Waqas"
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    
//    db.close();
});