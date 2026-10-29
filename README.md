# LearnBridge — Modern Design & Feature Foundation

This package is the design-and-features foundation for LearnBridge. It intentionally excludes the question-bank file and does not display prewritten lesson notes, quiz questions, seeded flashcards, or glossary entries. Add the actual curriculum content and question bank separately with Gemini.

## Included
- Refreshed, responsive homepage and subject-area cards
- Nine subject areas: Mathematics, English, SAT, Biology, Chemistry, Physics, Geography, Economics, History
- Prepared lesson and quiz screens with empty content states for Gemini to fill
- Study planner saved locally on this device
- Flashcard and glossary workspaces (empty until content is added)
- Progress, saved units, settings, profile/auth scaffolding
- Light/dark theme styling already present in the app

## Setup and limitations
- Firebase sign-in requires your own project configuration in `auth-config.js`; it is not preconfigured.
- Progress/planner information is stored locally unless a backend is added.
- This is a mobile-friendly web app package, not an Android APK.
- ZIP integrity and JavaScript syntax should be checked after any further edits; visual/browser testing on the user's phone is still needed.
- Gemini should add verified textbook-aligned notes, page-by-page lesson structure, real practice questions, answer keys, explanations, and working quiz logic.

## Run
Extract the ZIP and open `index.html` in a browser for basic testing. A local/static web server is recommended for progressive web app/service-worker behavior.
