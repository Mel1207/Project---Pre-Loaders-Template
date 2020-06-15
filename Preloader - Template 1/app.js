const loader = document.querySelector('.loading');
const contentIndex
 = document.querySelector('.content-index');
const content = document.querySelector('.content');

function initLoad () {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        content.style.display = 'block';
        content.style.opacity = 1;
        // setTimeout(() => (content.style.opacity = 1), 50);
        content.classList.add('content-fade');
    }, 5000);
}

initLoad();