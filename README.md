# AI Startup Validator

AI Startup Validator is a full-stack web application that helps entrepreneurs evaluate startup ideas using Google's Gemini AI. Users can create an account, submit startup ideas, receive AI-generated analysis, and maintain a history of previous evaluations.

## Features

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Startup Idea Analysis using Gemini AI
* Startup Score Generation
* Market Potential Assessment
* Scalability Evaluation
* Revenue Suggestions
* Risk Analysis
* Startup History Dashboard
* Detailed Analysis View
* Delete Analysis
* Responsive User Interface

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* React Icons
* Tailwind CSS
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* BcryptJS

### AI

* Google Gemini API

## Screenshots



![Home Page](<Screenshot (368).png>)

![Dashboard](<Screenshot (370).png>)

![Analysis-Details](<Screenshot (371).png>)


## Project Structure

```text
AI-Startup-Validator

client/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
└── package.json

server/
│
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── server.js
└── package.json

README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/ai-startup-validator.git
cd ai-startup-validator
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

Start the backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Environment Variables

```env
MONGO_URI=
JWT_SECRET=
GEMINI_API_KEY=
PORT=
```

## Application Flow

```text
Register/Login
      ↓
Dashboard
      ↓
Analyze Startup
      ↓
AI Analysis
      ↓
Save to MongoDB
      ↓
View History
      ↓
View Detailed Report
      ↓
Delete Analysis
```

## Future Improvements

* Search and Filter Analyses
* Export Reports
* Startup Comparison
* Dark Mode
* Analytics Dashboard
* Competitor Analysis

## Author

Arya Amoriya
