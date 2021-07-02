use gmt
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
