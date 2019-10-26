class VendedorService {
    constructor() {
        this.MongoDB = new MongoLib();
        this.collection = "vendedor"
    }

    async register(data) {
        const user = await this.MongoDB.create(this.collection, data);
        return user;
    }

    async login(email) {
        const user = await this.MongoDB.login(this.collection, email);
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