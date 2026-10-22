KD PORTFOLIO — PHASE 3 CONTACT UPDATE

This is an overlay for the existing Next.js project at C:\Users\kaush\kd-portfolio. It intentionally does not contain node_modules or package.json.

FILES INCLUDED
- app/page.tsx (contact form, email-draft handling, optional GitHub/LinkedIn links)
- app/globals.css (responsive contact form styling)

INSTALL
1. Keep the existing project and its 3D HeroScene.tsx.
2. Extract this ZIP into C:\Users\kaush\kd-portfolio.
3. Merge the app folder and replace app/page.tsx and app/globals.css only.
4. If the dev server is running, refresh the browser. If it does not update, stop with Ctrl+C and run `npm run dev` again.

IMPORTANT BEFORE PUBLISHING
At the top of app/page.tsx, set:
- CONTACT_EMAIL = "your-real-email@example.com"
- GITHUB_URL = "https://github.com/your-actual-username" (optional)
- LINKEDIN_URL = "https://www.linkedin.com/in/your-actual-profile/" (optional)

Do not leave the example values. The GitHub and LinkedIn links are intentionally blank until you confirm the exact URLs. The contact form uses mailto and opens the visitor's email app with a pre-filled draft; it does NOT send the email itself or require a backend. The visitor still needs to press Send. For direct server-side delivery, connect a form service or email provider later.

The Instagram link already uses the known @kaushalprazapati profile. This update does not install new dependencies.
