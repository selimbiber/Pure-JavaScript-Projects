const playlistSongs = document.getElementById("playlist-songs");
const controllerBtn = document.getElementById("controller");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
const shuffleBtn = document.getElementById("shuffle");
const playerProgressEl = document.getElementById("player-progress");
const progressBar = document.getElementById("progress-bar");

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];

const audio = new Audio();

let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }

  userData.currentSong = song;
  controllerBtn.classList.add("playing");
  controllerBtn.innerHTML = `<img src="./icons/pause.svg" alt="" />`;
  playerProgressEl.classList.remove("hidden");

  highlightCurrentSong();
  setPlayerDisplay();
  setPlayBtnAccessibleText();
  audio.play();
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  controllerBtn.classList.remove("playing");
  controllerBtn.innerHTML = `<img src="./icons/play.svg" alt="" />`;
  audio.pause();
};

const playNextSong = () => {
  if (userData?.currentSong === null) return;

  const currentSongIndex = getCurrentSongIndex();
  const nextSong =
    userData?.songs[
      currentSongIndex === userData.songs.length - 1 ? 0 : currentSongIndex + 1
    ];

  playSong(nextSong.id);
};

const playPreviousSong = () => {
  if (userData?.currentSong === null) return;

  const currentSongIndex = getCurrentSongIndex();
  const previousSong =
    userData?.songs[
      currentSongIndex === 0 ? userData.songs.length - 1 : currentSongIndex - 1
    ];
  playSong(previousSong.id);
};

const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  userData.currentSong = null;
  userData.songCurrentTime = 0;

  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
  setPlayBtnAccessibleText();
};

const deleteSong = (id) => {
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    playerProgressEl.className = "hidden";

    pauseSong();
    setPlayerDisplay();
  }

  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs);
  highlightCurrentSong();
  setPlayBtnAccessibleText();

  if (userData?.songs.length === 0) {
    const resetBtn = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");

    resetBtn.id = "reset";
    resetBtn.ariaLabel = "Reset playlist";
    resetBtn.appendChild(resetText);
    playlistSongs.appendChild(resetBtn);

    resetBtn.addEventListener("click", () => {
      userData.songs = [...allSongs];

      renderSongs(sortSongs());
      setPlayBtnAccessibleText();
      resetBtn.remove();
    });
  }
};

const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;

  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};

const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`);

  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });

  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

const renderSongs = (array) => {
  const songsHTML = array
    .map((song) => {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
        <img src="./icons/delete.svg" alt="" />
        </button>
      </li>
      `;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;
};

const updateProgressBar = () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration || 0;
  const progressBar = document.getElementById("progress-bar");
  const currentTimeDisplay = document.getElementById("current-time");
  const durationTimeDisplay = document.getElementById("duration-time");

  // Update the progress-bar values
  progressBar.max = duration;
  progressBar.value = currentTime;

  // Update the times
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationTimeDisplay.textContent = formatTime(duration);
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const setPlayBtnAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];

  controllerBtn.setAttribute("aria-label", song?.title ? `Play ${song.title}` : "Play");
};

const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);

controllerBtn.addEventListener("click", () => {
  if (controllerBtn.classList.contains("playing")) {
    pauseSong();
    return;
  }

  userData?.currentSong === null
    ? playSong(userData?.songs[0].id)
    : playSong(userData?.currentSong.id);
});

nextBtn.addEventListener("click", playNextSong);

previousBtn.addEventListener("click", playPreviousSong);

shuffleBtn.addEventListener("click", shuffle);

audio.addEventListener("timeupdate", updateProgressBar);

audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

  if (nextSongExists) {
    playNextSong();
    return;
  }

  userData.currentSong = null;
  userData.songCurrentTime = 0;
  pauseSong();
  setPlayerDisplay();
  highlightCurrentSong();
  setPlayBtnAccessibleText();
});

progressBar.addEventListener("input", (event) => {
  const newTime = event.target.value;
  audio.currentTime = newTime;
});

const sortSongs = () => {
  userData?.songs.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  return userData?.songs;
};

renderSongs(sortSongs());
setPlayBtnAccessibleText();
