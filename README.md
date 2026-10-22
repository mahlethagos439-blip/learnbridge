# LearnBridge — Learn Today. Build Tomorrow.

A lightweight, mobile-friendly learning website for Ethiopia's New Curriculum, designed for low-bandwidth use.

## Included in this package
- Exactly nine visible subjects: Mathematics, English, SAT, Biology, Chemistry, Physics, Geography, Economics, and History.
- Three learning groups: Common Subjects, Natural Science, and Social Science.
- Fixed horizontal bottom navigation: Home, Lessons, Quizzes, Progress, and More.
- Grade 9–12 subject/unit navigation, lesson framework, unit quiz feedback, progress, saved units, theme and text-size settings.
- A local question bank with a target of 500 practice items per subject (4,500 total in the current draft bank), tagged by grade and topic, with multiple-choice options and explanations. The Quizzes section opens a paginated subject bank directly.
- Offline-capable static assets after the first successful HTTPS visit; progress is stored locally on the device.

## Important accuracy status
The 4,500 question count is implemented, but these are **draft practice items**, not a claim of complete textbook verification. A subset is broad-concept practice and some questions have been varied from seed concepts. The bank still requires careful textbook-by-textbook checking for exact grade, unit, subtopic, answer, explanation, duplicate quality, and curriculum fit. Do not advertise it as a fully verified national-exam question bank yet.

The lesson screen has a structured note framework with competencies, key terms, explanations, worked-example method, activities, review questions, and summaries. Some subject/unit notes are still general frameworks rather than complete, page-by-page notes from the official student textbooks. Unit lists for some Social Science grades remain explicitly unverified.

## New Curriculum source references
- Ministry of Education textbook announcements: https://t.me/s/ethio_moe/33
- Ministry textbook library: https://camaraethiopia.org.et/CEE_MoE_Plasma/index.php
- Ethiopia Schoolnet Learning Passport: https://ethiopia-schoolnet.learningpassport.org/
- New-curriculum catalogue (independent; cross-check): https://kehulum.com/student-textbook/new
- Grade 9 Mathematics textbook information: https://kehulum.com/student-textbook/new/grade-9/mathematics

The Ministry's Grade 9 listing includes Mathematics, Physics, Geography, English, ICT, Chemistry and other student textbooks. Always verify the exact grade and edition against the current Ministry-issued book.

## Files
- `index.html`: app shell and script loading
- `app.js`: UI, subject/grade/unit navigation, notes, quiz logic, progress
- `question-bank.js`: 4,500 original draft practice items
- `content-status.json`: subject counts, sources, and verification status
- `styles.css`: responsive styles and fixed bottom navigation
- `manifest.json`, `icon.svg`, `sw.js`: installability and offline shell

## Deploy to Cloudflare Pages
Keep all files together in the deployed root. If connected to GitHub, commit the updated files to the configured branch and wait for deployment.

## Next required quality pass
1. Verify all unit titles against each current Ministry-issued Grade 9–12 textbook.
2. Read each unit and replace general note frameworks with original, detailed, unit-specific teaching notes.
3. Review each question and answer against the same textbook; remove duplicates, incorrect items, and mismatched grade/unit tags.
4. Test every subject/grade/unit route, answer feedback, progress storage, and offline behavior.
