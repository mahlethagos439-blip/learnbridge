# LearnBridge — Learn Today. Build Tomorrow.

A lightweight, mobile-friendly educational website designed for low-bandwidth use.

## Updated in this revision

- Fixed five-item bottom navigation: **Home, Lessons, Quizzes, Progress, More**.
- Kept the existing subject → grade → unit → notes → quiz flow and the existing local progress, saved units, theme, text-size, and offline shell features.
- Added a persistent **Question feedback** setting in **More → Settings**:
  - **After each answer**: show the correct answer and explanation immediately after the student answers.
  - **After finishing quiz**: hide correctness and explanations until the student finishes the quiz, then reveal the answers and explanations for all questions.
- Kept the setting saved on the current device using the existing local storage pattern.
- Updated the service-worker cache version so browsers can fetch the updated site files.

## Important curriculum status

This ZIP is a functional website framework, **not a fully verified curriculum content pack yet**. Unit titles and subject coverage in `app.js` still need a textbook-by-textbook review for every subject and grade. The current 15-question bank consists of study-skills scaffold questions, not genuine subject-content assessments. Lesson pages now say this clearly rather than claiming the questions are verified curriculum questions.

Before advertising LearnBridge as fully aligned with Ethiopia's new curriculum, complete these steps for each grade and subject:
1. Check the relevant current student textbook and, where available, teacher guide.
2. Record exact unit titles and subtopics from the book's table of contents.
3. Write original notes that explain the actual concepts, definitions, formulas, examples, and learning outcomes in those subtopics.
4. Write subject-content questions matched to the same subtopics and difficulty, verify the correct answer, and include a detailed explanation for every option where appropriate.
5. Mark a unit curriculum-verified only after the content has been reviewed against the source.

Useful starting points:
- Ethiopian Ministry of Education: https://www.moe.gov.et/
- Ethiopia Schoolnet Learning Passport: https://ethiopia-schoolnet.learningpassport.org/
- Grade 9 Mathematics new-curriculum textbook hosted by the Ministry's regional education bureau: https://www.cerboed.gov.et/sites/default/files/Resources/Grade%209%20Mathematics_0.pdf
- Textbook catalogue for new-curriculum books: https://kehulum.com/student-textbook/new

Use textbooks as sources for accuracy, but create original explanations and questions. Do not reproduce entire copyrighted textbook chapters or pages.

## Deploy to Cloudflare Pages

This is a static site. Keep `index.html`, `app.js`, `styles.css`, `manifest.json`, `icon.svg`, and `sw.js` together in the deployed root. If Cloudflare Pages is connected to GitHub, commit the updated files to the configured branch and wait for its deployment to finish.

## Offline note

Offline caching works only after the learner has successfully opened the site online over HTTPS at least once. Progress is saved in the browser on that device and is not synced to other devices.
