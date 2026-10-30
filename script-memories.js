// ==========================================
// 1. LOGIKA SURAT & MODAL POP-UP
// ==========================================
const letterContent = {
  'Eca': `<p>happy birthday, my best best! 🤍🎂</p><br><p>Gila ya, nggak kerasa udah 7 tahun kita temenan. Ini tujuh tahun bukan 7 hari bjir. Dari yang awalnya cuma kenal biasa, sampai sekarang jadi orang yang punya banyak cerita, banyak kenangan,  banyak hal random yang cuma kita kita doang yang ngerti.</p><br><p>Thank you for being someone I can be my real self around, tanpa harus pretending to be someone else. You know the good, the bad, the ugly side of me, and somehow, you're still here. Anjay ga tuh</p><br><p>Di umur kamu yang sekarang, I wish you nothing but the best things in life. Semoga semua hal yang kamu perjuangin satu per satu bisa tercapai. Semoga kamu selalu dikelilingi orang-orang yang tulus, punya banyak alasan buat bahagia, dan nggak pernah ngerasa sendirian, even on your hardest days. Jangan terlalu keras sama diri sendiri, ya. Apalagi u mau nikah takut keburu gila.</p><br><p>And no matter how much life changes, how busy we get, or how far apart we might be someday, I hope we never become strangers.</p><br><p>Cheers to you, and cheers to our friendship. Always and forever.🥂</p>`,
  
  'Giska': `<p>happy birthday arimbi!!!!</p><p>si pembuka tahun baru kita, finally ketemu juga dengan angka 24 cihuyyyy🎊🎊</p><br><p>doa ku untukmu tahun ini kinda special yaa. semoga segala sesuatu yang akan kamu lewati menuju pernikahan nanti dilancarkan. acara-acara sblm hari H nanti juga sesuai dengan yg kamu rencanakan. dan di hari H nya pun semoga kamu jadi wanita yang paling bahagia. DAN LAGI semoga rumah tangga mu happily ever after till jannah anjayy. aneh dikit ga sii tbtb ada agenda nikah di surat birthday ini!?!? apapun itu, semoga kita tetap terus bareng kaya gini yaa meskipun akan ada hal-hal baru di kehidupan kamu nanti.</p><br><p>aku happy kamu dipertemukan sama seseorang yang sebaik rifal. aku juga bangga kamu bisa survive atas semua luka yang kamu rasain sejak dulu. aku tau semua ini pasti ga mudah buat kamu tp tekad kamu buat jadi wanita kuat itu besar banget dan sekali lagi, aku bangga akan itu. makasii ya kamu udah bertahan sejauh ini🤍 (well, aku tetep cemburu km direbut dri aku😤)</p><br><p>oh iya, selalu inget ya kalo kita ada di sini. jadi kalo kamu ketemu rintangan yang ragu buat kamu tangani, please come back to us 'cause we will always be here dan bantu kamu buat bangkit lagi. once again happy birthday and enjoy your special day!!</p><br><p>I LOVE YOU💞</p>`,
  
  'Omi': `<p>HWAPPY BDAYYY JAHRA NABILA PERMATA ARIMBI!!!🫂🥳</p><br><p>Broo happy 24 bdayyy yaa. Perasaan baru kapan hari deh ngerayain kita tuh masih belasan taun.. waktunya ga kerasa (eh tapi kerasa deng), tiba-tiba udah selama ini donggg kita bareng-bareng⁉️ Udah banyak momen kita laluin bareng-bareng, apalagi adegan dewasa (kamu tunangan) omaygattt 😱 selebum curhat, aku mau mengucapkan selamat ulang tahunnn, semoga di usia kamu saat ini kamu dilimpahin rezeki yang banyakkkk, dikasih badan yang sehat dan kuat, semoga banyak hal-hal baik berdatangann, semoga bisa melewati challenges untuk kamu level upp, semoga dikelilingi orang-orang baikk, berada di lingkungan yang baik dan mendukung kamuu, dan OMAYGATTTT AKU GA EKSPEK AKAN BILANG INI, semoga pernikahannya nanti dilancarkan, dipermudah urusan-urusannya, baik sebelum, saat pelaksanaan, maupun setelah dan seterusnya dan selama-lamanya. Semoga semuanya berjalan dengan lancarr, AAMIINNN🥹 (ya Allah sejujurnya aku deg-degannn)</p><br><p>Jahh, entahlah ini fun fact atau ga bagi kamu, tapi ini fact. Ngeliat kamu sebagai anak pertama mana perempuan pula, kek hehh gokilll looo bisa melewati banyak hal yang jir aku ga sanggup bayangin aku ada di posisi kamu (btw aku bungsu), kadang suka pengen nepuk pundak kamu sambil bilang kamu keren, di mata aku tuh kamu penyayang banget, kek tingkat pedulinya teh tinggi pisann da herann😭 aku suka mikir gini, beruntung ya adik kamu punya kakak kayak kamuu sumpahh, apalagi ur tunangan aka calon suami. Dia lucky banget punya kamuuu🤧 tapi lebih lucky lagi aku yang punya temen punya bestie punya keluarga kayak kamuu🥹 sisi dewasa kamu yang entah kamu sadar apa ga ketika kamu ngelakuin hal-hal itu atau ngucapin kalimat-kalimat itu sering bikin aku kek wow i can't even imagine what you've been through (dari hal-hal yang tidak pernah terceritakan) to come up like that. Kamu cool abiezzz broo😎</p><br><p>Makasihh ya jahhh aku mengetik ini agak feeling blue, menjelang pernikahan kamu, momen penting dalam hidup kamu, aku tidak bisa berword-word karena rasanya nano-nano (kalo no na itu udah siap belom?). Semoga nanti tetep ada waktu untuk hang out2 yaaa (harus), semoga nanti kita bisa liburan teaaa dengan request ga diceburin sama mangnya. Once again, hwappy bday jahraa🤩👋🏻 Ih jahh wopyuu😭🫶🏻</p><br><p>Udah ah takut kepanjangan tar di webnya kudu ngescroll (taunya udah kepanjangan😭)</p>`
};

