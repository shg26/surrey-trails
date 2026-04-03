# 🗺️ Surrey Trails

> *"Where ancient woodland whispers, chalk hills roll endlessly, and every lane leads to a tale untold."*

A fantasy-parchment travel website showcasing walks, cycling routes, and hidden nature spots across the Surrey Hills. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no fuss.

**Live site:** `https://YOUR_USERNAME.github.io/surrey-trails`

---

## ✨ Features

- **Olde English parchment aesthetic** — sepia tones, IM Fell English typeface, decorative borders and ornamental rules
- **12 curated Surrey routes** — walks, bike rides and nature trails with distance, duration and difficulty
- **Filterable trail cards** — filter by type (walk / bike / nature) and difficulty (easy / moderate / hard)
- **Featured Route spotlight** — seasonal highlight with illustrated SVG mini-map and waypoints
- **Drag-and-drop Map Builder** — draw routes, place landmarks, add compass rose and distance scale bar, export as PNG
- **Newsletter signup** — simple inline subscription form
- **Fully responsive** — works on mobile, tablet and desktop
- **Zero dependencies** — pure HTML/CSS/JS, loads fast everywhere

---

## 📁 File Structure

```
surrey-trails/
├── index.html          # Home page — hero, featured route, newsletter
├── trails.html         # Filterable trail cards grid
├── map-builder.html    # Drag-and-drop cartography tool
├── css/
│   └── styles.css      # All shared styles and design tokens
├── js/
│   ├── data.js         # Trail data, feature icons, newsletter logic
│   └── map-builder.js  # Canvas drawing engine for the map builder
└── README.md
```

---

## 🚀 Deploying to GitHub Pages

### Option A — Browser upload (quickest)

1. Go to [github.com](https://github.com) and create a new **public** repository called `surrey-trails`
2. Click **Add file → Upload files**
3. Drag the entire folder contents into the upload area (keeping the `css/` and `js/` subfolders)
4. Commit directly to `main`
5. Go to **Settings → Pages → Source → Deploy from branch → main / root → Save**
6. Your site will be live at `https://YOUR_USERNAME.github.io/surrey-trails` within ~60 seconds

### Option B — Git CLI

```bash
cd surrey-trails
git init
git add .
git commit -m "Initial Surrey Trails site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/surrey-trails.git
git push -u origin main
```

Then enable Pages in **Settings → Pages** as above.

---

## ✏️ Customising the Content

### Adding or editing trails

Open `js/data.js` and add entries to the `trails` array:

```js
{
  id: 13,
  title: "Hog's Back Ridge Walk",
  type: 'walk',            // 'walk' | 'bike' | 'nature'
  diff: 'easy',            // 'easy' | 'moderate' | 'hard'
  dist: '5.5 mi',
  dur: '2 hrs',
  icon: '⛰️',
  desc: 'A breezy chalk ridge walk with panoramic views...',
  features: ['hill', 'viewpoint', 'village'],
  badge: 'walk'
}
```

Available feature tags: `forest` `pond` `hill` `village` `church` `path` `viewpoint`

### Changing the Featured Route

Edit the Featured Route section in `index.html` — update the stats, waypoints, and the inline SVG map illustration.

### Changing colours or fonts

All design tokens live at the top of `css/styles.css` inside `:root {}`:

```css
:root {
  --parchment: #f4e8c1;
  --ink: #2c1a08;
  --gold: #c9920a;
  /* ...etc */
}
```

---

## 🗺️ Map Builder

The Map Builder (`map-builder.html`) lets you create and export custom route maps:

| Tool | Description |
|------|-------------|
| **Path / Route** | Click to add points, double-click to finish a segment |
| **Start / Waypoint / End** | Place coloured markers along your route |
| **Forest / Pond / Hill / Village / Church / Pub** | Place landmark icons |
| **Compass Rose** | Click anywhere on the canvas to position it |
| **Distance Scale** | Set the km value via the slider; click to place |
| **Text Label** | Click to type and place a custom label |
| **Export PNG** | Saves your map as a downloadable image |

---

## 🌐 Custom Domain (optional)

To use your own domain (e.g. `www.surreytrails.co.uk`):

1. Create a file called `CNAME` in the root of the repo containing just your domain name
2. Add a `CNAME` DNS record with your registrar pointing to `YOUR_USERNAME.github.io`
3. In **Settings → Pages**, set your custom domain and tick **Enforce HTTPS**

---

## 📜 Licence

Free to use and adapt for personal and non-commercial projects. Please credit Surrey Trails if you build on this for your own region.

---

*Wander freely. Tread gently. Leave no trace.* 🌿
