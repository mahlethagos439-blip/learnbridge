LearnBridge Biology subtopic rendering fix

This build loads content/biology-notes.js before app.js and routes Biology unit pages to biologyLesson(). Matching first uses the selected grade and unit number, with normalized title matching as a fallback, so differences in punctuation or title wording do not silently fall back to the generic lesson template. Each matching unit renders its numbered subtopics and detailed_note/example content.

The subtopic numbering/content is a study-guide structure and still needs comparison against the exact official textbook edition used by the learner.
