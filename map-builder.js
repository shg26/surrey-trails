@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=IM+Fell+English+SC&family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

:root {
  --parchment: #f4e8c1;
  --parchment-dark: #e8d49a;
  --parchment-mid: #ede0b0;
  --ink: #2c1a08;
  --ink-light: #5a3a1a;
  --ink-faint: #8b6340;
  --sepia-red: #8b3a2a;
  --sepia-green: #3d5a2a;
  --sepia-blue: #2a4a6b;
  --border: #b8956a;
  --border-dark: #8b6340;
  --gold: #c9920a;
  --shadow: rgba(44,26,8,0.15);
}

* { margin:0; padding:0; box-sizing:border-box; }

body {
  font-family: 'Crimson Pro', Georgia, serif;
  background: var(--parchment);
  color: var(--ink);
  min-height: 100vh;
  overflow-x: hidden;
}

/* ===== NAV ===== */
nav {
  background: var(--ink);
  border-bottom: 3px solid var(--gold);
  padding: 10px 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-logo {
  font-family: 'IM Fell English SC', serif;
  font-size: 1.4rem;
  color: var(--parchment);
  letter-spacing: 2px;
  text-decoration: none;
}

.nav-logo span { color: var(--gold); }

.nav-links { display: flex; gap: 1.5rem; }

.nav-links a {
  font-family: 'Crimson Pro', serif;
  font-size: 1rem;
  color: var(--parchment-dark);
  text-decoration: none;
  letter-spacing: 1px;
  transition: color .2s;
}

.nav-links a:hover, .nav-links a.active { color: var(--gold); }

/* ===== SECTION HEADERS ===== */
.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 2rem;
  color: var(--ink);
  letter-spacing: 2px;
  margin-bottom: .5rem;
}

.section-subtitle {
  font-family: 'IM Fell English', serif;
  font-style: italic;
  color: var(--ink-faint);
  font-size: 1.1rem;
}

.ornamental-rule {
  display: flex;
  align-items: center;
  gap: .75rem;
  margin: .75rem auto;
  max-width: 400px;
}

.ornamental-rule::before, .ornamental-rule::after {
  content: '';
  flex: 1;
  border-top: 1.5px solid var(--border);
}

.ornamental-rule span { color: var(--gold); font-size: 1.1rem; }

/* ===== BUTTONS ===== */
.btn-primary {
  display: inline-block;
  background: var(--ink);
  color: var(--parchment);
  font-family: 'IM Fell English SC', serif;
  letter-spacing: 2px;
  padding: .75rem 2rem;
  border: 2px solid var(--gold);
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  transition: background .2s, color .2s;
}

.btn-primary:hover { background: var(--gold); color: var(--ink); }

.btn-secondary {
  display: inline-block;
  background: transparent;
  color: var(--ink);
  font-family: 'IM Fell English SC', serif;
  letter-spacing: 2px;
  padding: .75rem 2rem;
  border: 2px solid var(--border-dark);
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  transition: background .2s, color .2s;
}

.btn-secondary:hover { background: var(--ink); color: var(--parchment); }

/* ===== NEWSLETTER ===== */
#newsletter-section {
  background: var(--parchment-dark);
  border-top: 3px double var(--border-dark);
  padding: 2.5rem 2rem;
  text-align: center;
}

.newsletter-inner { max-width: 500px; margin: 0 auto; }
.newsletter-icon { font-size: 2.5rem; margin-bottom: .5rem; }

.newsletter-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 1.6rem;
  color: var(--ink);
  letter-spacing: 2px;
  margin-bottom: .25rem;
}

.newsletter-sub {
  font-family: 'IM Fell English', serif;
  font-style: italic;
  color: var(--ink-light);
  margin-bottom: 1.25rem;
  font-size: 1.05rem;
}

.newsletter-form {
  display: flex;
  gap: .75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.newsletter-input {
  flex: 1;
  min-width: 200px;
  border: 1.5px solid var(--border-dark);
  background: var(--parchment);
  padding: .6rem 1rem;
  font-family: 'IM Fell English', serif;
  font-style: italic;
  font-size: 1rem;
  color: var(--ink);
  outline: none;
}

.newsletter-btn {
  background: var(--ink);
  color: var(--parchment);
  border: 2px solid var(--gold);
  padding: .6rem 1.5rem;
  font-family: 'IM Fell English SC', serif;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: .95rem;
  transition: all .2s;
}

.newsletter-btn:hover { background: var(--gold); color: var(--ink); }

.newsletter-confirm {
  display: none;
  font-family: 'IM Fell English', serif;
  font-style: italic;
  color: var(--sepia-green);
  font-size: 1.1rem;
  margin-top: .75rem;
}

/* ===== FOOTER ===== */
footer {
  background: var(--ink);
  color: var(--ink-faint);
  text-align: center;
  padding: 1rem 2rem;
  font-size: .85rem;
  font-family: 'Crimson Pro', serif;
  letter-spacing: 1px;
}

footer span { color: var(--gold); }

/* ===== TRAIL CARDS ===== */
.trail-card {
  background: var(--parchment-mid);
  border: 1.5px solid var(--border);
  position: relative;
  transition: transform .2s, box-shadow .2s;
  overflow: hidden;
}

.trail-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px var(--shadow);
}

.card-corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--border-dark);
  border-style: solid;
}
.card-corner.tl { top:4px; left:4px; border-width: 2px 0 0 2px; }
.card-corner.tr { top:4px; right:4px; border-width: 2px 2px 0 0; }
.card-corner.bl { bottom:4px; left:4px; border-width: 0 0 2px 2px; }
.card-corner.br { bottom:4px; right:4px; border-width: 0 2px 2px 0; }

