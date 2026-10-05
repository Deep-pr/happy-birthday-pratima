/**
 * ==============================================================================
 * 💖 ROMANTIC BIRTHDAY SURPRISE WEBSITE
 * ==============================================================================
 * 
 * PERSONALIZATION INSTRUCTIONS:
 * Customize the configuration object below with her name, your name,
 * birthday date, personal messages, and photos!
 * Everything else updates automatically.
 */

const birthdayConfig = {
  // 💖 Personal Names
  girlfriendName: "Pratima",              // Her name
  boyfriendName: "Deep",                  // Your name

  // 🎂 Birthday Date (Format: YYYY-MM-DD)
  // The countdown will automatically calculate time remaining to this date!
  birthday: "2026-10-06",

  // 🎶 Music Settings
  musicFile: "music/music.mp3",           // Path to your local MP3 file
  musicTitle: "Our Song ❤️",              // Name displayed on the music widget

  // 💌 Opening Hero Texts
  heroSubtitle: "To the most beautiful person who came into my life...",
  heroTeaser: "Someone very special has a surprise waiting for you, Pratima...",

  // 📸 Memories Gallery (Images are located in images/)
  memories: [
    {
      src: "images/photo1.jpg",
      caption: "One of my favorite memories with you, Pratima ❤️",
      date: "Our Journey Begins"
    },
    {
      src: "images/photo2.jpg",
      caption: "A moment I wish I could live again ✨",
      date: "Pure Magic"
    },
    {
      src: "images/photo3.jpg",
      caption: "Just you being you — effortlessly breathtaking 🌸",
      date: "Golden Hour"
    },
    {
      src: "images/photo4.jpg",
      caption: "Another beautiful chapter of us 💫",
      date: "Unforgettable"
    },
    {
      src: "images/photo5.jpg",
      caption: "Every smile of yours makes my world brighter 🌟",
      date: "Endless Joy"
    },
    {
      src: "images/photo6.jpg",
      caption: "To countless more adventures together 🥂",
      date: "Forever & Always"
    }
  ],

  // ⏳ Story Timeline Milestones
  timeline: [
    {
      badge: "The Beginning",
      title: "The Day We Met",
      date: "A Date That Changed Everything",
      desc: "The universe aligned, and for the first time, my eyes found yours. Little did I know that my entire world was about to change forever."
    },
    {
      badge: "The Connection",
      title: "First Conversation",
      date: "Hours Felt Like Seconds",
      desc: "Talking to you felt as natural as breathing. We talked for hours, laughing and sharing thoughts, and I remember wishing time would stand still."
    },
    {
      badge: "First Memory",
      title: "Our First Special Memory",
      date: "The Spark That Lit The Flame",
      desc: "That unforgettable afternoon when we couldn't stop laughing. I caught myself looking at you and thought: 'I want this smile around me forever.'"
    },
    {
      badge: "Realization",
      title: "The Moment I Realized You Were Special",
      date: "When Love Quietly Settled In",
      desc: "It wasn't a movie scene — it was a quiet, warm certainty. In your kindness and laughter, I knew you were the only one for me."
    },
    {
      badge: "Cherished",
      title: "Our Favorite Memory",
      date: "Carved In My Heart",
      desc: "Holding hands, walking under the starry night sky, talking about the future. For a few perfect hours, the rest of the world completely faded away."
    },
    {
      badge: "Celebration",
      title: "Today ❤️",
      date: "Celebrating You",
      desc: "Celebrating the birthday of the most extraordinary soul on Earth. Here's to you, to us, and to every beautiful chapter yet to come."
    }
  ],

  // 💌 Handwritten Love Letter
  letterText: `My dearest Pratima,

From the moment you entered my life, everything became so much brighter, calmer, and full of warmth. You have this rare, beautiful grace about you that turns ordinary days into something truly magical.

Your smile is my favorite sight in the whole world, your laughter is pure melody to my soul, and being next to you is the only place where I truly feel at peace. Thank you for being my greatest support, my sweetest happiness, and the most precious blessing in my life. Loving you is the easiest and most wonderful thing I have ever done.

On your birthday, my only wish is that your eyes always shine with happiness, that your beautiful smile never fades, and that every dream you hold close to your heart comes true. I promise to cherish, respect, and love you more with every single passing day.

Happy Birthday, my beautiful Pratima. Forever and always.`,

  // 💖 10 Things I Love About You
  reasons: [
    { number: "01", icon: "fa-smile", title: "Your smile", text: "The way your face lights up and instantly melts away all of my worries." },
    { number: "02", icon: "fa-microphone-lines", title: "Your voice", text: "The soothing sound that feels like a warm hug at the end of a long day." },
    { number: "03", icon: "fa-hand-holding-heart", title: "Your kindness", text: "How gently you treat every living being and the genuine compassion in your heart." },
    { number: "04", icon: "fa-sparkles", title: "Your little habits", text: "All the cute, quirky expressions and gestures that are uniquely yours." },
    { number: "05", icon: "fa-heart-pulse", title: "The way you care", text: "Remembering every small detail and loving so deeply with everything you have." },
    { number: "06", icon: "fa-face-grin-stars", title: "Your laugh", text: "That pure, contagious burst of happiness that makes my heart skip every single time." },
    { number: "07", icon: "fa-sun", title: "Your presence", text: "Just being in the same room with you gives me a calm and peace nowhere else offers." },
    { number: "08", icon: "fa-wand-magic", title: "The way you make ordinary days special", text: "A simple walk or a quiet dinner feels like an unforgettable celebration when I'm with you." },
    { number: "09", icon: "fa-gem", title: "Your beautiful heart", text: "Pure, resilient, graceful, and overflowing with endless love and warmth." },
    { number: "10", icon: "fa-infinity", title: "Simply... you ❤️", text: "Every flaw, every perfection, every part of who you are. I wouldn't change a single thing." }
  ]
};

