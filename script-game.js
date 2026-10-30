// ==========================================
// 1. FUNGSI MUSIK (WAJIB DI LUAR AGAR BISA DIPANGGIL ONCLICK)
// ==========================================
function toggleMusic() {
  const bgMusic = document.getElementById('bg-music');
  const btn = document.querySelector('.music-toggle');
  
  if (!bgMusic) return;

  if (bgMusic.paused) {
    bgMusic.play();
    localStorage.setItem('musicPlaying', 'true');
    if (btn) btn.innerHTML = `<span id="music-icon">🔊</span>`;
  } else {
    bgMusic.pause();
    localStorage.setItem('musicPlaying', 'false');
    if (btn) btn.innerHTML = `<span id="music-icon">🎵</span>`;
  }
}

// ==========================================
// 2. LOGIKA GAME & AUTO-PLAY MUSIK SAAT LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bg-music');
  
  // Melanjutkan musik dari halaman sebelumnya jika statusnya 'true'
  if (bgMusic) {
    const isPlaying = localStorage.getItem('musicPlaying');
    const savedTime = localStorage.getItem('musicTime');

    if (savedTime) bgMusic.currentTime = parseFloat(savedTime);

    if (isPlaying === 'true') {
      bgMusic.play().then(() => {
        const btn = document.querySelector('.music-toggle');
        if (btn) btn.innerHTML = `<span id="music-icon">🔊</span>`;
      }).catch(() => {});
    }

    bgMusic.addEventListener('timeupdate', () => {
      localStorage.setItem('musicTime', bgMusic.currentTime);
    });
  }

  // ==========================================
  // 3. LOGIKA GAME MEMORY MATCH
  // ==========================================
  const cards = document.querySelectorAll('.card');
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  let matchedPairs = 0;
  const totalPairs = 8; 

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.momen === secondCard.dataset.momen;
    if (isMatch) disableCards();
    else unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    matchedPairs++;
    resetBoard();

    if (matchedPairs === totalPairs) {
      setTimeout(() => {
        triggerConfetti();
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) nextBtn.classList.remove('hidden');
      }, 1000); 
    }
  }

  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1200); 
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
    });
  }

  function triggerConfetti() {
    var duration = 3000;
    var end = Date.now() + duration;
    (function frame() {
      if (typeof confetti === 'function') {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#f48fb1', '#ffffff'] });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#f48fb1', '#ffffff'] });
      }
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  }

  // Inisialisasi
  shuffle();
  cards.forEach(card => card.addEventListener('click', flipCard));
});