const modal = document.getElementById('letter-modal');

function openLetter(senderName) {
  document.getElementById('modal-title').innerText = "Surat dari " + senderName;
  document.getElementById('modal-body').innerHTML = letterContent[senderName];
  modal.classList.remove('hidden');
}

function closeLetter() { 
  modal.classList.add('hidden'); 
}

const bgMusic = document.getElementById('bg-music');

// 1. Saat halaman selesai dimuat, cek status musik sebelumnya
document.addEventListener('DOMContentLoaded', () => {
  if (!bgMusic) return;

  const isPlaying = localStorage.getItem('musicPlaying');
  const savedTime = localStorage.getItem('musicTime');

  // Setel posisi lagu ke detik terakhir sebelum pindah halaman
  if (savedTime) {
    bgMusic.currentTime = parseFloat(savedTime);
  }

  // Jika sebelumnya musiknya ON, putar lagi secara otomatis
  if (isPlaying === 'true') {
    bgMusic.play().then(() => {
      updateMusicBtn(true);
    }).catch(() => {
      // Jika diblokir autoplay browser, putar setelah klik pertama di layar
      document.body.addEventListener('click', () => {
        bgMusic.play();
        localStorage.setItem('musicPlaying', 'true');
        updateMusicBtn(true);
      }, { once: true });
    });
  }
});

// 2. Simpan posisi detik lagu setiap kali lagu berjalan
if (bgMusic) {
  bgMusic.addEventListener('timeupdate', () => {
    localStorage.setItem('musicTime', bgMusic.currentTime);
  });
}

// 3. Fungsi untuk On/Off Musik lewat Tombol
function toggleMusic() {
  if (!bgMusic) return;

  if (bgMusic.paused) {
    bgMusic.play();
    localStorage.setItem('musicPlaying', 'true');
    updateMusicBtn(true);
  } else {
    bgMusic.pause();
    localStorage.setItem('musicPlaying', 'false');
    updateMusicBtn(false);
  }
}

// 4. Update tampilan tombol
function updateMusicBtn(isPlaying) {
  const btn = document.querySelector('.music-toggle');
  if (btn) {
    btn.innerHTML = isPlaying 
      ? `<span id="music-icon">🔊</span>` 
      : `<span id="music-icon">🎵</span>`;
  }
}

// ==========================================
// 2. LOGIKA TIUP LILIN VIRTUAL
// ==========================================
function tiupLilin() {
  const flame = document.getElementById('flame');
  const successMsg = document.getElementById('wish-success-msg');
  const instructionText = document.getElementById('wish-text');

  // Matikan api dengan efek pudar
  flame.style.opacity = '0';
  
  setTimeout(() => { 
    flame.style.visibility = 'hidden'; 
    
    // Ganti teks instruksi dengan pesan selamat
    instructionText.classList.add('hidden');
    successMsg.classList.remove('hidden');
    
    // Efek fade in manual dengan JS
    successMsg.style.opacity = 0;
    let opacity = 0;
    let timer = setInterval(function() {
      if(opacity >= 1) clearInterval(timer);
      successMsg.style.opacity = opacity;
      opacity += 0.1;
    }, 50);

    // Ledakan Confetti sebagai perayaan
    confetti({ 
      particleCount: 100, 
      spread: 80, 
      origin: { y: 0.6 }, 
      colors: ['#ff758c', '#ffffff', '#ffeb3b'] 
    });
  }, 300); 
}