// ==============================================================================
// DOM INITIALIZATION & PERSONALIZATION SYNC
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  applyPersonalization();
  initCountdown();
  initAmbientCanvas();
  initAudioPlayer();
  initScrollAnimations();
  initBackToTop();
  initGalleryLightbox();
  initDoubleTapPhotos();
  initReasonsInteractions();
  initSurpriseSection();
  initClickHeartEffects();
});

/**
 * Sync all config values across the HTML
 */
function applyPersonalization() {
  // Update Girlfriend's Name in all designated displays
  document.querySelectorAll(".girlfriend-name-display").forEach(el => {
    el.textContent = birthdayConfig.girlfriendName;
  });

  // Update Page Title
  document.title = `Happy Birthday, ${birthdayConfig.girlfriendName} ❤️`;

  // Update Boyfriend's Name
  const letterAuthor = document.getElementById("letter-author-name");
  if (letterAuthor) letterAuthor.textContent = birthdayConfig.boyfriendName;

  const finalBoyfriend = document.getElementById("final-boyfriend-name");
  if (finalBoyfriend) finalBoyfriend.textContent = birthdayConfig.boyfriendName;

  // Update Subtitle & Teaser
  const heroSub = document.getElementById("hero-subtitle");
  if (heroSub && birthdayConfig.heroSubtitle) heroSub.textContent = birthdayConfig.heroSubtitle;

  const heroTeaser = document.getElementById("hero-teaser");
  if (heroTeaser && birthdayConfig.heroTeaser) {
    heroTeaser.innerHTML = `<i class="fa-solid fa-gift pulse-icon"></i> <span>${birthdayConfig.heroTeaser}</span>`;
  }

  // Update Letter Text
  const letterBody = document.getElementById("letter-content-text");
  if (letterBody && birthdayConfig.letterText) {
    letterBody.innerHTML = birthdayConfig.letterText.replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
  }

  // Update Music Title Label
  const musicLabel = document.querySelector(".music-label");
  if (musicLabel && birthdayConfig.musicTitle) {
    musicLabel.textContent = birthdayConfig.musicTitle;
  }
}

