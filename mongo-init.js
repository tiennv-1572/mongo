conn = new Mongo();
db = conn.getDB('gmt')
db.createUser({
    user: 'admin',
    pwd: 'admin',
    roles: [
        {
        role: 'dbOwner',
        db: 'gmt',
        },
    ],
});
