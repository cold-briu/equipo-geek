const MongoLib = require("../lib/mongodb");

class UserServices {

    constructor() {
        this.MongoDB = new MongoLib();
        this.collection = "users"
    }

    async register(data) {
        data.status = 0;
        const user = await this.MongoDB.create(this.collection, data);
        return user;
    }

    async getAll(query) {
        const users = await this.MongoDB.getAll(this.collection, query);
        return users || ["not found"];
    }

    async getOne(userid) {
        const user = await this.MongoDB.get(this.collection, userid);
        return user;
    }

    async update(userid, data) {
        const user = await this.MongoDB.update(this.collection, userid, data);
        return user;
    }

    async delete(userid) {
        const user = await this.MongoDB.delete(this.collection, userid);
        return user;
    }
}



module.exports = UserServices;