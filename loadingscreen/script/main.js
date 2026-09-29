// Function for getting random number between 1 and 3 for song choose

function getRandomSongNumber() {
    return random = Math.floor(Math.random() * 3) + 1;
  }
// Function for getting random number between 1 and 3 for song choose

// Function for setting a random song
  function setNewSong() {
  if (random == 1) {
    document.getElementById("loading").src = "song/song1.mp3";
    songname.innerHTML = "Asketa & Natan Chaim - More [NCS Release]";
  }
  else if (random == 2) {
    document.getElementById("loading").src = "song/song2.mp3";
    songname.innerHTML = "Akacia - Electric [NCS Release]";
  }
  else if (random == 3) {
    document.getElementById("loading").src = "song/song3.mp3";
    songname.innerHTML = "Wiguez & Vizzen - Running Wild [NCS Release]";
  }

  }
// Function for setting a random song

// Function for random song select on page loaded
document.addEventListener("DOMContentLoaded", function () {
    // Volání funkcí pro výběr a nastavení náhodné písně
    var random = getRandomSongNumber();
    setNewSong(random);
  });
// Function for random song select page loaded

// Function for lower or higher up sound in background, its working function in script but its not noted in text//
var play = false;
var vid = document.getElementById("loading");
vid.volume = 0.2;
window.addEventListener('keyup', function(e) {
    if (e.which == 38) { // ArrowDOWN
        vid.volume = Math.min(vid.volume + 0.025, 1);
    } else if (e.which == 40) { // ArrowUP
        vid.volume = Math.max(vid.volume - 0.025, 0);
    };
});
// Function for lower or higher up sound in background, its working function in script but its not noted in text//

var mutetext = document.getElementById("text");
var songname = document.getElementById("songname");

window.addEventListener("keyup", function(event) {
    if (event.which == 37) { // ArrowLEFT
        if (document.getElementById("loading").src.endsWith("song2.mp3")) {
            document.getElementById("loading").src = "song/song1.mp3";
            songname.innerHTML = "Asketa & Natan Chaim - More [NCS Release]";

        } else if (document.getElementById("loading").src.endsWith("song1.mp3")) {
            document.getElementById("loading").src = "song/song3.mp3";
            songname.innerHTML = "Wiguez & Vizzen Ft. Maestro Chives - Running Wild (EH!DE Remix) [NCS Release]";

        } else if (document.getElementById("loading").src.endsWith("song3.mp3")) {
            document.getElementById("loading").src = "song/song2.mp3";
            songname.innerHTML = "Akacia - Electric [NCS Release]";
        }
        document.getElementById("loading").play();
        mutetext.innerHTML = "MUTE";
    }

    if (event.which == 39) { // ArrowRIGHT
        if (document.getElementById("loading").src.endsWith("song2.mp3")) {
            document.getElementById("loading").src = "song/song3.mp3";
            songname.innerHTML = "Wiguez & Vizzen Ft. Maestro Chives - Running Wild (EH!DE Remix) [NCS Release]";

        } else if (document.getElementById("loading").src.endsWith("song3.mp3")) {
            document.getElementById("loading").src = "song/song1.mp3";
            songname.innerHTML = "Asketa & Natan Chaim - More [NCS Release]";

        } else if (document.getElementById("loading").src.endsWith("song1.mp3")) {
            document.getElementById("loading").src = "song/song2.mp3";
            songname.innerHTML = "Akacia - Electric [NCS Release]";

        }
        document.getElementById("loading").play();
        mutetext.innerHTML = "MUTE";
    }
    
});


// Function for pause and play music in background//
var audio = document.querySelector('audio');

