# JSON Faker

[JSON Faker](https://jsonfaker.herokuapp.com) is fake rest API for testing.

While building websites or mobile applications developers need some fake data to test their apps. [JSON Faker](https://jsonfaker.herokuapp.com) gives you a sample data to test.

## How to use
### Resources
Resource|Path
|----|----
|Users|`/users`
|Comments|`/comments`
|Images|`/images`
|Todos|`/todos`

### All routes available
Method|Path
|---|----|
|GET | `/users`
|GET | `/users/:user_id`
|GET | `/comments`
|GET | `/comments?comment_id=:comment_id`
|GET | `/comments?user_id=:user_id`
|GET | `/comments?user_id=:user_id&comment_id=:comment_id`
|GET | `/images`
|GET | `/images?image_id=:image_id`
|GET | `/images?user_id=:user_id`
|GET | `/images?user_id=:user_id&image_id=:image_id`
|GET | `/todos`
|GET | `/todos?todo_id=:todo_id`
|GET | `/todos?user_id=:user_id`
|GET | `/todos?user_id=:user_id&todo_id=:todo_id`

### How to use
```sh
curl https://jsonfaker.herokuapp.com/users
```

### If you want to set up your own server
```sh
$ git clone git@github.com:bijaydas/jsonfaker.git
$ cd jsonfaker
$ npm install
$ npm start
```

### Contributing
This is the basic version of the applcation and requires a lot of work. If you are interested in contributing just contribute.