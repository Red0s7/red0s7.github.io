const HEADER_HEIGHT = ((document.querySelector('header').getBoundingClientRect().height / window.innerHeight) * 100).toFixed(2);
const HR_HEIGHT = ((document.querySelector('hr').getBoundingClientRect().height / window.innerHeight) * 100).toFixed(2);
const MAIN_HEIGHT = (100 - HEADER_HEIGHT - HR_HEIGHT).toFixed(2);
console.log(MAIN_HEIGHT)
console.log(HEADER_HEIGHT)
console.log(HR_HEIGHT)
document.querySelector('main').style.height = `${MAIN_HEIGHT}vh`;
