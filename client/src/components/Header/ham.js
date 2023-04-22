
const ham = () => {
const bar = document.querySelector('.bar');
let active;
bar.addEventListener('click', () => {
    if (!active) {
        bar.classList.remove('active');
        active = false;
    } else {
        bar.classList.add('active');
        active = true;
    }
    active = !active;
});
};

export default ham;
