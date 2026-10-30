
/* =========================================
   LEARNBRIDGE — MAIN APPLICATION
   Learn Today. Build Tomorrow.
========================================= */

"use strict";

/* ---------- SUBJECT DATA ---------- */

const subjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Develop mathematical understanding and problem-solving skills.",
    topics: [
      "Number Systems, Sets, and Real Numbers",
      "Algebraic Expressions, Equations, and Inequalities",
      "Relations, Functions, and Graphs",
      "Polynomial, Rational, Exponential, and Logarithmic Functions",
      "Trigonometry and Applications",
      "Coordinate Geometry, Vectors, and Matrices",
      "Statistics, Probability, and Calculus"
    ]
  },
  {
    id: "physics",
    name: "Physics",
    description: "Understand matter, energy, motion, and the physical world.",
    topics: [
      "Physical Quantities, Units, and Measurement",
      "Motion: Kinematics and Graphs",
      "Forces, Newton’s Laws, and Momentum",
      "Work, Energy, and Power",
      "Waves, Sound, and Oscillations",
      "Electricity, Magnetism, and Electromagnetic Induction",
      "Optics, Modern Physics, and Nuclear Physics"
    ]
  },
  {
    id: "chemistry",
    name: "Chemistry",
    description: "Explore matter, chemical reactions, and their applications.",
    topics: [
      "Acid–Base Equilibria",
      "Electrochemistry",
      "Chemical Bonding and Molecular Structure",
      "Chemical Equilibrium and Chemical Kinetics",
      "Solutions and Stoichiometry",
      "Organic Chemistry",
      "Industrial Chemistry and Polymers"
    ]
  },
  {
    id: "biology",
    name: "Biology",
    description: "Study living organisms and the processes of life.",
    topics: [
      "Cell Biology and Cell Division",
      "Biological Molecules, Enzymes, and Metabolism",
      "Plant Structure, Transport, and Photosynthesis",
      "Human Body Systems and Homeostasis",
      "Genetics, DNA, and Inheritance",
      "Evolution, Classification, and Biodiversity",
      "Ecology, Ecosystems, and Environmental Biology"
    ]
  },
  {
    id: "geography",
    name: "Geography",
    description: "Explore Earth, environments, people, and places.",
    topics: [
      "Map Reading, Scale, Direction, and Geographic Skills",
      "Earth’s Structure, Rocks, and Landforms",
      "Weather, Climate, and Climate Change",
      "Natural Resources and Environmental Management",
      "Population, Settlement, and Migration",
      "Agriculture, Industry, Transport, and Trade",
      "Geography of Ethiopia and Africa"
    ]
  },
  {
    id: "history",
    name: "History",
    description: "Understand historical events, societies, and civilizations.",
    topics: [
      "Historical Sources, Evidence, and Chronology",
      "Ancient Civilizations and Early Societies",
      "Ancient and Medieval Ethiopian History",
      "The Rise and Development of States and Empires",
      "Ethiopia in the Nineteenth Century",
      "Ethiopia in the Twentieth Century and Modern Period",
      "African History, Colonialism, and Independence"
    ]
  },
  {
    id: "economics",
    name: "Economics",
    description: "Learn how individuals, businesses, and economies make decisions.",
    topics: [
      "Introduction to Economics, Scarcity, and Choice",
      "Demand, Supply, and Market Equilibrium",
      "Consumer Behaviour and Utility",
      "Production, Costs, and Market Structures",
      "Money, Banking, and Financial Systems",
      "National Income, Inflation, and Unemployment",
      "Economic Growth, Development, and the Ethiopian Economy"
    ]
  }
];


/* ---------- APPLICATION STATE ---------- */

const appState = {
  currentPage: "home",
  currentSubject: null,
  currentTopic: null
};


/* ---------- ELEMENT HELPERS ---------- */

function getElement(id) {
  return document.getElementById(id);
}

function normalizeId(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const characters = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return characters[character];
  });
}


/* ---------- PAGE NAVIGATION ---------- */

function showPage(pageName) {
  const page = normalizeId(pageName);

  const pageElements = document.querySelectorAll(".page[data-page]");

  const targetPage = Array.from(pageElements).find(element => {
    return normalizeId(element.dataset.page) === page;
  });

  if (!targetPage) {
    console.warn("LearnBridge: Page not found:", pageName);
    return;
  }

  pageElements.forEach(element => {
    const isActive = element === targetPage;

    element.hidden = !isActive;
    element.classList.toggle("active", isActive);
  });

  appState.currentPage = page;

  updateBottomNavigation(page);
  closeDrawer();

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
}


/* ---------- BOTTOM NAVIGATION ---------- */

