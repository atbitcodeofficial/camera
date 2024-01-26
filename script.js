let sutterBtn = document.querySelector(".shutterButton");
let flashLight = document.querySelector(".flashLight");
let flashBody = document.querySelector(".flashLightBody");

sutterBtn.addEventListener("click", ()=>{
    sutterBtn.classList.add("click");
    flashLight.classList.remove("flashLight");
    flashLight.classList.add("glow");
    flashBody.classList.remove("flashLightBody");
    flashBody.classList.add("bodyGlow");
    setTimeout(() => {
        sutterBtn.classList.remove("click");
    }, 600);
    setTimeout(() => {
        flashLight.classList.add("flashLight");
        flashLight.classList.remove("glow");
        flashBody.classList.add("flashLightBody");
        flashBody.classList.remove("bodyGlow");
    }, 200);
})