// ==============================================================================
// 1. BIRTHDAY COUNTDOWN TIMER
// ==============================================================================
function initCountdown() {
  const cdDays = document.getElementById("cd-days");
  const cdHours = document.getElementById("cd-hours");
  const cdMinutes = document.getElementById("cd-minutes");
  const cdSeconds = document.getElementById("cd-seconds");
  const countdownGrid = document.getElementById("countdown-grid");
  const banner = document.getElementById("birthday-celebration-banner");

  if (!cdDays || !countdownGrid || !banner) return;

  function updateTimer() {
    const now = new Date();
    // Parse target birthday (YYYY-MM-DD at 00:00:00)
    const target = new Date(birthdayConfig.birthday + "T00:00:00");
    
    // Check if birthday has passed or is today
    const diff = target - now;

    // Check if today is the exact birthday day (same date & month)
    const isToday = (
      now.getFullYear() === target.getFullYear() &&
      now.getMonth() === target.getMonth() &&
      now.getDate() === target.getDate()
    );

    if (diff <= 0 || isToday) {
      // Birthday has arrived!
      if (countdownGrid.style.display !== "none") {
        countdownGrid.style.display = "none";
        banner.style.display = "block";
        if (typeof triggerConfettiExplosion === "function") {
          triggerConfettiExplosion();
        }
      }
    } else {
      countdownGrid.style.display = "flex";
      banner.style.display = "none";

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      cdDays.textContent = String(days).padStart(2, "0");
      cdHours.textContent = String(hours).padStart(2, "0");
      cdMinutes.textContent = String(minutes).padStart(2, "0");
      cdSeconds.textContent = String(seconds).padStart(2, "0");
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// ==============================================================================
// 2. AUDIO PLAYER WITH SYNTHESIZED ROMANTIC FALLBACK
// ==============================================================================
// 2. BULLETPROOF AUDIO PLAYER WITH PERSISTENT PLAYBACK & PROGRESS
// ==============================================================================
function initAudioPlayer() {
  const player = document.getElementById("music-player");
  const toggleBtn = document.getElementById("music-toggle");
  const muteBtn = document.getElementById("music-mute");
  const audio = document.getElementById("bg-audio");
  const statusLabel = document.getElementById("music-status");
  const muteIcon = document.getElementById("mute-icon");
  const progressBar = document.getElementById("music-progress-bar");

  if (!player || !toggleBtn || !audio) return;

  // Configure audio properties
  audio.loop = true;
  audio.preload = "auto";

  let isPlaying = false;
  let isMuted = false;
  let isToggling = false;

  // Sync UI state automatically with native audio events
  audio.addEventListener("playing", () => {
    isPlaying = true;
    player.classList.add("playing");
    if (statusLabel) statusLabel.textContent = "Playing for you ❤️";
  });

  audio.addEventListener("play", () => {
    isPlaying = true;
    player.classList.add("playing");
  });

  audio.addEventListener("pause", () => {
    isPlaying = false;
    player.classList.remove("playing");
    if (statusLabel) statusLabel.textContent = "Paused 🎵";
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration && progressBar) {
      const pct = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = pct + "%";
    }
  });

  // Safeguard: Ensure audio loops seamlessly even on older mobile browsers
  audio.addEventListener("ended", () => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  });

  // --- AUTOMATIC PLAYBACK ENGINE ---
  // 1. Try immediate autoplay upon page load
  function attemptAutoplay() {
    if (!audio.paused) return;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isPlaying = true;
        player.classList.add("playing");
        if (statusLabel) statusLabel.textContent = "Playing for you ❤️";
        removeAutoplayTriggers();
      }).catch(() => {
        // Browser requires a user gesture before playing audio with sound
        if (statusLabel) statusLabel.textContent = "Tap anywhere to play 🎵";
      });
    }
  }

  // 2. Play on FIRST touch, click, scroll or gesture anywhere on screen
  function onFirstUserGesture() {
    if (audio.paused) {
      audio.play().then(() => {
        isPlaying = true;
        player.classList.add("playing");
        if (statusLabel) statusLabel.textContent = "Playing for you ❤️";
      }).catch(() => {});
    }
    removeAutoplayTriggers();
  }

  const gestureEvents = ["touchstart", "touchend", "click", "scroll", "keydown"];
  function attachAutoplayTriggers() {
    gestureEvents.forEach(evt => {
      window.addEventListener(evt, onFirstUserGesture, { once: true, passive: true });
      document.addEventListener(evt, onFirstUserGesture, { once: true, passive: true });
    });
  }

  function removeAutoplayTriggers() {
    gestureEvents.forEach(evt => {
      window.removeEventListener(evt, onFirstUserGesture);
      document.removeEventListener(evt, onFirstUserGesture);
    });
  }

  // Start autoplay triggers immediately
  attemptAutoplay();
  attachAutoplayTriggers();

  // Also hook the "Start Our Story ❤️" button
  const startStoryBtn = document.getElementById("start-story-btn");
  if (startStoryBtn) {
    startStoryBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
    });
  }

  // Handle Play/Pause with async debounce
  toggleBtn.addEventListener("click", async (e) => {
    e.stopPropagation();
    if (isToggling) return;
    isToggling = true;

    try {
      if (audio.paused) {
        if (statusLabel) statusLabel.textContent = "Loading song... 🎶";
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (err) {
      console.warn("Audio play issue handled:", err);
      // Only fallback to synth chime if there is a real file loading error
      if (audio.error || audio.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
        startRomanticSynth();
        player.classList.add("playing");
        if (statusLabel) statusLabel.textContent = "Playing gentle melody ✨";
      } else {
        if (statusLabel) statusLabel.textContent = "Tap to play music 🎵";
      }
    } finally {
      setTimeout(() => { isToggling = false; }, 250);
    }
  });

  // Handle Mute/Unmute
  if (muteBtn) {
    muteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isMuted = !isMuted;
      audio.muted = isMuted;

      if (isMuted) {
        muteIcon.className = "fa-solid fa-volume-xmark";
      } else {
        muteIcon.className = "fa-solid fa-volume-high";
      }
    });
  }

  // Gentle romantic arpeggiator fallback using Web Audio API (only if MP3 fails)
  let synthActive = false;
  let audioCtx = null;
  let synthTimer = null;

  function startRomanticSynth() {
    if (synthActive) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      synthActive = true;
      const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23, 392.00, 329.63];
      let noteIdx = 0;

      function playChime() {
        if (!synthActive || isMuted) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.value = notes[noteIdx % notes.length];
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 2.3);

        noteIdx++;
      }

      synthTimer = setInterval(playChime, 650);
      playChime();
    } catch (e) {
      console.warn("Web Audio fallback not supported:", e);
    }
  }

  function stopRomanticSynth() {
    synthActive = false;
    if (synthTimer) clearInterval(synthTimer);
    if (audioCtx && audioCtx.state !== "closed") {
      audioCtx.close().catch(() => {});
    }
  }
}

