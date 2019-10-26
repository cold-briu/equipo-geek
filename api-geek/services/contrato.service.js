const MongoLib = require("../lib/mongodb");
const { ObjectId } = require("mongodb");

class ContratoServices {

    constructor() {
        this.MongoDB = new MongoLib();
        this.collection = "contratos"
    }

    async register(data) {
        data.status = 0;
        data.vendedor = ObjectId(data.vendedor)
        const user = await this.MongoDB.create(this.collection, data);
        return user;
    }

    async getAll(query) {
        if (query.vendedor) ObjectId(query.vendedor);
        if (query.cliente) ObjectId(query.cliente);
        const users = await this.MongoDB.getAll(this.collection, query);
        return users || ["not found"];
    }

    async getOne(userid) {
        const user = await this.MongoDB.get(this.collection, userid);
        return user;
    }

    async update(find, data) {
        const user = await this.MongoDB.updateContrato(this.collection, find, data);
        return user;
    }

    async delete(userid) {
        const user = await this.MongoDB.delete(this.collection, userid);
        return user;
    }
}



module.exports = ContratoServices;