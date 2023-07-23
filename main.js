const MIN_DURATION = 10;
const body = document.querySelector("body");

function makeSnowflake() {
    const snowflake = document.createElement("div");
    const delay = Math.random() * 10;
    const initialOpacity = Math.random();
    const duration = Math.random() * 20 + MIN_DURATION;

    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * window.screen.width}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = initialOpacity;
    snowflake.style.animation = `fall ${duration}s linear`;

    body.appendChild(snowflake);

    setTimeout(() => {
        body.removeChild(snowflake);
        makeSnowflake(); 
    }, (duration + delay) * 1000);
}

makeSnowflake();

for (let i = 0; i < 50; i++) {
    setTimeout(makeSnowflake, 500 * i);
}
