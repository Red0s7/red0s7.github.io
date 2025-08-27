const HEADER_HEIGHT = ((document.querySelector('header').getBoundingClientRect().height / window.innerHeight) * 100).toFixed(2);
const HR_HEIGHT = ((document.querySelector('hr').getBoundingClientRect().height / window.innerHeight) * 100).toFixed(2);
const MAIN_HEIGHT = (100 - HEADER_HEIGHT - HR_HEIGHT).toFixed(2);
console.log(MAIN_HEIGHT)
console.log(HEADER_HEIGHT)
console.log(HR_HEIGHT)
document.querySelector('main').style.height = `${MAIN_HEIGHT}vh`;

function updateLinks(addSuffix) {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        let href = link.getAttribute('href');
        if (addSuffix) {
            if (!href.endsWith('?scrlcbp=.')) {
                link.setAttribute('href', href + '?scrlcbp=.');
            }
        } else {
            // Remove the suffix if present
            link.setAttribute('href', href.replace('?scrlcbp=.', ''));
        }
    });
}

const scbypss = document.querySelector("#scbypss");

// Restore toggle state from localStorage
if (localStorage.getItem('scbypssChecked') === 'true') {
    scbypss.checked = true;
    updateLinks(true);
} else {
    updateLinks(false);
}

// Listen for changes
scbypss.addEventListener('change', function() {
    localStorage.setItem('scbypssChecked', scbypss.checked);
    updateLinks(scbypss.checked);
});
