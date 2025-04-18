# TodoList using MERN Stack

**Description:**  
A full-featured Todo List application built with the MERN stack (MongoDB, Express, React, Node.js). This application allows users to create, read, update, and delete tasks with an intuitive user interface. Tasks can be categorized and filtered by their completion status for better organization.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [License](#license)

---

## Features

### 🔹 1. Task Management

- **Create tasks** with titles and descriptions
- **Update task status** with a simple click
- **Delete tasks** that are no longer needed
- **Filter tasks** by active, completed, or all tasks
- **Persistence** of todos using MongoDB database

### 🔹 2. User Interface

- **Clean and intuitive UI** for better user experience
- **Responsive design** that works on desktop and mobile devices
- **Tab navigation** to easily switch between task categories
- **Visual indicators** for task status (completed/active)

### 🔹 3. Performance

- **Redux state management** for efficient data handling
- **RESTful API** design for CRUD operations
- **Real-time updates** when task status changes
- **Optimized rendering** with React components

---

## Technologies Used

- **Frontend:**

  - React
  - Redux for state management
  - Axios for HTTP requests
  - Font-Awesome for icons

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - RESTful API

- **Other Tools:**
  - Nodemon for development
  - Concurrently for running multiple commands
  - CORS for cross-origin resource sharing

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ishansavaliya/Todo-list.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Todo-list
   ```

3. **Install dependencies for the root, client, and server:**

   ```bash
   # Install root dependencies
   npm install

   # Install client dependencies
   cd client
   npm install
   cd ..

   # Install server dependencies
   cd server
   npm install
   cd ..
   ```

4. **Set up environment variables as described in the Environment Variables section below**

---

## Environment Variables

### Server Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password
```

These credentials will be used to connect to your MongoDB database.

---

## Running the Project

### Development Mode (Both Client and Server)

```bash
# From the root directory
npm start
```

### Running Client Only

```bash
# From the root directory
npm run client
```

### Running Server Only

```bash
# From the root directory
npm run server
```

---

## License

This project is licensed under the ISC License.
