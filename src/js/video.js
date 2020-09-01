const containerVideo = document.querySelector('.video');
const video = containerVideo.querySelector('video');
const playpause = containerVideo.querySelector('.video__playpause');
const play = containerVideo.querySelector('.video__playback');
const controls = containerVideo.querySelector('.video__controls');
const total = containerVideo.querySelector('.video__total');
const progress = containerVideo.querySelector('.video__current');
const dynamic = containerVideo.querySelector('.video__volume-control');
const volume = containerVideo.querySelector('.video__volume-progress');
const volumeProgress = volume.firstElementChild;

playpause.addEventListener('click', togglePlay);
play.addEventListener('click', togglePlay);
video.addEventListener('play', playPause);
video.addEventListener('pause', playPause);
total.addEventListener('click', setCurrentTime);
video.addEventListener('timeupdate', timeUpdate);
dynamic.addEventListener('click', mute);
volume.addEventListener('click', setVolume);

function setVolume(e) {
    volumeProgress.style.width = `${e.offsetX}px`;
    video.volume = e.offsetX / volume.clientWidth;
}

function mute(e) {
    dynamic.classList.toggle('muted');
    video.muted = !video.muted;
}

function playPause() {
    controls.classList.toggle('paused');
}

function togglePlay() {
    video.paused ?  video.play() : video.pause();
}

function setCurrentTime(e) {
    const offsetX = e.offsetX / total.clientWidth;
    video.currentTime = offsetX * video.duration;
}

function timeUpdate() {
    const progressTime = video.currentTime / video.duration;

    progress.style.width = `${progressTime * total.clientWidth}px`;
}


// let player;
// const playerContainer = $(".video");

// let eventsInit = () => {
//     $(".video__start").click(e => {
//         e.preventDefault();

//         if(playerContainer.hasClass("paused")) {
//             player.pauseVideo ();
//         } else {
//             player.playVideo ();
//         }           

//     });

//     $(".video__playback").click(e => {
//         const bar = $(e.currentTarget);
//         const clickedPosition = e.originalEvent.layerx;
//         const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
//         const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;
        
//         $(".video__playback-button").css({
//             left: `${newButtonPositionPercent}%`
//         });

//         player.seekTo(newPlaybackPositionSec);
//     });

//     $(".video__splash").click(e => {
//         player.playVideo()
//     })


//     $(".video__volume").click(e => {
//         const bar = $(e.currentTarget);
//         const clickedPosition = e.originalEvent.layerx;
//         const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
//         const newPlaybackPositionSec = (player.getVolume() / 100) * newButtonPositionPercent;
        
//         $(".video__volume-button").css({
//             left: `${newButtonPositionPercent}%`
//         });

//         player.setVolume(newPlaybackPositionSec);
//     });

// };

// const onPlayerReady = () => {
//     let interval;
//     const durationSec = player.getDuration();
    
//     if(typeof interval !== "undefined") {
//         clearInterval(interval);
//     }

//     interval = setInterval(() => {
//         const completedSec = player.getCurrentTime();
//         const completedPercent = (completedSec / durationSec) * 100;

//         $(".video__playback-button").css({
//             left: `${completedPercent}%`
//         });

//     }, 1000);

// };

// const onPlayerStateChange = event => {
//     switch (event.data) {
//         case 1:
//             playerContainer.addClass("active");
//             playerContainer.addClass("paused");
//             break;
        
//         case 2:
//             playerContainer.removeClass("active");
//             playerContainer.removeClass("paused");
//             break;
//     }
// }

// function onYouTubeIframeAPIReady() {
//     player = new YT.Player("player", {
//         height: "405",
//         width: "660",
//         videoId: "hbrxDLNVaLo",
//         events: {
//             onReady: onPlayerReady,
//             onStateChange: onPlayerStateChange
//         },
//         playerVars: {
//             controls: 0,
//             disablekb: 0,
//             showinfo: 0,
//             rel: 0,
//             autoplay: 0,
//             modestbranding: 0
//         }
//     });
// }

// eventsInit ();