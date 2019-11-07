const { mongoClient, ObjectID } = require('mongodb');

const { config } = require('../configuration');

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbName}/${config.port}/${db_NAME}?retryWrites=true&w=majority`

class Mongolib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, {useNewurlParser: true});
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
}

module.exports = Mongolib;