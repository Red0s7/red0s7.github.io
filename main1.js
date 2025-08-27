
function updateLinks(addSuffix) {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        let href = link.getAttribute('href');
        if (addSuffix) {
            if (!href.endsWith('?scrlcbp=.')) {
                link.setAttribute('href', href + '?scrlcbp=.');
            }
        } else {
            link.setAttribute('href', href.replace('?scrlcbp=.', ''));
        }
    });
}

const scbypss = document.querySelector("#scbypss");


if (localStorage.getItem('scbypssChecked') === 'true') {
    scbypss.checked = true;
    updateLinks(true);
} else {
    updateLinks(false);
}

scbypss.addEventListener('change', function() {
    localStorage.setItem('scbypssChecked', scbypss.checked);
    updateLinks(scbypss.checked);
});
