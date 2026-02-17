//element
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

//click envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout ( () => {
        document.querySelector(".letter-window").classList.add("open"); 
    },50);
});

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance= Math.random() * (max - min) + min;
    const angle= Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

})

// //yes btn get bigger
// let yesScale = 1;

// yesBtn.style.position = "relative";
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";         
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
   
//     }
// });

//yes is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Just kidding😆\n\nHappy Valentine's Day!♡";

    catImg.src = "picture/dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

// ⭐ ADDED: no button click gives same result as yes + fun in-page message
noBtn.addEventListener("click", () => {

    // fun message displayed in letter
    finalText.textContent = "you clicked yes, I saw it 😏\n\nWritting a New Chapter: U n I verse Book.";

    title.textContent = "bleee! Happy Valentine's Day!♡";

    catImg.src = "picture/dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});