# Acadex - The AI-Powered Course Architect 🚀

Acadex is a next-generation learning platform that uses advanced AI to instantly architect precise, video-integrated courses so you can focus strictly on learning. Generate, study, and track your progress in a unified smart-dashboard.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk_Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![Neon](https://img.shields.io/badge/Neon_DB-00E599?style=for-the-badge&logo=neon&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ✨ Key Features

- **Instant AI Architect:** Input any topic in the world, and our AI builds a comprehensive structured curriculum in seconds.
- **Dynamic Tracking:** Stay motivated with live progress tracking, milestone charts, and visual dynamic roadmaps.
- **Video Integrations:** Each generated chapter automatically syncs with the most relevant, high-quality YouTube lectures available.
- **Fully Responsive:** Enterprise-grade UI optimized for seamless usage across desktop, tablet, and mobile devices.
- **Secure Authentication:** User accounts, progress saving, and protected routes handled seamlessly via Clerk.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Authentication:** [Clerk](https://clerk.dev/)
- **Database:** [Neon (Serverless Postgres)](https://neon.tech/) & [Drizzle ORM](https://orm.drizzle.team/)
- **AI Integration:** Google Gemini / Groq SDK
- **Video API:** YouTube Data API
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed and the following API keys ready:
- Clerk Publishable & Secret Keys
- Neon Database URL
- Gemini / Groq API Keys
- YouTube Data API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Acadex.git
   cd Acadex
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your keys:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   
   DATABASE_URL=your_neon_db_url
   NEXT_PUBLIC_DATABASE_URL=your_neon_db_url
   
   GEMINI_API_KEY=your_gemini_key
   GROQ_API_KEY=your_groq_key
   YOUTUBE_API_KEY=your_youtube_key
   ```

4. **Run Database Migrations** (Optional depending on your setup)
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas on how to improve Acadex.

## 📄 License
This project is licensed under the MIT License.
