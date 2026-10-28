
import React, { useState } from "react";

const menuItems = [
  { name: "Home", icon: "⌂" },
  { name: "Lessons", icon: "▤" },
  { name: "Quizzes", icon: "✎" },
  { name: "Progress", icon: "↗" },
  { name: "More", icon: "•••" },
];

const css = `
* { box-sizing: border-box; }
body { margin: 0; background: #080B18; }
.lb {
  min-height: 100vh; padding-bottom: 92px; color: #F5F4FF;
  background: #080B18;
  font-family: Inter, system-ui, -apple-system, sans-serif;
}
.lb button { font: inherit; cursor: pointer; }
.lb button:focus-visible { outline: 2px solid #B9AAFF; outline-offset: 3px; }
.lb-header {
  position: sticky; top: 0; z-index: 5;
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 5%; border-bottom: 1px solid #282B43;
  background: rgba(8,11,24,.94); backdrop-filter: blur(16px);
}
.lb-brand { display: flex; align-items: center; gap: 11px; }
.lb-logo {
  display: grid; place-items: center; width: 43px; height: 43px;
  border-radius: 14px; font-size: 23px; font-weight: 900;
  background: linear-gradient(135deg,#AA91FF,#6254DB);
  box-shadow: 0 0 27px #8270FF40;
}
.lb-name { font-size: 19px; font-weight: 850; letter-spacing: -.6px; }
.lb-tag { color: #979DBB; font-size: 11px; margin-top: 3px; }
.lb-avatar {
  width: 42px; height: 42px; border-radius: 14px;
  border: 1px solid #494266; background: #1C1A35; color: #D7CEFF;
  font-size: 19px;
}
.lb-wrap { width: min(1100px,100%); margin: auto; padding: 28px 5%; }
.lb-welcome { color: #A5ACCB; font-size: 13px; margin-bottom: 10px; }
.lb-hero {
  overflow: hidden; position: relative; border-radius: 26px;
  border: 1px solid #3A355E; padding: clamp(25px,5vw,48px);
  background: radial-gradient(ellipse at 90% 10%,#7C63E84A,transparent 45%),
  linear-gradient(130deg,#1C1B39,#111528 70%,#1C1737);
}
.lb-hero:after {
  content: ""; position: absolute; width: 180px; height: 180px;
  right: -75px; bottom: -95px; border: 1px solid #BBAAFF66;
  border-radius: 50%; box-shadow: 0 0 0 22px #BBAAFF0D,0 0 0 44px #BBAAFF08;
  pointer-events: none;
}
.lb-eyebrow { color: #BCAEFF; font-size: 11px; font-weight: 800; letter-spacing: 2px; }
.lb-hero h1 {
  max-width: 650px; font-size: clamp(34px,6vw,57px);
  line-height: 1.1; letter-spacing: -1.8px; margin: 18px 0;
}
.lb-gradient {
  background: linear-gradient(90deg,#BDAAFF,#7DE1DF);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.lb-hero p { color: #B6BCD6; font-size: 14px; line-height: 1.8; max-width: 510px; }
.lb-actions { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 24px; }
.lb-primary,.lb-secondary { padding: 13px 18px; border-radius: 13px; font-weight: 750; }
.lb-primary {
  color: white; border: 0;
  background: linear-gradient(110deg,#927CF5,#665EE0);
  box-shadow: 0 8px 24px #7565E733;
}
.lb-secondary { color: #E7E3FF; border: 1px solid #484363; background: #17182D; }
.lb-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 32px 0 16px; }
.lb-heading h2 { font-size: 21px; letter-spacing: -.5px; margin: 0; }
.lb-muted { color: #979FBD; font-size: 12px; line-height: 1.7; }
.lb-stats { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 12px; margin-top: 16px; }
.lb-stat { padding: 18px; border: 1px solid #292D47; background: #111528; border-radius: 18px; }
.lb-stat-icon { font-size: 21px; margin-bottom: 12px; }
.lb-stat-number { font-size: 24px; font-weight: 850; }
.lb-stat-label { color: #9AA2C0; font-size: 12px; margin-top: 5px; }
.lb-shortcuts { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 13px; }
.lb-shortcut {
  display: block; width: 100%; padding: 20px; text-align: left;
  color: #F4F4FF; border: 1px solid #2D314B; border-radius: 18px;
  background: linear-gradient(145deg,#171B30,#101324);
  transition: transform .18s,border-color .18s;
}
.lb-shortcut:hover { transform: translateY(-3px); border-color: #8273E6; }
.lb-short-icon { font-size: 25px; margin-bottom: 15px; }
.lb-short-title { font-size: 14px; font-weight: 800; }
.lb-short-desc { color: #9EA5C3; font-size: 12px; line-height: 1.7; margin-top: 7px; }
.lb-panel { padding: 23px; border: 1px solid #2C304A; border-radius: 20px; background: #111528; }
.lb-search {
  width: 100%; padding: 14px; border-radius: 13px;
  background: #0D1122; color: white; border: 1px solid #303550;
  font-size: 14px; margin: 8px 0 17px;
}
.lb-search:focus { outline: 1px solid #9C8BFF; }
.lb-list { display: grid; gap: 10px; }
.lb-list-btn {
  display: flex; justify-content: space-between; align-items: center;
  width: 100%; padding: 17px; text-align: left; color: #F5F4FF;
  background: #171A2E; border: 1px solid #30344D; border-radius: 14px;
}
.lb-back { border: 0; background: transparent; color: #B9ABFF; padding: 0; margin-bottom: 20px; }
.lb-bottom {
  display: none; position: fixed; z-index: 10; bottom: 0; left: 0; right: 0;
  grid-template-columns: repeat(5,minmax(0,1fr)); gap: 3px;
  padding: 9px 5px calc(9px + env(safe-area-inset-bottom));
  background: #0D1022F7; border-top: 1px solid #292D45; backdrop-filter: blur(16px);
}
.lb-nav {
  display: flex; flex-direction: column; align-items: center; gap: 5px;
  color: #9299B8; background: transparent; border: 0; padding: 5px 0; font-size: 10px;
}
.lb-nav-icon { font-size: 20px; }
.lb-nav.active { color: #C5B9FF; }
.lb-note { margin-top: 18px; color: #858EAF; font-size: 12px; line-height: 1.7; }
@media(max-width:650px) {
  .lb-header { padding: 13px 16px; }
  .lb-wrap { padding: 23px 16px; }
  .lb-shortcuts { grid-template-columns: 1fr; }
  .lb-shortcut { display: flex; align-items: center; gap: 15px; padding: 16px; }
  .lb-short-icon { margin: 0; min-width: 30px; }
  .lb-stats { gap: 8px; }
  .lb-stat { padding: 12px; }
  .lb-stat-number { font-size: 21px; }
  .lb-stat-label { font-size: 10px; }
  .lb-bottom { display: grid; }
  .lb-hero h1 { letter-spacing: -1px; }
}
`;

