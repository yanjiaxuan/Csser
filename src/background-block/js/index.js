window.innerWidth
for (i = 0; i < 400; i++) {
    const div = document.createElement('div');
    div.className = 'block';
    div.style.animationDelay = 0.05 * i + 's';
    document.querySelector('.block-wrapper').append(div);
}