function updateBottomNavigation(pageName) {
  document.querySelectorAll(".nav-item[data-navigate]").forEach(button => {
    const isActive =
      normalizeId(button.dataset.navigate) === normalizeId(pageName);

    button.classList.toggle("active", isActive);

    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}


/* ---------- SUBJECT LOOKUP ---------- */

function findSubject(subjectId) {
  const normalized = normalizeId(subjectId);

  return subjects.find(subject => {
    return (
      subject.id === normalized ||
      normalizeId(subject.name) === normalized
    );
  });
}


/* ---------- LESSONS PAGE ---------- */

function renderLessons() {
  const container = getElement("lessonsContent");

  if (!container) return;

  container.innerHTML = `
    <div class="lesson-grid">
      ${subjects.map(subject => `
        <article class="lesson-card">
          <h3>${escapeHTML(subject.name)}</h3>
          <p>${escapeHTML(subject.description)}</p>
          <button
            class="primary-button"
            type="button"
            data-open-subject="${escapeHTML(subject.id)}"
          >
            View topics
          </button>
        </article>
      `).join("")}
    </div>
  `;
}


/* ---------- SUBJECT PAGE ---------- */

function openSubject(subjectId) {
  const subject = findSubject(subjectId);

  if (!subject) {
    console.warn("LearnBridge: Subject not found:", subjectId);
    return;
  }

  appState.currentSubject = subject;
  appState.currentTopic = null;

  const title = getElement("subjectPageTitle");
  const description = getElement("subjectPageDescription");
  const topicsContainer = getElement("subjectTopics");

  if (title) {
    title.textContent = subject.name;
  }

  if (description) {
    description.textContent = subject.description;
  }

  if (topicsContainer) {
    topicsContainer.innerHTML = `
      <div class="topic-grid">
        ${subject.topics.map((topic, index) => `
          <article class="topic-card">
            <h3>${escapeHTML(topic)}</h3>
            <p>Topic ${index + 1}</p>
            <button
              class="primary-button"
              type="button"
              data-open-topic="${index}"
            >
              Open topic
            </button>
          </article>
        `).join("")}
      </div>
    `;
  }

  showPage("subject");
}


/* ---------- NOTE PAGE ---------- */

function openTopic(topicIndex) {
  const subject = appState.currentSubject;

  if (!subject) return;

  const index = Number(topicIndex);

  if (
    !Number.isInteger(index) ||
    index < 0 ||
    index >= subject.topics.length
  ) {
    console.warn("LearnBridge: Invalid topic:", topicIndex);
    return;
  }

  const topic = subject.topics[index];

  appState.currentTopic = topic;

  const title = getElement("notePageTitle");
  const content = getElement("noteContent");

  if (title) {
    title.textContent = topic;
  }

  /*
    Detailed lesson notes will be connected
    through the subject note modules later.
    This file does not invent lesson content.
  */

  if (content) {
    content.innerHTML = "";
  }

  showPage("note");
}


/* ---------- HAMBURGER DRAWER ---------- */

function openDrawer() {
  const drawer = getElement("drawer");
  const menuButton = getElement("menuButton");

  if (!drawer) return;

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");

  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "true");
  }

  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  const drawer = getElement("drawer");
  const menuButton = getElement("menuButton");

  if (!drawer) return;

  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");

  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");
  }

  document.body.style.overflow = "";
}

function toggleDrawer() {
  const drawer = getElement("drawer");

  if (!drawer) return;

  if (drawer.classList.contains("open")) {
    closeDrawer();
  } else {
    openDrawer();
  }
}


/* ---------- GENERAL CLICK HANDLING ---------- */

function handleApplicationClick(event) {
  const subjectButton = event.target.closest("[data-open-subject]");

  if (subjectButton) {
    openSubject(subjectButton.dataset.openSubject);
    return;
  }

  const topicButton = event.target.closest("[data-open-topic]");

  if (topicButton) {
    openTopic(topicButton.dataset.openTopic);
    return;
  }

  const subjectCard = event.target.closest("[data-subject]");

  if (subjectCard) {
    openSubject(subjectCard.dataset.subject);
    return;
  }

  const navigationButton = event.target.closest("[data-navigate]");

  if (navigationButton) {
    showPage(navigationButton.dataset.navigate);
  }
}


/* ---------- QUIZ PAGE ---------- */

function prepareQuizPage() {
  const container = getElement("quizzesContent");

  if (!container) return;

  /*
    Quiz questions and quiz functionality
    will be developed in the later quiz phase.
    No fake questions or scores are added here.
  */

  container.innerHTML = `
    <div class="content-card">
      <h3>Quizzes</h3>
      <p>
        The quiz section will be connected after
        the other LearnBridge features are completed.
      </p>
    </div>
  `;
}


/* ---------- INITIALIZE APPLICATION ---------- */

function initializeLearnBridge() {
  renderLessons();
  prepareQuizPage();

  const menuButton = getElement("menuButton");
  const closeMenuButton = getElement("closeMenu");
  const drawer = getElement("drawer");
  

  if (menuButton) {
    menuButton.addEventListener("click", toggleDrawer);
    menuButton.setAttribute("aria-expanded", "false");
  }

  if (closeMenuButton) {
    closeMenuButton.addEventListener("click", closeDrawer);
  }

  if (drawer) {
    drawer.addEventListener("click", event => {
      if (event.target === drawer) {
        closeDrawer();
      }
    });
  }

  
  

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeDrawer();
    }
  });

  document.addEventListener("click", handleApplicationClick);

  /*
    Start on the homepage.
    The other pages are hidden until selected.
  */

  showPage("home");
}


/* ---------- START APPLICATION ---------- */

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeLearnBridge,
    { once: true }
  );
} else {
  initializeLearnBridge();
}
