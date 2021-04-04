var isMobile = window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

setTimeout(() => {
    for (i = 0; i < 400; i++) {
        document.querySelector('.block-wrapper').innerHTML += `<div class="block ${isMobile ? 'block-mobile' : 'block-pc'}" style="--i: ${i}"></div>`;
    }
}, 500);