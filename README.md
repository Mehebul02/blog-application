# Blogging Platform Backend

## Overview
This project is a robust backend system for a blogging platform that enables users to create, update, and manage blogs efficiently. It supports two user roles: **Admin** and **User**, each with specific permissions. The platform includes secure authentication, role-based access control, and advanced features like searching, sorting, and filtering blogs.

---

## Features

### User Roles

#### Admin:
- Block users.
- Delete any blog.
- Cannot update blogs.

#### User:
- Register and log in.
- Create, update, and delete their own blogs.
- Cannot perform admin-level actions.

### Blog Management
- **Create, update, and delete blogs** (restricted to the owner).
- Publicly accessible blog listing with:
  - **Search**: Filter blogs by title or content.
  - **Sort**: Arrange blogs by fields like `createdAt` or `title`.
  - **Filter**: Filter blogs by criteria such as `authorId`.

### Authentication & Authorization
- **Authentication**: Secure user login and registration using JWT tokens.
- **Authorization**: Role-based access control to ensure proper permissions for Admin and User roles.

---

## Technologies Used
- **TypeScript**: For type-safe development.
- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **MongoDB with Mongoose**: Database and ORM for seamless data management.

---

## API Endpoints

### 1. Authentication

#### Register User  
`POST /api/auth/register`  
Registers a new user.  
**Example:**  
`https://blog-application-brown-mu.vercel.app/api/auth/register`

#### Login User  
`POST /api/auth/login`  
Logs in a user and returns a JWT token.  
**Example:**  
`https://blog-application-brown-mu.vercel.app/api/auth/login`

---

### 2. Blog Management

#### Create Blog  
`POST /api/blogs`  
Allows a logged-in user to create a blog.  
**Example:**  
`https://blog-application-brown-mu.vercel.app/api/blogs`

#### Update Blog  
`PATCH /api/blogs/:id`  
Allows a logged-in user to update their own blog.  
**Example:**  
`https://blog-application-brown-mu.vercel.app/api/blogs/{id}`

#### Delete Blog  
`DELETE /api/blogs/:id`  
Allows a logged-in user to delete their own blog.  
**Example:**  
`https://blog-application-brown-mu.vercel.app/api/blogs/{id}`

#### Get All Blogs (Public)  
`GET /api/blogs`  
Fetch blogs with options for search, sort, and filter.  
**Example:**  
`https://blog-application-brown-mu.vercel.app/api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&filter=authorId`

---

### 3. Admin Actions

#### Block User  
`PATCH /api/admin/users/:userId/block`  
Blocks a user by updating the `isBlocked` property.  
**Example:**  
`https://blog-application-brown-mu.vercel.app/api/admin/users/{userId}/block`

#### Delete Blog  
`DELETE /api/admin/blogs/:id`  
Allows an admin to delete any blog.  
**Example:**  
`https://blog-application-brown-mu.vercel.app/api/admin/blogs/{id}`

---

## Deployment
- **Live Server:** [Access the Deployed Backend](https://blog-application-brown-mu.vercel.app/)

---

## Admin Credentials
- **Email:** `mehebul.bd@gmail.com`  
- **Password:** `123456`

---

## Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
