# Dekha-Hobe (দেখা হবে) 📝

[![Stack](https://img.shields.io/badge/Stack-MERN-blue.svg)](https://reactjs.org/)
[![React](https://img.shields.io/badge/Frontend-React_18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js_/_Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-green.svg)](LICENSE)

**Dekha-Hobe** (*Bengali for "Until We Meet Again"*) is a feature-rich, full-stack **MERN** (MongoDB, Express.js, React, Node.js) blogging platform. It allows users to register, log in, create, publish, update, and manage blog posts with custom thumbnail/header images. 

The application enforces strict author-level permissions, ensuring that users can only edit or delete their own posts while maintaining a public feed accessible to all visitors.

---

## ✨ Features

- 🔐 **User Authentication & Security**: Register and login functionality with encrypted passwords via `bcrypt`.
- ✍️ **Post Publishing & Editor**: Write blog posts with custom titles, content, categories, and cover image uploads.
- 🛡️ **Role & Ownership Protection**: Strict authorization ensures only post authors can update or delete their posts.
- 🏷️ **Categorization & Search**: Tag articles with categories and filter blog posts by specific author or category.
- 🖼️ **Image Storage**: File upload processing powered by `Multer` for custom image headers and avatars.
- 👤 **User Dashboard & Profile**: Dedicated user profile settings for updating credentials, bio, and account details.
- 🌐 **Responsive UI**: Intuitive, user-friendly frontend interface built using React 18 and React Router v6.

---

## 🛠️ Tech Stack

### **Frontend (`/Client`)**
- **Library**: React 18
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **Styling**: Modern CSS3 / Flexbox / Grid

### **Backend (`/api`)**
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: Custom Authentication with `bcrypt` password hashing
- **File Uploads**: Multer middleware

---

## 📁 Project Architecture

```text
Dekha-Hobe/
├── api/                   # Express backend server
│   ├── images/            # Uploaded post header images
│   ├── models/            # Mongoose schemas (User, Post, Category)
│   ├── routes/            # REST API endpoints (auth, users, posts, categories)
│   ├── index.js           # Express app entry point
│   ├── package.json       # Backend dependencies
│   └── .env               # Environment configuration
│
└── Client/                # React frontend application
    ├── public/            # Static HTML assets
    ├── src/               # React components, pages & context
    ├── package.json       # Frontend dependencies & proxy setup
    └── README.md
```

---

## 🔌 API Endpoints Reference

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | Public |
| `POST` | `/api/auth/login` | Log in user | Public |
| `GET` | `/api/users/:id` | Get user details | Public |
| `PUT` | `/api/users/:id` | Update user details & password | Owner |
| `DELETE`| `/api/users/:id` | Delete user account & associated posts | Owner |
| `GET` | `/api/posts` | Get all posts (filterable by `?user=` or `?cat=`) | Public |
| `GET` | `/api/posts/:id` | Get a specific blog post | Public |
| `POST` | `/api/posts` | Create a new blog post | Logged In |
| `PUT` | `/api/posts/:id` | Update an existing post | Author Only |
| `DELETE`| `/api/posts/:id` | Delete a post | Author Only |
| `GET` | `/api/categories` | Get list of post categories | Public |
| `POST` | `/api/categories` | Add a new category | Logged In |
| `POST` | `/api/upload` | Upload cover image file | Logged In |

---

## 🚀 Quick Start & Installation

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local installation or MongoDB Atlas URI)

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/Dekha-Hobe.git
cd Dekha-Hobe
```

### **2. Setup & Run Backend API**
```bash
# Navigate to API directory
cd api

# Install dependencies
npm install

# Create/configure .env file
# Add MONGO_URL=your_mongodb_connection_string

# Start development server (runs on http://localhost:5000)
npm start
```

### **3. Setup & Run Frontend Client**
```bash
# Open a new terminal window & navigate to Client directory
cd Client

# Install dependencies
npm install

# Start React app (runs on http://localhost:3000)
npm start
```

---

## 🖼️ Application Screenshots

| Feed / Home | Single Post View |
| :---: | :---: |
| ![Blog App Home](https://user-images.githubusercontent.com/59209034/188819748-37384ac5-d421-40bc-adde-b1d60577025e.png) | ![Single Post](https://user-images.githubusercontent.com/59209034/188820097-dac76c45-dbc9-4002-847c-696d3648ec5c.png) |

| Create Post / Editor | Dashboard & Profile |
| :---: | :---: |
| ![Create Post](https://user-images.githubusercontent.com/59209034/188820159-46894d6f-e112-49b5-83d4-7c20478aa9aa.png) | ![User Profile](https://user-images.githubusercontent.com/59209034/188820237-17bf4b5c-ad04-4dde-b8ff-1d4f321a137e.png) |

<details>
<summary>📸 <b>Click to expand full screenshot gallery</b></summary>

<br/>

![Screenshot 1](https://user-images.githubusercontent.com/59209034/188820254-14c07973-77c4-47d6-b5c7-6f04146bab1d.png)
![Screenshot 2](https://user-images.githubusercontent.com/59209034/188820272-fa2a516b-73bd-4a87-81b4-919e0bb43982.png)
![Screenshot 3](https://user-images.githubusercontent.com/59209034/188820307-0c247e16-ff08-4306-815f-b07ead52b9e0.png)
![Screenshot 4](https://user-images.githubusercontent.com/59209034/188820319-a4b64398-c7f3-48f7-bb4f-bc7e26e2f2ee.png)

</details>

---

## 📜 License

This project is licensed under the [ISC License](LICENSE).
