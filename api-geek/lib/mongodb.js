const { MongoClient, ObjectId } = require("mongodb");
const { dbname, dbhost, dbuser, dbpassword } = require("../config/config");

const DBUSER = encodeURIComponent(dbuser);
const DBPASSWORD = encodeURIComponent(dbpassword);

const URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@${dbhost}/${dbname}?retryWrites=true&w=majority`

module.exports = class MongoLib {
    constructor() {
        this.client = new MongoClient(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.dbname = dbname;
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) return reject(err);
                    resolve(this.client.db(this.dbName));
                })
            })
        }

        return MongoLib.connection;
    }


    getAll(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray()
        })
    }


    get(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id: ObjectId(id) });
        });
    }

    create(collection, data) {

        return this.connect()
            .then(db => {
                return db.collection(collection).insertOne({ ...data, timestamp: new Date().getTime() });
            })
            .then(result => result.insertedId);
    }

    createMany(collection, arrData) {
        return this.connect()
            .then(db => {
                return db.collection(collection).insertMany(arrData);
            })
            .then(result => result.map(entry => entry.insertedId));
    }

    update(collection, id, data) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .findOneAndUpdate(
                        { _id: ObjectId(id) },
                        { $set: data },
                        { upsert: true }
                    );
            })
            .then(result => result.upsertedId || id);
    }

    delete(collection, id) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .findOneAndDelete({ _id: ObjectId(id) });
            })
            .then(() => id);
    }

    login(collection, email) {
        return this.connect().then(db =>
            db.collection(collection).findOne({ email })
        );
    }
}