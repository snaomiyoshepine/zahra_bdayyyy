const cards = document.querySelectorAll('.card');
const gameArea = document.getElementById('game-area');
const letterArea = document.getElementById('letter-area');
const modal = document.getElementById('letter-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const bgMusic = document.getElementById('bg-music');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;
const totalPairs = 8; // Sekarang 8 pasang / 16 kartu

// Play Musik saat kartu pertama diklik
document.body.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(error => console.log("Audio play diizinkan setelah interaksi"));
  }
}, { once: true }); // event hanya berjalan 1 kali

const letterContent = {
  'Naomi': "Happy 24th Birthday! 🎉 Semoga di umur yang baru ini kamu makin bahagia...",
  'Teman 1': "Selamat ulang tahun! Cie udah 24 tahun aja...",
  'Teman 2': "Happy Level Up! Semoga tahun ini bawa banyak kebahagiaan..."
};

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

  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  matchedPairs++;
  resetBoard();

  if (matchedPairs === totalPairs) {
    setTimeout(() => {
      gameArea.classList.add('hidden');
      letterArea.classList.remove('hidden');
      triggerConfetti();
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

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16); // Diacak dari 16 posisi
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

function openLetter(senderName) {
  modalTitle.innerText = "Surat dari " + senderName;
  modalBody.innerText = letterContent[senderName];
  modal.classList.remove('hidden');
}

function closeLetter() {
  modal.classList.add('hidden');
}

function triggerConfetti() {
  var duration = 3000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff758c', '#ff7eb3', '#ffffff'] });
    confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff758c', '#ff7eb3', '#ffffff'] });
    if (Date.now() < end) requestAnimationFrame(frame);
  }());
}

function toggleMusic() {
  const music = document.getElementById('bg-music');
  const icon = document.getElementById('music-icon');
  const btn = document.querySelector('.music-toggle');
  
  if (music.paused) {
    music.play();
    icon.innerText = "🔊";
    btn.innerHTML = `<span id="music-icon">🔊</span>`;
  } else {
    music.pause();
    icon.innerText = "🎵";
    btn.innerHTML = `<span id="music-icon">🎵</span>`;
  }
}