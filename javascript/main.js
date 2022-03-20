console.log("Sonndy is the best")



const startBtn = document.querySelector(".play-btn");
const videoContainer = document.querySelector(".video-container");
const youtubeVideo = document.querySelector(".youtube")

const close = document.querySelector(".close");


startBtn.addEventListener("click", ()=>{
    videoContainer.classList.add("show");
    youtubeVideo.setAttribute("src", "https://www.youtube.com/embed/gKVKsm_rIYk");
})

close.addEventListener("click", ()=>{
    videoContainer.classList.remove("show");
    youtubeVideo.removeAttribute("src");
})