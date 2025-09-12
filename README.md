# Contacts API

This project provides a RESTful API for storing and retrieving information about contacts. The contacts are stored in a MongoDB database, and the API supports CRUD operations (Create, Read, Update, Delete) for managing contact information.

## Features

- Store contact information including:
  - First Name
  - Last Name
  - Email
  - Favorite Color
  - Birthday
- Fully functional API with the following endpoints:
  - `POST /contacts` - Create a new contact
  - `GET /contacts` - Retrieve all contacts
  - `GET /contacts/:id` - Retrieve a contact by ID
  - `PUT /contacts/:id` - Update a contact by ID
  - `DELETE /contacts/:id` - Delete a contact by ID

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Swagger for API documentation

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/contacts-api.git
   ```

2. Navigate to the project directory:
   ```
   cd contacts-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

5. Start the application:
   ```
   npm start
   ```

## API Documentation

API documentation is available in the `swagger/swagger.yaml` file. You can use tools like Swagger UI to visualize and interact with the API endpoints.

## Deployment

The API can be deployed to Render or any other cloud service that supports Node.js applications. Ensure that the environment variables are set correctly in the deployment environment.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.