# 💖 Romantic Birthday Surprise Website for Your Girlfriend

A handcrafted, elegant, and interactive single-page birthday website designed to feel like a deeply personal digital surprise made with love.

---

## 📁 Project Structure

```text
birthday-website/
│
├── index.html         # Main website structure & romantic markup
├── style.css          # Romantic luxury styling, glassmorphism & animations
├── script.js          # Interactive features, countdown, audio player & config
├── README.md          # Setup & personalization guide
│
├── images/            # Put all your photos here
│   ├── her-photo.jpg  # Her picture shown in the Hero section (square/portrait)
│   ├── photo1.jpg     # Memory photo 1
│   ├── photo2.jpg     # Memory photo 2
│   ├── photo3.jpg     # Memory photo 3
│   ├── photo4.jpg     # Memory photo 4
│   ├── photo5.jpg     # Memory photo 5
│   └── photo6.jpg     # Memory photo 6
│
└── music/             # Put your romantic song here
    ├── README.txt
    └── music.mp3      # Her favorite song or romantic instrumental
```

---

## 🎨 How to Personalize (In 2 Minutes)

Open `script.js` in any text editor. At the very top, you will see the `birthdayConfig` object:

```javascript
const birthdayConfig = {
  // 💖 Personal Names
  girlfriendName: "Pratima",       // Her name ❤️
  boyfriendName: "Deep",           // Your name ❤️

  // 🎂 Birthday Date (Format: YYYY-MM-DD)
  birthday: "2026-10-06",          // Set her birthday date

  // 🎶 Music Settings
  musicFile: "music/music.mp3",
  musicTitle: "Our Song ❤️",

  // 💌 Opening Hero Texts
  heroSubtitle: "To the most beautiful person who came into my life...",
  heroTeaser: "Someone very special has a surprise waiting for you...",

  // ... (memories, timeline, letter & reasons can also be customized here!)
};
```

Everything across the website — including the page title, hero title, countdown, love letter, and final sign-off — will update automatically!

---

## 📸 Where to Put Your Photos

1. **Her Hero Photo**:
   - Save her best photo as `her-photo.jpg` and place it in the `images/` folder.
   - Recommended: Square or portrait ratio (e.g. 800×800 or 800×1000).

2. **Memories Gallery (6 Photos)**:
   - Save your photos as `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`, `photo6.jpg` inside the `images/` folder.
   - You can customize the captions and dates in `script.js` under the `memories` array.

---

## 🎶 Where to Put Background Music

1. Choose her favorite romantic song or an acoustic instrumental track.
2. Rename the file to `music.mp3`.
3. Place it in the `music/` folder (`birthday-website/music/music.mp3`).
4. *Note: Browsers do not allow music to autoplay with sound without user interaction. A sleek floating music player is available at the bottom corner with play/pause and mute controls.*

---

## 🚀 How to Deploy for FREE on GitHub Pages

You can host this website online for free forever using GitHub Pages:

### Step 1: Create a GitHub Account & Repository
1. Go to [GitHub](https://github.com/) and sign in (or create a free account).
2. Click the **+** icon in the top right and select **New repository**.
3. Name your repository (for example: `for-my-love` or `happy-birthday-sophia`).
4. Keep it **Public** (required for free GitHub Pages).
5. Do not add a README (leave it empty) and click **Create repository**.

### Step 2: Upload Your Website Files
You can upload using either Git or directly through your web browser:

#### Option A: Direct Web Upload (Easiest & Fastest)
1. In your newly created GitHub repository page, click **uploading an existing file**.
2. Drag and drop all the files from inside `birthday-website/`:
   - `index.html`
   - `style.css`
   - `script.js`
   - `images/` folder (with your photos)
   - `music/` folder (with `music.mp3`)
3. Scroll down and click **Commit changes**.

#### Option B: Using Terminal / Git
Run these commands inside the `birthday-website` directory:
```bash
git init
git add .
git commit -m "Happy Birthday surprise ❤️"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. In your repository on GitHub, click **Settings** (top tab).
2. On the left sidebar, click **Pages** (under "Code and automation").
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: Select **main** and folder **/(root)**.
   - Click **Save**.
4. Wait 1 to 2 minutes and refresh the page.
5. GitHub will provide your live website link:
   `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 📱 Sending the Surprise

Copy your live link and send it to her on WhatsApp or iMessage:
> *"Happy Birthday to the most special person in my life! ❤️ Open this on your phone: [YOUR_LINK]"*
