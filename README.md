# Users book list
Users book list is a project to store users' data and the books they have read.

## Installation
Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## Starting application
Make sure you have Docker and docker-compose installed on your device.

Run: 
```bash
docker compose up --build
```

## ERD of the Database
One-to-Many Relationship model

![image](https://user-images.githubusercontent.com/99865495/192115782-26fae888-75ed-4a64-8b3e-16781c829482.png)


## Methods
The use of Users methods in the GraphQL Playground are given below:
### Get all users
```graphql
query{
  users{
    id
    first_name
    last_name
    age
    created_at
    updated_at
    books {
      id
      title
      author
      created_at
    }
  }
}
```
### Get user by id
```graphql
query{
  user(id: 1){
    id
    first_name
    last_name
    age
    created_at
    updated_at
    books{
      id
      title
      author
      created_at
    }
  }
}
```
### Create user
```graphql
mutation{
  createUser(input: { first_name: "first name", last_name: "last name", age: 19 }){
    id
    first_name
    last_name
    age
    created_at
    updated_at
  }
}
```
### Update user
```graphql
mutation{
  updateUser(input: {id: 4, first_name: "updated first name", last_name: "updated last name", age: 20 }){
    id
    first_name
    last_name
    age
    created_at
    updated_at
  }
}
```

### Delete user
```graphql
mutation{
  deleteUser(id: 4)
}
```

The use of Books methods in the GraphQL Playground are given below:

### Get all books
```graphql
query{
  books{
    id
    title
    author
    created_at
    user_id
    user{
      id
      first_name
      last_name
      age
      created_at
      updated_at
    }
  }
}
```
### Get book by id
```graphql
query{
  book(id: 3){
    id
    title
    author
    created_at
    user_id
    user{
      id
      first_name
      last_name
      age
      created_at
      updated_at
    }
  }
}
```
### Create book
```graphql
mutation{
  createBook(input: { title: "New book", author: "New author", user_id: 1}){
    id
    title
    author
    created_at
    user_id
  }
}
```
### Update book
```graphql
mutation{
  updateBook(input: { id: 4, title: "Updated book", author: "Updated author", user_id: 1}){
    id
    title
    author
    created_at
    user_id
  }
}
```
### Delete book
```graphql
mutation{
  deleteBook(id: 4)
}
```
