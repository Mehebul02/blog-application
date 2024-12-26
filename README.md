Blogging Platform Backend

Overview

This project is a robust backend system for a blogging platform that enables users to create, update, and manage blogs efficiently. It includes two user roles: Admin and User, with specific permissions for each. The platform supports secure authentication, role-based access control, and advanced functionalities like searching, sorting, and filtering blogs.

Features

User Roles

Admin:

Can block users.

Can delete any blog.

Cannot update blogs.

User:

Can register and log in.

Can create, update, and delete their own blogs.

Cannot perform admin-level actions.

Blog Management

Create, update, and delete blogs (restricted to owners).

Publicly accessible blog listing with:

Search: Filter blogs by title or content.

Sort: Arrange blogs by fields like createdAt or title.

Filter: Filter blogs by specific criteria, such as author ID.

Authentication & Authorization

Authentication: Secure user login and registration using JWT tokens.

Authorization: Role-based access control ensures proper permissions for Admin and User roles.

Admin Actions

Block users.

Delete any blog.

Technologies Used

TypeScript: For type-safe development.

Node.js: Backend runtime.

Express.js: Web framework.

MongoDB with Mongoose: Database and ORM for seamless data management.

API Endpoints

1. Authentication

Register User

POST /api/auth/registerRegisters a new user.Example:https://blog-application-brown-mu.vercel.app/api/auth/register

Login User

POST /api/auth/loginLogs in a user and returns a JWT token.Example:https://blog-application-brown-mu.vercel.app/api/auth/login

2. Blog Management

Create Blog

POST /api/blogsAllows a logged-in user to create a blog.Example:https://blog-application-brown-mu.vercel.app/api/blogs

Update Blog

PATCH /api/blogs/:idAllows a logged-in user to update their own blog.Example:https://blog-application-brown-mu.vercel.app/api/blogs/{id}

Delete Blog

DELETE /api/blogs/:idAllows a logged-in user to delete their own blog.Example:https://blog-application-brown-mu.vercel.app/api/blogs/{id}

Get All Blogs (Public)

GET /api/blogsPublic API to fetch blogs with options for search, sort, and filter.Example:https://blog-application-brown-mu.vercel.app/api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&filter=authorId

3. Admin Actions

Block User

PATCH /api/admin/users/:userId/blockBlocks a user by updating the isBlocked property.Example:https://blog-application-brown-mu.vercel.app/api/admin/users/{userId}/block

Delete Blog

DELETE /api/admin/blogs/:idAllows an admin to delete any blog.Example:https://blog-application-brown-mu.vercel.app/api/admin/blogs/{id}

Deployment

Live Server: Click here to access the deployed backend

Admin Credentials

Email: admin@example.com

Password: adminpassword

Setup Instructions

Clone the Repository

git clone <repository-url>

Install Dependencies

npm install

Configure Environment VariablesCreate a .env file in the root directory with the following variables:

PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

Start the Server

npm run dev

Project Overview Video

[Link to project demo video]

Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Ensure to follow the code of conduct and contribution guidelines.
