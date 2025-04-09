# AI Shorts Generator

## Overview

The **AI Shorts Generator Web App** allows users to generate personalized shorts (images/videos) based on their inputs. Built using **Next.js** with **TypeScript**, this app is designed to offer a fast and scalable web application. The backend is based on **REST APIs**, and the frontend is styled with **ShadCN** and **Tailwind CSS**. **Clerk** is used for authentication, and **Neon** is used as the database to store user and generated content data.


## Features

- **User Authentication** using **Clerk**
- **Content Generation** based on user inputs (images/videos)
- **Responsive UI** styled with **ShadCN** and **Tailwind CSS**
- **RESTful APIs** for user management, content generation, and retrieval
- **Database** management with **Neon** for storing user and generated content data


## Tech Stack

- **Frontend**:
  - **Next.js** (React framework)
  - **TypeScript** (for type safety)
  - **ShadCN** (UI components)
  - **Tailwind CSS** (styling)
  
- **Backend**:
  - **REST API** (built with Next.js API routes)
  - **Clerk** (user authentication)
  
- **Database**:
  - **Neon** (PostgreSQL-based serverless database)


## Setup Instructions

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/aishortsgenerator.git
```

### 2. Install dependencies:
```bash
cd ai-shorts-generator
npm install
```

### 3. Set up environment variables:
Create a `.env.local` file and add the following:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_API_KEY=<your-clerk-api-key>
DATABASE_URL=<your-neon-database-url>
```

### 4. Run the app locally:
```bash
npm run dev
```

Visit `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
