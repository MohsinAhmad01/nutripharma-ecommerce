# NutriPharma – E-commerce Platform

A full-stack e-commerce web application built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. The platform provides an online shopping experience with a React-based frontend and a RESTful backend API.

## 🚀 Technologies Used

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- Bootstrap 

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- RESTful APIs
- JWT Authentication 

### Development Tools
- Git & GitHub
- npm
- VS Code

## ✨ Features

- Responsive e-commerce interface
- Product listing and product details
- Shopping cart functionality
- Backend REST API
- MongoDB database integration
- User authentication and authorization 
- Order and checkout management 
- Admin/product management 

## 📁 Project Structure

```text
nutriphama-ecommerce/
│
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── ...
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── ...
│
├── .gitignore
├── README.md
└── ...
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MohsinAhmad01/nutripharma-ecommerce.git
```

### 2. Navigate to the Project

```bash
cd nutripharma-ecommerce
```

### 3. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend directory and configure your environment variables.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Start the backend using the appropriate script defined in `backend/package.json`.

For example:

```bash
npm run dev
```

### 4. Frontend Setup

Open another terminal and navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file if required by your frontend configuration.

Example:

```env
VITE_BACKEND_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will typically be available at:

```text
http://localhost:5173
```

Make sure the environment variable names and startup commands match your actual project configuration.

## 🔐 Environment Variables

For security reasons, environment files containing sensitive credentials are not included in this repository.

Create your own `.env` files using the provided `.env.example` files.

Never share:
- MongoDB connection strings
- JWT secrets
- API keys
- Database credentials

## 🛠️ Development Workflow

1. Clone the repository.
2. Install frontend and backend dependencies.
3. Configure environment variables.
4. Start the backend server.
5. Start the frontend development server.
6. Test the application locally.

## 👨‍💻 Author

**Mohsin Ahmed**

MERN Stack Developer | DevOps Enthusiast

- GitHub: [MohsinAhmad01](https://github.com/MohsinAhmad01)

## 📄 License

This project is developed for learning and development purposes. Add an appropriate license before permitting reuse or distribution.