// ==============================================================================
// 3. AMBIENT FLOATING HEARTS & PARTICLES BACKGROUND CANVAS
// ==============================================================================
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const particles = [];
  const particleCount = window.innerWidth < 768 ? 28 : 55;

  class RomanticParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.random() * 12 + 6;
      this.speedY = Math.random() * 0.7 + 0.35;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.45 + 0.2;
      this.isHeart = Math.random() > 0.45;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
      this.hue = Math.floor(Math.random() * 25) + 335; // Romantic pink-rose hues
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y < -30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;

      if (this.isHeart) {
        ctx.fillStyle = `hsl(${this.hue}, 90%, 65%)`;
        const s = this.size / 2.5;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.8, -s * 2, s * 0.2, 0, s * 2);
        ctx.bezierCurveTo(s * 2, s * 0.2, s, -s * 0.8, 0, s * 0.3);
        ctx.fill();
      } else {
        // Soft glowing stardust
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size / 2);
        grad.addColorStop(0, `hsla(${this.hue}, 100%, 80%, 1)`);
        grad.addColorStop(1, `hsla(${this.hue}, 100%, 70%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new RomanticParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ==============================================================================
// 4. INTERACTIVE CLICK-HEART BURST ANYWHERE ON SCREEN
// ==============================================================================
function initClickHeartEffects() {
  window.addEventListener("click", (e) => {
    // Avoid triggering if clicking on links or buttons
    if (e.target.closest("button") || e.target.closest("a") || e.target.closest("input")) return;

    for (let i = 0; i < 4; i++) {
      createFloatingMiniHeart(e.clientX, e.clientY);
    }
  });

  function createFloatingMiniHeart(x, y) {
    const heart = document.createElement("div");
    heart.textContent = ["❤️", "💖", "✨", "🌸"][Math.floor(Math.random() * 4)];
    heart.style.position = "fixed";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9998";
    heart.style.fontSize = `${Math.random() * 12 + 14}px`;
    heart.style.transform = `translate(-50%, -50%) translate(${(Math.random() - 0.5) * 30}px, 0)`;
    heart.style.opacity = "1";
    heart.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translate(-50%, -50%) translate(${(Math.random() - 0.5) * 60}px, -${Math.random() * 80 + 40}px) scale(1.4)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

// ==============================================================================
// 5. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
// ==============================================================================
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal-fade, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  elements.forEach(el => observer.observe(el));
}

// ==============================================================================
// 6. PHOTO GALLERY & LIGHTBOX
// ==============================================================================
function initGalleryLightbox() {
  const cards = document.querySelectorAll(".gallery-card");
  const modal = document.getElementById("lightbox-modal");
  const backdrop = document.getElementById("lightbox-backdrop");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const imgEl = document.getElementById("lightbox-image");
  const captionEl = document.getElementById("lightbox-caption");
  const counterEl = document.getElementById("lightbox-counter");

  if (!modal || !cards.length) return;

  let currentIndex = 0;
  const items = birthdayConfig.memories;

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function updateLightboxContent() {
    const item = items[currentIndex];
    if (!item) return;

    imgEl.src = item.src;
    imgEl.alt = item.caption;
    captionEl.textContent = item.caption;
    counterEl.textContent = `${currentIndex + 1} / ${items.length}`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateLightboxContent();
  }

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-index"), 10) || 0;
      openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });
  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  // Mobile Touch Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 45;
    if (touchEndX < touchStartX - swipeThreshold) {
      showNext(); // Swipe left -> next image
    } else if (touchEndX > touchStartX + swipeThreshold) {
      showPrev(); // Swipe right -> prev image
    }
  }
}

// ==============================================================================
// 7. "10 THINGS I LOVE ABOUT YOU" INTERACTIVE EFFECTS
// ==============================================================================
function initReasonsInteractions() {
  const cards = document.querySelectorAll(".reason-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("card-active");

      // Spawn temporary mini heart floating from card
      const rect = card.getBoundingClientRect();
      const heart = document.createElement("span");
      heart.textContent = "💖";
      heart.style.position = "fixed";
      heart.style.left = `${rect.left + rect.width / 2}px`;
      heart.style.top = `${rect.top + 20}px`;
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "999";
      heart.style.fontSize = "1.6rem";
      heart.style.transition = "all 0.8s ease-out";
      document.body.appendChild(heart);

      requestAnimationFrame(() => {
        heart.style.transform = "translateY(-40px) scale(1.3)";
        heart.style.opacity = "0";
      });

      setTimeout(() => heart.remove(), 800);
    });
  });
}

// ==============================================================================
// 8. SPECIAL SURPRISE CLIMAX & CELEBRATION FIREWORKS
// ==============================================================================
function initSurpriseSection() {
  const openBtn = document.getElementById("open-surprise-btn");
  const triggerArea = document.getElementById("surprise-trigger-area");
  const revealCard = document.getElementById("surprise-reveal-card");
  const replayBtn = document.getElementById("replay-magic-btn");

  if (!openBtn || !revealCard) return;

  function launchClimaxCelebration() {
    if (triggerArea) triggerArea.style.display = "none";
    revealCard.style.display = "block";
    triggerConfettiExplosion();
  }

  openBtn.addEventListener("click", launchClimaxCelebration);

  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      triggerConfettiExplosion();
    });
  }
}

/**
 * Custom Confetti & Floating Heart Explosion on Canvas
 */
function triggerConfettiExplosion() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = [];
  const pieceCount = 140;
  const colors = ["#ff3366", "#ff758f", "#ffb3c1", "#ffd166", "#ffffff", "#e056fd"];

  for (let i = 0; i < pieceCount; i++) {
    confettiPieces.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      size: Math.random() * 10 + 6,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 18,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      isHeart: Math.random() > 0.5,
      gravity: 0.35,
      opacity: 1
    });
  }

  let animationFrame;
  let startTime = Date.now();

  function renderConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.006;

      if (p.opacity > 0) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);

        if (p.isHeart) {
          ctx.fillStyle = p.color;
          const s = p.size / 2.5;
          ctx.beginPath();
          ctx.moveTo(0, s * 0.3);
          ctx.bezierCurveTo(-s, -s * 0.8, -s * 2, s * 0.2, 0, s * 2);
          ctx.bezierCurveTo(s * 2, s * 0.2, s, -s * 0.8, 0, s * 0.3);
          ctx.fill();
        } else {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
        }
        ctx.restore();
      }
    });

    if (Date.now() - startTime < 4500) {
      animationFrame = requestAnimationFrame(renderConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  renderConfetti();
}

// ==============================================================================
// 9. BACK TO TOP BUTTON
// ==============================================================================
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==============================================================================
// 10. DOUBLE-TAP PHOTO REACTION (INSTAGRAM-STYLE HEART EXPLOSION)
// ==============================================================================
function initDoubleTapPhotos() {
  const cards = document.querySelectorAll(".gallery-card");

  cards.forEach(card => {
    let lastTap = 0;

    card.addEventListener("touchend", (e) => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      if (tapLength < 350 && tapLength > 0) {
        // Double tap detected!
        e.preventDefault();
        e.stopPropagation();
        triggerPhotoHeart(card);
      }
      lastTap = currentTime;
    });

    // Also support desktop double click
    card.addEventListener("dblclick", (e) => {
      e.preventDefault();
      triggerPhotoHeart(card);
    });
  });

  function triggerPhotoHeart(card) {
    if (navigator.vibrate) {
      try { navigator.vibrate(40); } catch (_) {}
    }

    const heart = document.createElement("div");
    heart.className = "double-tap-heart-pop";
    heart.innerHTML = "💖";
    card.appendChild(heart);

    // Also spawn floating sparkles
    for (let i = 0; i < 4; i++) {
      const spark = document.createElement("span");
      spark.className = "mini-tap-sparkle";
      spark.textContent = ["✨", "❤️", "🌸", "💫"][i];
      spark.style.left = `calc(50% + ${(Math.random() - 0.5) * 80}px)`;
      spark.style.top = `calc(50% + ${(Math.random() - 0.5) * 80}px)`;
      card.appendChild(spark);
      setTimeout(() => spark.remove(), 900);
    }

    setTimeout(() => heart.remove(), 1000);
  }
}

