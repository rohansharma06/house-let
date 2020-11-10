const mongoose = require('mongoose');

const URI = 'mongodb+srv://houserent:houserent@cluster0.nfpbw.mongodb.net/<dbname>?retryWrites=true&w=majority';

// mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/renting_app',{useNewUrlParser: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
// db.once('open', function(){
//     console.log('Connected to Database :: MongoDB');
// });

const db = async () => {
    await mongoose.connect(URI, {  useUnifiedTopology: true,useNewUrlParser: true});
    console.log('Connected to Database :: MongoDB');
};


module.exports = db;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://houserent:houserent@cluster0.nfpbw.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useUnifiedTopology: true , useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// module.exports = MongoClient;