.card-type-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  font-family: 'Crimson Pro', serif;
  font-size: .75rem;
  letter-spacing: 1px;
  padding: .2rem .6rem;
  border: 1px solid currentColor;
}

.badge-walk { color: var(--sepia-green); }
.badge-bike { color: var(--sepia-blue); }
.badge-nature { color: var(--sepia-red); }

.card-icon-area {
  background: var(--parchment-dark);
  border-bottom: 1.5px solid var(--border);
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.card-body { padding: 1rem 1.25rem 1.25rem; }

.card-title {
  font-family: 'IM Fell English', serif;
  font-size: 1.3rem;
  color: var(--ink);
  margin-bottom: .3rem;
}

.card-description {
  font-size: 1rem;
  color: var(--ink-light);
  line-height: 1.55;
  margin-bottom: .75rem;
  font-style: italic;
}

.card-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: .9rem;
  color: var(--ink-faint);
  border-top: 1px dashed var(--border);
  padding-top: .6rem;
  margin-bottom: .6rem;
}

.card-meta span { display: flex; align-items: center; gap: .3rem; }

.diff-badge {
  display: inline-block;
  font-size: .8rem;
  padding: .15rem .6rem;
  border: 1px solid;
  font-family: 'Crimson Pro', serif;
  letter-spacing: .5px;
}

.diff-easy { color: var(--sepia-green); border-color: var(--sepia-green); }
.diff-moderate { color: var(--gold); border-color: var(--gold); }
.diff-hard { color: var(--sepia-red); border-color: var(--sepia-red); }

.card-features {
  display: flex;
  gap: .4rem;
  flex-wrap: wrap;
  margin-top: .5rem;
}

.feat-tag {
  font-size: .78rem;
  background: var(--parchment);
  border: 1px solid var(--border);
  padding: .1rem .5rem;
  color: var(--ink-faint);
  display: flex;
  align-items: center;
  gap: .25rem;
}

/* ===== MAP BUILDER ===== */
.builder-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1.5rem;
  align-items: start;
}

@media (max-width: 700px) { .builder-layout { grid-template-columns: 1fr; } }

.builder-tools {
  background: var(--parchment-mid);
  border: 1.5px solid var(--border);
  padding: 1rem;
}

.tools-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 1.1rem;
  color: var(--ink);
  margin-bottom: .75rem;
  letter-spacing: 1px;
  text-align: center;
  border-bottom: 1px solid var(--border);
  padding-bottom: .5rem;
}

.tool-group { margin-bottom: 1rem; }

.tool-group-label {
  font-size: .8rem;
  color: var(--ink-faint);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'Crimson Pro', serif;
  margin-bottom: .4rem;
}

.tool-btn {
  width: 100%;
  text-align: left;
  background: transparent;
  border: 1.5px solid var(--border);
  color: var(--ink);
  font-family: 'Crimson Pro', serif;
  font-size: .95rem;
  padding: .4rem .75rem;
  margin-bottom: .35rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .5rem;
  transition: all .15s;
}

.tool-btn:hover, .tool-btn.selected {
  background: var(--ink);
  color: var(--parchment);
  border-color: var(--ink);
}

.tool-sep { border-top: 1px dashed var(--border); margin: .75rem 0; }

.color-swatches { display: flex; gap: .4rem; flex-wrap: wrap; }

.swatch {
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 50%;
}

.swatch.active { border-color: var(--ink); }

.builder-canvas-wrap {
  border: 2px solid var(--border-dark);
  background: var(--parchment-dark);
  position: relative;
  overflow: hidden;
  cursor: crosshair;
  min-height: 520px;
}

#mapCanvas { display: block; width: 100%; touch-action: none; }

.canvas-toolbar {
  background: var(--ink);
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  gap: .75rem;
  flex-wrap: wrap;
}

.canvas-tool-btn {
  background: transparent;
  border: 1px solid var(--border-dark);
  color: var(--parchment-dark);
  padding: .3rem .75rem;
  font-family: 'Crimson Pro', serif;
  font-size: .9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .4rem;
  transition: all .15s;
}

.canvas-tool-btn:hover,
.canvas-tool-btn.active { background: var(--gold); color: var(--ink); border-color: var(--gold); }

.canvas-info {
  margin-left: auto;
  font-family: 'Crimson Pro', serif;
  font-size: .85rem;
  color: var(--ink-faint);
}

.props-panel {
  background: var(--parchment-mid);
  border: 1.5px solid var(--border);
  padding: 1rem;
  margin-top: 1rem;
}

.props-title {
  font-family: 'IM Fell English SC', serif;
  font-size: 1rem;
  color: var(--ink);
  margin-bottom: .75rem;
  letter-spacing: 1px;
}

.prop-row {
  display: flex;
  align-items: center;
  gap: .75rem;
  margin-bottom: .6rem;
  font-size: .9rem;
  color: var(--ink-light);
}

.prop-row label { min-width: 90px; font-size: .85rem; color: var(--ink-faint); }

.prop-row input[type=text],
.prop-row input[type=range] {
  flex: 1;
  background: var(--parchment);
  border: 1px solid var(--border);
  padding: .25rem .5rem;
  font-family: 'Crimson Pro', serif;
  font-size: .9rem;
  color: var(--ink);
  outline: none;
}

.prop-row input[type=range] { padding: 0; cursor: pointer; }
.prop-val { min-width: 36px; text-align: right; font-size: .85rem; }

/* ===== RESPONSIVE ===== */
@media (max-width: 600px) {
  nav { flex-direction: column; gap: .75rem; }
  .nav-links { gap: 1rem; }
}
