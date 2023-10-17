document.body.onmousemove = (e) => {
    document.querySelector('.x-position-info').textContent = e.offsetX; //? Horizontal
    document.querySelector('.y-position-info').textContent = e.offsetY; //? Vertical
};