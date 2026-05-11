
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(`Generated color: rgb(${r}, ${g}, ${b})`);
    return `rgb(${r}, ${g}, ${b})`;
};

intervalId = null;

document.querySelector("#start").addEventListener("click", () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
});

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

