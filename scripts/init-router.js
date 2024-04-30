sh.addShard("rs-shard-01/shard01-a:27017")
sh.addShard("rs-shard-02/shard02-a:27017")

sh.enableSharding("MyDatabase")
db.adminCommand( { shardCollection: "MyDatabase.users", key: { _id: "hashed" } } )
