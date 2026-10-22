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


## English and SAT organization update
English and SAT now open directly to topic/skill lists without Grade 9–12 selectors in lesson navigation or the quiz bank. Quiz banks for these two subjects show all available topic-tagged questions together. The subject content and question explanations remain drafts requiring careful verification against current textbooks and the official SAT framework.


## Expanded lesson-note structure (October 2026)
Each lesson now includes expanded subject-specific study guidance covering core concepts, reasoning, examples/application, checking work, and transferring knowledge to a new situation. Mathematics, Physics, Chemistry, Biology, Geography, History, Economics, English, and SAT each receive different explanatory guidance. English and SAT remain topic/skill based rather than being separated by grade.

Important content-quality note: this is an expanded original study-guide layer, not a claim that every paragraph, unit title, objective, or example has been individually cross-checked against every current Ethiopian New Curriculum textbook. The Ministry textbook listings and curriculum framework are research starting points; exact unit-by-unit mapping still needs verification against the matching textbook edition. Treat curriculum-specific titles and any draft question-bank content as provisional until checked.


## Expanded lesson notes (2026-10-22)

Lesson pages now include a longer structure: learning objectives, key terms, an explanation and study method, subject-specific guidance, a detailed subtopic checklist, a worked-example approach, an activity, review questions with answers, and a summary. Mathematics, Biology, Chemistry, Physics, Geography, Economics, and History remain grade/unit based. English and SAT are organized by topic and skill without grade selectors.

### Online curriculum references checked
- Ministry of Education curriculum framework: https://www.moe.gov.et/storage/Books/Curriculum%20Framework%20for%20Ethiopian%20Education%20%28KG%20%E2%80%93%20Grade%2012%29.pdf
- Ministry of Education textbook listings: https://t.me/s/ethio_moe/27
- Ethiopia Schoolnet Learning Passport: https://ethiopia-schoolnet.learningpassport.org/
- Independent new-curriculum catalogue (cross-check only; not an official Ministry site): https://abrari.app/textbooks/grade-9
- College Board SAT Reading and Writing domains: https://satsuite.collegeboard.org/sat/whats-on-the-test/reading-writing

**Important content status:** The notes are independently written study guides and are not copied textbook pages. This package is an expanded draft, not yet a claim of complete textbook-by-textbook alignment. Some unit lists and detailed subtopic mappings—especially where the full current book contents were not accessible—must still be checked against the exact edition used by the school. The question bank remains draft-review-required; its 4,500 items are not certified as fully curriculum-aligned.


## Account registration and Profile (new)
The bottom navigation still has five horizontal sections: Home, Lessons, Quizzes, Progress, and Profile. Visitors are shown an account gate before entering the learning app. The account UI supports email/password registration and Google sign-in through Firebase Authentication. New email accounts receive an email-verification message before they can sign in. Profile shows the signed-in learner and a sign-out action; settings remain reachable from Profile. Lesson notes and question-bank content were not edited for this update.

### Required one-time Firebase setup before deployment
Authentication cannot work securely until you connect your own Firebase project; this package intentionally does not fake registration or save passwords in local storage.
1. Open https://console.firebase.google.com/ and create a Firebase project.
2. In Build → Authentication → Sign-in method, enable Email/Password and Google. Configure the support email required by Google sign-in.
3. Add a Web app and copy its Firebase web config.
4. Replace the placeholder values in `auth-config.js` with the `apiKey`, `authDomain`, `projectId`, and `appId` values from your Firebase web app. These are client web configuration values, not a service-account private key.
5. In Authentication settings, add the exact LearnBridge hosting domain to Authorized domains. Deploy all files, including `auth.js` and `auth-config.js`, over HTTPS.
6. Test registration with an email you can access, verify the email, sign in, test Google sign-in, and test sign-out.

Until step 4 is completed and the package is redeployed, users will see the Firebase setup instructions instead of an account form. This is deliberate: the app must not imply account security before a real authentication provider is configured. Learning progress remains stored locally on the device and is not yet synced to the account.
