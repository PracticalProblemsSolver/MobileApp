import pb from PocketBase;

export class Database{
    constructor(http, email, password){
        this.dbobject = new PocketBase(http);
        this.dbobject.admins.authWithPassword(email, password);
    }

    get(collection, start, end){
        return this.dbobject.collections(collection).getList(start, end);
    }

    create(record, collection){
        this.dbobject.collection(collection).create(record);
    }

    update(new_record, collection){
        this.dbobject.collection(collection).delete(record);

        this.dbobject.collection(collection).create(new_record);
    }

    delete(record, collection){
        this.dbobject.collection(collection).delete(record);
    }
}