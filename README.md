# 🧠 Proxima AI – AI Chatbot Web App

Proxima AI is a full-stack AI-powered chatbot web app, inspired by ChatGPT. Users can chat with AI, upload images, and save conversations, all while being authenticated via Clerk.

---

## 🚀 Features

- ✨ Chat with AI in real-time
- 🖼️ Upload and analyze images using ImageKit
- 🔐 Secure user authentication with Clerk
- 💬 Persistent chat history (MongoDB)
- 🧠 Gemini AI integration (via Google Generative AI)
- 📦 Fully responsive design with React & Tailwind

---

## 📦 Tech Stack

- **Frontend:** React, Vite, Clerk, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Clerk SDK
- **AI Engine:** Google Gemini API
- **Image Uploads:** ImageKit
- **State & Data:** React Query, REST APIs

---

## 🛠️ Install Dependencies (Frontend + Backend)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/Proxima-AI.git
   cd Proxima-AI
   ```
2. **Install Frontend**
   ```bash
   cd client
   npm install
   ```
3. **Install Backend**

   ```bash
   cd ../backend
   npm install
   ```

---

## ⚙️ Environment Variables

Create a `.env` file in **both** `client/` and `backend/` directories with the following values:

---

### 🔑 Backend `.env` (`/backend/.env`)

IMAGE_KIT_ENDPOINT=your_imagekit_endpoint_url  
IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key  
IMAGE_KIT_PRIVATE_KEY=your_imagekit_private_key  

CLIENT_URL=your_client_url  
MONGO=your_mongo_connection_string  

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key  
CLERK_SECRET_KEY=your_clerk_private_key  

---

### 🌐 Frontend `.env` (`/client/.env`)

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key  
VITE_IMAGE_KIT_ENDPOINT=your_imagekit_endpoint_url  
VITE_IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key  
VITE_GEMINI_PUBLIC_KEY=your_gemini_public_key  

VITE_API_URL=your_api_url  

---

## ▶️ Run the App Locally

1. **Start Backend**
   ```bash
   cd backend
   npm start
   ```
2. **Start Frontend**
   ```bash
   cd client
   npm run dev
   ```

---
