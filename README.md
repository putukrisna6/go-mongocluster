# A Go API with different MongoDB configurations

## Acknowledgements
- The server is based on https://github.com/parsrc/go-mongo-crud-rest-api
- The sharded replica configuration is based on https://github.com/minhhungit/mongodb-cluster-docker-compose/tree/master/minimize

## Features
- CRUD operations written in Go
- 4 different MongoDB configuration: replica, sharded, sharded replica, and standalone
- Docker deployment 

## Endpoints:
```sh
GET    /users/:email
POST   /users
PUT    /users/:email
DELETE /users/:email
```

## Setup
Only for `master` and `sharded`

```
sudo docker compose exec configsvr01 sh -c "mongosh < /scripts/init-configserver.js"

sudo docker compose exec shard01-a sh -c "mongosh < /scripts/init-shard01.js"
sudo docker compose exec shard02-a sh -c "mongosh < /scripts/init-shard02.js"

sudo docker compose exec router01 sh -c "mongosh < /scripts/init-router.js"
```

Afterward, exec to the router to enable sharding on a collection.

```
sudo docker compose exec router01 mongosh --port 27017
```

Run the following in the mongosh console

```
sh.enableSharding("MyDatabase")
db.adminCommand( { shardCollection: "MyDatabase.users", key: { _id: "hashed" } } )
```
