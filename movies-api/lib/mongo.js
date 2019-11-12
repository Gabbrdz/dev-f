const { MongoClient, ObjectId } = require('mongodb');

const { config } = require('../configuration');

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${config.port}/${DB_NAME}?retryWrites=true&w=majority`

class Mongolib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, {useNewurlParser: true,
        useUnifiedTopology: true});
        this.dbName = DB_NAME
    }

    connect(){
        if (!Mongolib.connection) {
            Mongolib.connection = new Promise((resolve, reject) =>{
                this.client.connect((err)=>{
                    if(err) {
                        reject(err)
                    }
                    console.log("Connected successfully to Mongo")
                    resolve(this.client.db(this.dbName))
                })
            })
        } 
        return Mongolib.connection;
    }
    getAll( collection, query ) {
        return this.connect().then(db => {
        return db
        .collection(collection)
        .find(query)
        .toArray()
        });
    }

    get(collection,id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id: ObjectId(Id)});
        });
    }

    create(collection, data) {
        return this.connect().then(db =>{
            return db.collection(collection).insertOne(data);
        })
        .then(result => result.inserId);   
    }

    update(collection,  data, id){
        return this.connect().then(db => {
            return db.collection(collection).updateOne({ _id: ObjectId(Id)}, {$set: data}, {upsert: true});
        })
        .then(result =>result.upsertedId || id);
    }

    delete(collection, id){
        return this.connect().then(db => {
            return db.collection(collection).deleteOne({ _id: ObjectId(Id) });
        })
        .then(()=> id);
    }

}

module.exports = Mongolib;