export default function App() {
  const [page, setPage] = useState("Home");
  const [search, setSearch] = useState("");

  function navigate(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const shortcuts = [
    { title: "Explore Lessons", desc: "Open the learning area and continue your studies.", icon: "▤", page: "Lessons" },
    { title: "Practice Quizzes", desc: "Open the quiz area to practise when questions are added.", icon: "✎", page: "Quizzes" },
    { title: "Your Progress", desc: "View your learning progress and study activity.", icon: "↗", page: "Progress" },
  ];

  const moreItems = [
    { title: "Profile", desc: "Your account and personal settings." },
    { title: "Settings", desc: "Application preferences." },
    { title: "Help", desc: "Help and information about LearnBridge." },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="lb">
        <header className="lb-header">
          <div className="lb-brand">
            <div className="lb-logo">L</div>
            <div>
              <div className="lb-name">LearnBridge</div>
              <div className="lb-tag">Learn Today. Build Tomorrow.</div>
            </div>
          </div>
          <button className="lb-avatar" onClick={() => navigate("More")} aria-label="Open profile">◎</button>
        </header>

        <main className="lb-wrap">
          {page === "Home" && (
            <>
              <div className="lb-welcome">WELCOME TO YOUR LEARNING SPACE</div>
              <section className="lb-hero">
                <div className="lb-eyebrow">YOUR FUTURE STARTS HERE</div>
                <h1>Learn Today.<br /><span className="lb-gradient">Build Tomorrow.</span></h1>
                <p>
                  Your learning journey, organised in one place.
                  Explore your study areas, practise your skills, and keep moving toward your goals.
                </p>
                <div className="lb-actions">
                  <button className="lb-primary" onClick={() => navigate("Lessons")}>Explore learning →</button>
                  <button className="lb-secondary" onClick={() => navigate("Quizzes")}>Open quizzes</button>
                </div>
              </section>

              <div className="lb-stats">
                <div className="lb-stat"><div className="lb-stat-icon">✦</div><div className="lb-stat-number">9</div><div className="lb-stat-label">Planned subjects</div></div>
                <div className="lb-stat"><div className="lb-stat-icon">▤</div><div className="lb-stat-number">Learn</div><div className="lb-stat-label">Study area</div></div>
                <div className="lb-stat"><div className="lb-stat-icon">↗</div><div className="lb-stat-number">Grow</div><div className="lb-stat-label">One step at a time</div></div>
              </div>

              <div className="lb-heading"><h2>Quick access</h2><span className="lb-muted">Choose where to go</span></div>
              <div className="lb-shortcuts">
                {shortcuts.map(item => (
                  <button className="lb-shortcut" key={item.title} onClick={() => navigate(item.page)}>
                    <div className="lb-short-icon">{item.icon}</div>
                    <div><div className="lb-short-title">{item.title} <span className="lb-gradient">→</span></div><div className="lb-short-desc">{item.desc}</div></div>
                  </button>
                ))}
              </div>
              <p className="lb-note">Learning materials and quiz questions can be added separately later.</p>
            </>
          )}

          {page === "Lessons" && (
            <>
              <button className="lb-back" onClick={() => navigate("Home")}>← Back to Home</button>
              <div className="lb-heading"><h2>Lessons</h2></div>
              <div className="lb-panel">
                <p className="lb-muted">Your learning area is ready for your lesson content.</p>
                <button className="lb-primary" onClick={() => navigate("Home")}>Return Home</button>
              </div>
            </>
          )}

          {page === "Quizzes" && (
            <>
              <button className="lb-back" onClick={() => navigate("Home")}>← Back to Home</button>
              <div className="lb-heading"><h2>Quizzes</h2></div>
              <div className="lb-panel">
                <p className="lb-muted">Your quiz area is ready for quiz questions and answer explanations.</p>
                <button className="lb-primary" onClick={() => navigate("Home")}>Return Home</button>
              </div>
            </>
          )}

          {page === "Progress" && (
            <>
              <button className="lb-back" onClick={() => navigate("Home")}>← Back to Home</button>
              <div className="lb-heading"><h2>Your Progress</h2></div>
              <div className="lb-panel">
                <p className="lb-muted">Your study progress will appear here when learning activity is connected.</p>
                <button className="lb-primary" onClick={() => navigate("Lessons")}>Go to Lessons</button>
              </div>
            </>
          )}

          {page === "More" && (
            <>
              <div className="lb-heading"><h2>More</h2></div>
              <input className="lb-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search settings and options..." aria-label="Search options" />
              <div className="lb-list">
                {moreItems.filter(item => (item.title + " " + item.desc).toLowerCase().includes(search.toLowerCase())).map(item => (
                  <button className="lb-list-btn" key={item.title} onClick={() => window.alert(item.title + " will be configured in a later step.")}>
                    <span><strong>{item.title}</strong><br /><span className="lb-muted">{item.desc}</span></span><span>→</span>
                  </button>
                ))}
                {moreItems.filter(item => (item.title + " " + item.desc).toLowerCase().includes(search.toLowerCase())).length === 0 && <p className="lb-muted">No matching options found.</p>}
              </div>
            </>
          )}
        </main>

        <nav className="lb-bottom" aria-label="Main navigation">
          {menuItems.map(item => (
            <button key={item.name} className={"lb-nav" + (page === item.name ? " active" : "")} onClick={() => navigate(item.name)}>
              <span className="lb-nav-icon">{item.icon}</span><span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
  }
    
