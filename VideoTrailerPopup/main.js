const MOVIE_CARD = document.getElementById('movie-card')
const WATCH_BTN = document.getElementById('watch-btn')
const MOVIE_SCREEN = document.getElementById('movie-screen')
const MOVIE_VIDEO = document.getElementById('movie-video')
const CLOSE_X = document.getElementById('close-icon')

WATCH_BTN.addEventListener('click', () => {
    MOVIE_CARD.style.display = 'none'
    MOVIE_SCREEN.style.display = 'flex'
})

CLOSE_X.addEventListener('click', () => {
    MOVIE_SCREEN.style.display = 'none'
    MOVIE_VIDEO.pause();
    MOVIE_VIDEO.currentTime = 0;

    MOVIE_CARD.style.display = 'flex'
})