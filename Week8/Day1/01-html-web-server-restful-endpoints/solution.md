Access the home page
- GET /
- GET /home

Submit a contact form
- POST /contacts

Access the posts page
- GET /posts

Access the edit page for a post
- GET /posts/:post-id/edit

Access the create page for a post
- GET /posts/new

Create a new user
- POST /users/new

Log In
- POST /users/login

Log Out
- POST /logout

Access the comments for a post page
- GET /posts/:post-id/comments

Access the create page for a post's comment
- GET /comments/new

Access the edit page for a comment
- GET /comments/:comment-id/edit

Submit a like for a post
- POST /posts/:post-id/likes

Delete a like for a post
- POST /posts/:post-id/likes/:like-id/delete

Access all the posts of a user
- GET /users/:user-id/posts

Submit a search on posts
- POST /posts/search