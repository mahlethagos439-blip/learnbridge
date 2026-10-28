// ==========================================
// LEARNBRIDGE LESSON RENDERER ADAPTER (app.js)
// ==========================================
// Place this function inside your app.js where the lesson view is rendered.
// It safely handles both legacy schemas and the new comprehensive Biology schema.

function lesson(subjectKey, gradeNum, unitIdentifier) {
  // 1. Locate the correct global notes object based on subject and grade
  let notesDataset = null;
  const sub = subjectKey.toLowerCase();

  if (sub.includes("biology")) {
    if (gradeNum === 9) notesDataset = typeof GRADE9_BIOLOGY_NOTES !== 'undefined' ? GRADE9_BIOLOGY_NOTES : null;
    else if (gradeNum === 10) notesDataset = typeof GRADE10_BIOLOGY_NOTES !== 'undefined' ? GRADE10_BIOLOGY_NOTES : null;
    else if (gradeNum === 11) notesDataset = typeof GRADE11_BIOLOGY_NOTES !== 'undefined' ? GRADE11_BIOLOGY_NOTES : null;
    else if (gradeNum === 12) notesDataset = typeof GRADE12_BIOLOGY_NOTES !== 'undefined' ? GRADE12_BIOLOGY_NOTES : null;
  }

  // Fallback check if dataset is missing
  if (!notesDataset || !notesDataset.units) {
    return renderErrorState("Notes dataset for Grade " + gradeNum + " " + subjectKey + " could not be loaded.");
  }

  // 2. Flexible Unit Matching (Supports unit_number, numeric index, or title string)
  let rawUnit = notesDataset.units.find(u => {
    const uNum = u.unit_number || u.id;
    const uTitle = u.unit_title || u.title || "";
    
    if (typeof unitIdentifier === 'number' || !isNaN(unitIdentifier)) {
      return Number(uNum) === Number(unitIdentifier);
    }
    return String(uTitle).toLowerCase().includes(String(unitIdentifier).toLowerCase()) ||
           String(uNum).toLowerCase() === String(unitIdentifier).toLowerCase();
  });

  if (!rawUnit) {
    return renderErrorState("The notes for this unit could not be matched. Check the unit title and notes.js.");
  }

  // 3. Normalize Schema (Bridges old vs. new field names safely)
  const unit = {
    number: rawUnit.unit_number || rawUnit.id || 1,
    title: rawUnit.unit_title || rawUnit.title || "Untitled Unit",
    objectives: rawUnit.learning_objectives || rawUnit.objectives || [],
    sections: (rawUnit.sections || []).map(s => ({
      id: s.section_id || s.id || "sec",
      title: s.title || "Section",
      content: s.content || s.text || ""
    })),
    workedExamples: rawUnit.worked_examples || [],
    activities: (rawUnit.activities || []).map(a => ({
      title: a.title || "Practical Activity",
      procedure: a.procedure || a.description || ""
    })),
    summary: rawUnit.summary || "No summary provided.",
    questions: (rawUnit.practice_questions || rawUnit.questions || []).map(q => ({
      id: q.id || "q",
      difficulty: q.difficulty || "medium",
      question: q.question || q.s || "",
      options: q.options || [],
      correctIndex: q.correct_index !== undefined ? q.correct_index : (q.correctIndex !== undefined ? q.correctIndex : 0),
      explanation: q.explanation || "No explanation provided."
    }))
  };

  // 4. Render HTML Structure
  let html = `
    <div class="lesson-container">
      <nav class="lesson-breadcrumbs">
        <a href="#dashboard">Dashboard</a> &gt; <span>Grade ${gradeNum} ${notesDataset.subject}</span> &gt; <strong>Unit ${unit.number}: ${esc(unit.title)}</strong>
      </nav>
      
      <header class="lesson-header">
        <h1>Unit ${unit.number}: ${esc(unit.title)}</h1>
        <p class="curriculum-tag">${esc(notesDataset.curriculum || "MoE New Curriculum")}</p>
      </header>
  `;

  // Objectives
  if (unit.objectives.length > 0) {
    html += `
      <section class="lesson-section objectives-box">
        <h3>Learning Objectives & Competencies</h3>
        <ul>
          ${unit.objectives.map(obj => `<li>${esc(obj)}</li>`).join('')}
        </ul>
      </section>
    `;
  }

  // Sections
  unit.sections.forEach(sec => {
    html += `
      <section class="lesson-section">
        <h3>${esc(sec.title)}</h3>
        <p>${esc(sec.content)}</p>
      </section>
    `;
  });

  // Worked Examples
  if (unit.workedExamples.length > 0) {
    html += `<section class="lesson-section worked-examples-box"><h3>Worked Examples & Calculations</h3>`;
    unit.workedExamples.forEach((we, idx) => {
      html += `
        <div class="worked-example-card">
          <h4>Example ${idx + 1}: ${esc(we.title || "Problem")}</h4>
          <p><strong>Problem:</strong> ${esc(we.problem)}</p>
          <p><strong>Solution:</strong></p>
          <pre class="solution-text">${esc(we.solution)}</pre>
        </div>
      `;
    });
    html += `</section>`;
  }

  // Activities
  if (unit.activities.length > 0) {
    html += `<section class="lesson-section activities-box"><h3>Practical Activities & Experiments</h3>`;
    unit.activities.forEach(act => {
      html += `
        <div class="activity-card">
          <h4>🧪 ${esc(act.title)}</h4>
          <p><strong>Procedure:</strong> ${esc(act.procedure)}</p>
        </div>
      `;
    });
    html += `</section>`;
  }

  // Summary
  html += `
    <section class="lesson-section summary-box">
      <h3>Unit Summary</h3>
      <p>${esc(unit.summary)}</p>
    </section>
  `;

  // Practice Questions Quiz Section
  if (unit.questions.length > 0) {
    html += `
      <section class="lesson-section quiz-section">
        <h3>Practice Questions & Examination Review</h3>
    `;
    unit.questions.forEach((q, qIdx) => {
      html += `
        <div class="quiz-question-card" data-qid="${q.id}">
          <p><strong>Q${qIdx + 1} [${q.difficulty.toUpperCase()}] :</strong> ${esc(q.question)}</p>
          <div class="quiz-options">
            ${q.options.map((opt, optIdx) => `
              <label class="quiz-option-label">
                <input type="radio" name="question_${q.id}" value="${optIdx}">
                <span>${esc(opt)}</span>
              </label>
            `).join('')}
          </div>
          <button class="btn-check-answer" onclick="checkQuizAnswer('${q.id}', ${q.correctIndex}, \`${esc(q.explanation)}\`)">Check Answer</button>
          <div id="feedback_${q.id}" class="quiz-feedback" style="display:none; margin-top:8px; padding:8px; border-radius:4px;"></div>
        </div>
      `;
    });
    html += `</section>`;
  }

  html += `
      <div class="lesson-footer-actions">
        <button class="btn-primary" onclick="markUnitComplete(${gradeNum}, '${subjectKey}', ${unit.number})">Mark Unit Complete ✅</button>
        <button class="btn-secondary" onclick="saveUnitForLater(${gradeNum}, '${subjectKey}', ${unit.number})">Save Unit 🔖</button>
      </div>
    </div>
  `;

  return html;
}

function renderErrorState(message) {
  return `
    <div class="error-container" style="padding: 40px; text-align: center;">
      <h2>Biology notes unavailable</h2>
      <p>${esc(message)}</p>
      <a href="#dashboard" class="btn-primary">Return to Dashboard</a>
    </div>
  `;
     }
                                                                                                          
