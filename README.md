# Sebastian Skontos Portfolio

This is my personal portfolio website, showcasing projects, skills, education, and experience. Built with modern web technologies, it features a responsive design and interactive elements.

## Features
*   **Responsive Design:** Optimized for various screen sizes, including mobile devices.
*   **Theme Toggling:** Light and dark mode support for user preference.
*   **Project Showcase:** Detailed display of various software projects.
*   **Interactive Elements:** Powered by Framer Motion for smooth animations.
*   **Contact Form:** Integrated with Resend for direct communication.

## Technologies Used

*   **Framework:** Next.js
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Particles:** React-Particles (tsparticles)
*   **Email Service:** Resend

## Setup

To set up and run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sebskontos/portfolio-site
    cd portfolio-site
    ```

2.  **Install dependencies:**
    Use your preferred package manager:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root directory of the project and add your Resend API key:
    ```
    RESEND_API_KEY="YOUR_RESEND_API_KEY"
    ```

4.  **Configure Email (Optional):**
    In `actions/send-email.ts`, change the `"to"` email address to your desired recipient email for the contact form submissions.

## Running Locally

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is built with Next.js and can be easily deployed to platforms like Vercel, Netlify, or any Node.js compatible hosting. Refer to the Next.js deployment documentation for more details.

## Notes

*   **Mobile Rendering:** During development, some mobile browsers might exhibit slight delays in re-rendering fixed elements (like the header) when the theme is toggled. This has been addressed by forcing a repaint of the document after theme changes.