if (audio) {

    window.addEventListener('keydown', function(event) {

        var key = event.which || event.keyCode;
        var x = document.getElementById("text").innerText;
        var y = document.getElementById("text");

        if (key === 32 && x == "MUTE") { // spacebar

            event.preventDefault();

            audio.paused ? audio.play() : audio.pause();
            y.innerHTML = "UNMUTE";

        } else if (key === 32 && x == "UNMUTE") {

            event.preventDefault();

            audio.paused ? audio.play() : audio.pause();
            y.innerHTML = "MUTE";
        }
    });
}
// Function for pause and play music in background//

//SHADED-TEXT - Function for switching words in loading animation

var shadedText = document.querySelector('.shaded-text');
var texts = ["JOINING SERVER", "PREPARING ASSETS", "ESTABLISHING CONNECTION"];
var currentText = 0;

setInterval(function() {
currentText = (currentText + 1) % texts.length;
shadedText.classList.remove('fade-out');
void shadedText.offsetWidth;
shadedText.classList.add('fade-out');
setTimeout(function() {
shadedText.textContent = texts[currentText];
}, 1000);
}, 4000);
//SHADED-TEXT - Function for switching words in loading animation


//PLACEHOLDER - Function for getting player data from the SA-MP gamemode (samp-cef)
window.addEventListener('DOMContentLoaded', () => {
  // Show an indeterminate loading bar immediately
  startIndeterminate();

  // Listen for the event emitted from main.pwn (OnCefBrowserCreated)
  if (window.cef) {
    cef.on('loadingscreen:init', (name, serverAddress) => {
      console.log(`You are connecting to ${serverAddress}`);

      // innerText (not innerHTML): player names are user input and could contain bad HTML!
      var nameSpan = document.querySelector('#namePlaceholder > span');
      if (nameSpan) nameSpan.innerText = name;
    });

    // Direct progress from the server (value 0-100)
    cef.on('loadingscreen:progress', (pct) => {
      setProgress(Number(pct));
    });

    // The server tells us how long the loading screen stays; drive the progress
    // bar to 100% over that time (no separate countdown text needed).
    cef.on('loadingscreen:duration', (ms) => {
      var total = Math.max(1, Number(ms));
      var start = Date.now();
      setProgress(0);
      clearInterval(progressTimer);
      progressTimer = setInterval(function () {
        var elapsed = Date.now() - start;
        var pct = Math.min(100, (elapsed / total) * 100);
        setProgress(pct);

        if (elapsed >= total) {
          clearInterval(progressTimer);
          progressTimer = null;
          setProgress(100);
        }
      }, 100);
    });
  }
});
//PLACEHOLDER - Function for getting player data from the SA-MP gamemode (samp-cef)

//RANDOMPHRASES - Phrases generated after your steamname
(function welcometext() {
    var welcomes = ['Begin your exciting new adventure.', 'Discover the wonders of your new city.', 'Open the door to a brand-new chapter.', 'Step into a world of new possibilities.', 'Embrace your fresh beginning.', ];
    var randomWelcome = Math.floor(Math.random() * welcomes.length);
    document.getElementById('welcomeDisplay').innerHTML = welcomes[randomWelcome];
  })();
//RANDOMPHRASES - Phrases generated after your steamname

//EXTERNALLINKS - CEF cannot auto-open the OS browser, so copy the link to the
//clipboard and show a small toast telling the player the link was copied.
function showToast(message) {
  var toast = document.getElementById('cef-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cef-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(function () {
    toast.classList.remove('show');
  }, 2500);
}

function legacyCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.top = '-1000px';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  var ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  document.body.removeChild(ta);
  return ok;
}

function copyToClipboard(text) {
  // Prefer the modern async clipboard API, fall back to execCommand for CEF.
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(function () {
      return legacyCopy(text);
    });
  }
  return Promise.resolve(legacyCopy(text));
}

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.ext-link');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      e.preventDefault();
      var url = this.getAttribute('data-url') || this.href;
      Promise.resolve(copyToClipboard(url)).then(function () {
        showToast('Link copied! Paste it in your browser: ' + url);
      });
    });
  }
});
//EXTERNALLINKS