# Blogging Platform Backend

## Overview
This project is a backend system for a blogging platform, designed to support two types of users: Admin and User. The system includes secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

## Features
### User Roles
- **Admin**:
  - Created manually in the database with predefined credentials.
  - Can delete any blog.
  - Can block any user by updating the `isBlocked` property.
  - Cannot update any blog.
- **User**:
  - Can register and log in.
  - Can create, update, and delete their own blogs.
  - Cannot perform admin actions.

### Authentication & Authorization
- **Authentication**:
  - Users must log in to perform create, update, or delete operations.
- **Authorization**:
  - Differentiates between Admin and User roles to ensure secure access.

### Blog API
- Public API to fetch blogs.
- Supports search, sorting, and filtering functionalities.

## Technologies Used
- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**

## Models
### User Model
| Field        | Type             | Description                                         |
|--------------|------------------|-----------------------------------------------------|
| name         | string           | Full name of the user.                             |
| email        | string           | Email address for authentication and communication.|
| password     | string           | Securely stored password.                          |
| role         | "admin" | "user" | Access level, default is "user".                  |
| isBlocked    | boolean          | Indicates if the user is blocked. Default is false.|
| createdAt    | Date             | Timestamp of user creation.                        |
| updatedAt    | Date             | Timestamp of last update.                          |

### Blog Model
| Field        | Type             | Description                                         |
|--------------|------------------|-----------------------------------------------------|
| title        | string           | Title of the blog post.                            |
| content      | string           | Content of the blog post.                          |
| author       | ObjectId         | Reference to the User model.                       |
| isPublished  | boolean          | Indicates if the blog is published. Default is true.|
| createdAt    | Date             | Timestamp of blog creation.                        |
| updatedAt    | Date             | Timestamp of last update.                          |

## API Endpoints
### 1. Authentication
#### 1.1 Register User
**Endpoint:** `POST /api/auth/register`
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```
**Response:**
- Success (201): User registered successfully.
- Failure (400): Validation error.

#### 1.2 Login User
**Endpoint:** `POST /api/auth/login`
**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```
**Response:**
- Success (200): Login successful with JWT token.
- Failure (401): Invalid credentials.

### 2. Blog Management
#### 2.1 Create Blog
**Endpoint:** `POST /api/blogs`
**Request Header:** `Authorization: Bearer <token>`
**Request Body:**
```json
{
  "title": "My First Blog",
  "content": "This is the content of my blog."
}
```
**Response:**
- Success (201): Blog created successfully.

#### 2.2 Update Blog
**Endpoint:** `PATCH /api/blogs/:id`
**Request Header:** `Authorization: Bearer <token>`
**Request Body:**
```json
{
  "title": "Updated Blog Title",
  "content": "Updated content."
}
```
**Response:**
- Success (200): Blog updated successfully.

#### 2.3 Delete Blog
**Endpoint:** `DELETE /api/blogs/:id`
**Request Header:** `Authorization: Bearer <token>`
**Response:**
- Success (200): Blog deleted successfully.

#### 2.4 Get All Blogs (Public)
**Endpoint:** `GET /api/blogs`
**Query Parameters:**
- `search`: Filter blogs by title or content.
- `sortBy`: Sort blogs by fields like `createdAt` or `title`.
- `sortOrder`: `asc` or `desc` for sorting order.
- `filter`: Filter blogs by author ID.

**Response:**
- Success (200): Blogs fetched successfully.

### 3. Admin Actions
#### 3.1 Block User
**Endpoint:** `PATCH /api/admin/users/:userId/block`
**Request Header:** `Authorization: Bearer <admin_token>`
**Response:**
- Success (200): User blocked successfully.

#### 3.2 Delete Blog
**Endpoint:** `DELETE /api/admin/blogs/:id`
**Request Header:** `Authorization: Bearer <admin_token>`
**Response:**
- Success (200): Blog deleted successfully.

## Bonus: Error Handling
A consistent error response format is used:
```json
{
  "success": false,
  "message": "Error message",
  "statusCode": 400,
  "error": { "details": "Additional error details" },
  "stack": "Error stack trace"
}
```
### Types of Errors Handled:
- **Validation Error**: Invalid input data.
- **Authentication Error**: Missing or invalid token.
- **Authorization Error**: Insufficient permissions.
- **Not Found Error**: Resource not found.
- **Internal Server Error**: Unexpected issues.

## Deployment
- **Live Server:** [Link to deployed backend]

## Admin Credentials
- **Email:** admin@example.com
- **Password:** adminpassword

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## Project Overview Video
[Link to project demo video]
