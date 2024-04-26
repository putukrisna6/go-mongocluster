This is CRUD operations on MongoDB written in Golang. You can create, read, update, and delete users from the MongoDB instance using http requests.

Credit to: github.com:parsaakbari1209

## Endpoints:
```sh
GET    /users/:email
POST   /users
PUT    /users/:email
DELETE /users/:email
```

### Get User
This endpoint retrieves a user given the email.  
Send a `GET` request to `/users/:email`:
```sh
curl -X GET 'http://127.0.0.1:8080/users/bob@gmail.com'
```
Response:
```sh
{
  "user": {
    "id": "<user_id>",
    "name": "Bob",
    "email": "bob@gmail.com",
    "password": "ilovealice"
  }
}
```
### Create User
This endpoint inserts a document in the `users` collection of the `users` database.  
Send a `POST` request to `/users`:
```sh
curl -X POST 'http://127.0.0.1:8080/users' -H "Content-Type: application/json" -d '{"name": "Bob", "email": "bob@gmail.com", "password": "ilovealice"}'
```
Response:  
```sh
{
  "user": {
    "id": "<user_id>",
    "name": "Bob",
    "email": "bob@gmail.com",
    "password": "ilovealice"
  }
}
```
### Update User
This endpoint updates the provided fields within the specified document filtered by email.  
Send a `PUT` request to `/users/:email`:
```sh
curl -X PUT 'http://127.0.0.1:8080/users/bob@gmail.com' -H "Content-Type: application/json" -d '{"password": "loveyoualice"}'
```
Response:
```sh
{
  "user": {
    "id": "<user_id>",
    "name": "Bob",
    "email": "bob@gmail.com",
    "password": "loveyoualice"
  }
}
```

### Delete User
This endpoint deletes the user from database given the email.  
Send a `DELETE` request to `/users/:email`:
```sh
curl -X DELETE 'http://127.0.0.1:8080/users/bob@gmail.com'
```
Response:
```sh
{}
```

### Errors
All of the endpoints return an error in json format with a proper http status code, if something goes wrong:
```sh
{
  "error": "user not found"
}
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
