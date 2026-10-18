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


## Curriculum sources and accuracy note

This project is intended for Ethiopia's **new curriculum**, not the old curriculum. The following catalogue pages were checked for unit names/counts during this revision. Notes in the app should be written as original explanations based on the textbook's concepts, not copied pages. A title should not be treated as verified unless it is explicitly listed in the relevant new-curriculum student textbook.

- All grades and subjects catalogue: https://kehulum.com/student-textbook/new
- Grade 9 Mathematics (9 units): https://kehulum.com/student-textbook/new/grade-9/mathematics
- Grade 10 Mathematics (7 units): https://kehulum.com/student-textbook/new/grade-10/mathematics
- Grade 11 Mathematics: https://kehulum.com/student-textbook/new/grade-11/mathematics
- Grade 12 Mathematics (5 units): https://kehulum.com/student-textbook/new/grade-12/mathematics
- Grade 9 Chemistry (5 units): https://kehulum.com/student-textbook/new/grade-9/chemistry
- Grade 10 Chemistry (6 units): https://kehulum.com/student-textbook/new/grade-10/chemistry
- Grade 11 Chemistry (6 units): https://kehulum.com/student-textbook/new/grade-11/chemistry
- Grade 12 Chemistry (5 units): https://kehulum.com/student-textbook/new/grade-12/chemistry
- Grade 9 Biology (6 units): https://kehulum.com/student-textbook/new/grade-9/biology
- Grade 10 Biology (6 units): https://kehulum.com/student-textbook/new/grade-10/biology
- Grade 11 Biology (6 units): https://kehulum.com/student-textbook/new/grade-11/biology
- Grade 12 Biology (6 units): https://kehulum.com/student-textbook/new/grade-12/biology
- Grade 9 Physics (7 units): https://kehulum.com/student-textbook/new/grade-9/physics
- Grade 9 English for Ethiopia (10 units): https://kehulum.com/student-textbook/new/grade-9/english-for-ethiopia

**Important completion status:** this revision fixes the five-item bottom navigation and makes answer feedback appear immediately. Some unit lists and the lesson/quiz bank still need a complete textbook-by-textbook verification pass; do not describe the entire curriculum or all 15-question sets as fully verified until that work is complete. The current general lesson template is not a substitute for detailed unit-specific textbook-based notes and assessment items.
