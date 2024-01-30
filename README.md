# Social Network API

## Project Overview
This project implements a simple social media backend using Node.js, Express, and MongoDB, with the Mongoose ODM. The application allows users to create thoughts, add reactions to thoughts, manage user data, and establish friendships between users.

## File Structure
- models/Thought.js: Defines the Thought model and its schema, including reactions.
- models/User.js: Defines the User model and its schema, including relationships with thoughts and friends.
- routes/api/thought-routes.js: Defines routes for managing thoughts, including CRUD operations and adding/deleting reactions.
- routes/api/user-routes.js: Defines routes for managing users, including CRUD operations and adding/deleting friends.
- routes/index.js: Main router file that includes all other API routes.
- utils/date-formatter.js: Utility function for formatting dates.
- app.js: Main application file, sets up Express, connects to the database, and includes the main router.

## API Endpoints
### Thoughts
- GET /api/thoughts: Get all thoughts.
- GET /api/thoughts/:id: Get a single thought by ID.
- POST /api/thoughts: Create a new thought.
- PUT /api/thoughts/:id: Update a thought by ID.
- DELETE /api/thoughts/:id: Delete a thought by ID.
### Reactions
- POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.
### Users
- GET /api/users: Get all users.
- GET /api/users/:id: Get a single user by ID.
- POST /api/users: Create a new user.
- PUT /api/users/:id: Update a user by ID.
- DELETE /api/users/:id: Delete a user by ID.
- POST /api/users/:userId/friends/:friendId: Add a friend to a user.
- DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user.
#### Additional Notes
The application uses the Mongoose library for MongoDB interactions.
Dates are formatted using a custom utility function in utils/date-formatter.js.
Error handling for database operations is basic and can be improved for production use.
The application assumes a running MongoDB instance, and the connection string should be updated accordingly.
The project includes basic testing routes but might require additional testing for full coverage.
The application returns JSON responses for API routes.
##### Disclaimer
###### This project is a basic example and may not cover all security and production-level considerations. It is recommended to review and enhance the code for real-world use, especially regarding authentication, authorization, and error handling.