# LearnBridge — Learn Today. Build Tomorrow.

A lightweight, responsive learning website starter for secondary school students.

## Included
- Home page with Natural Science and Social Science streams
- Eight subject areas: Mathematics, Physics, Chemistry, Biology, History, Geography, Economics and Civics
- Eight sample lessons with explanations and examples
- Interactive practice quizzes with correct/incorrect feedback and explanations
- Search and subject/stream filters
- Bookmarks and completed lesson tracking
- Progress dashboard
- Dark/light theme and larger text setting
- PWA manifest, icon and service worker for caching the website shell
- Responsive Android/mobile design; no external libraries or paid APIs

## Important limitations
This is a first working starter, not a complete curriculum. Only the sample lessons in `app.js` are included; review all content against the current school curriculum before relying on it for exams. Amharic and Tigrinya translations, accounts/cloud sync, teacher tools, timed exams, flashcards, a large past-exam question bank and an AI tutor are future work, not implemented. Progress is stored only in this browser/device; clearing browser data can erase it. Offline caching requires a first successful visit over HTTPS, such as GitHub Pages.

## Publish with GitHub Pages
1. Extract this ZIP and upload the files inside it to the root of your GitHub repository. `index.html`, `app.js`, `styles.css`, `manifest.json`, `sw.js`, `icon.svg` and `README.md` should sit beside each other, not inside another folder.
2. Open repository **Settings → Pages**.
3. Under Build and deployment, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
4. Wait for deployment and open the Pages URL.
5. Visit once online, wait for it to finish loading, then test offline mode.

No account is required. Avoid entering private information.
