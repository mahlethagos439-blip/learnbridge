# LearnBridge — Learn Today. Build Tomorrow.

A lightweight, mobile-friendly educational website designed for low-bandwidth use.

## Included in this version
- Common Subjects: Mathematics, English, and SAT preparation.
- Natural Science: Chemistry, Physics, and Biology.
- Social Science: History, Geography, and Economics.
- Subject → Grade 9–12 → Unit → Notes → unit quiz navigation.
- A 15-question quiz for each selected unit, with feedback after checking. Every question shows the correct answer and an explanation; incorrect answers also show the learner's selected answer.
- Unit completion, saved units, quiz scores, dark/light theme, larger text, and browser-local progress.
- Service-worker cache for the website shell after a first successful online visit.

## Important curriculum/content status
This is an upgraded functional framework, not yet a complete official curriculum content pack. Several unit titles—especially some History, Geography, and Economics grade lists—are marked for verification against the current Ethiopian Ministry of Education textbook before they should be treated as official. The lesson screen currently gives study-method guidance where verified subject-specific notes are not yet available. The generated 15-question set is a practice scaffold about studying the unit, not a substitute for 15 reviewed subject-content questions. Replace these scaffolding questions and generic notes with reviewed, unit-specific educational material before presenting the site as a full curriculum resource.

Do not label unverified titles, generic notes, or scaffold questions as official curriculum content. Use original explanations and questions; do not copy entire copyrighted textbooks.

## Deploy to Cloudflare Pages
The site is static. Keep `index.html`, `app.js`, `styles.css`, `manifest.json`, `icon.svg`, and `sw.js` together in the deployed root. If Cloudflare Pages is connected to GitHub, commit the updated files to the configured branch and wait for its deployment to finish.

## Offline note
Offline caching works only after the learner has successfully opened the site online over HTTPS at least once. Progress is saved in the browser on that device and is not synced to other devices.
