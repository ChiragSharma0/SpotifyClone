/* console.log("welcome");

let currentIndex = 0; // Start with the first song
let mainplay = document.getElementById("main-play");
let seekbar = document.getElementById("seekbar");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let songlist = document.querySelector(".songlist"); // Corrected selector
let song = Array.from(document.getElementsByClassName("song"));
let banner = document.getElementById("songbanner");
let bannername = document.getElementById("banername");


console.log("Number of song elements:", song.length);

let songs = [
    {
        name: "Nostalgia", file: "audio/Janji & Johnning - Nostalgia [NCS Release].mp3", coverpath: "images/nostalgia.jpg"
    },
    {
        name: "StayFocused", file: "audio/Jessee & Artino - Stay Focused [NCS Release].mp3", coverpath: "images/stay.jpg"
    },
    {
        name: "EveryDay", file: "audio/Ripple - Everyday [NCS Release].mp3", coverpath: "images/everyday.jpg"
    },
    {
        name: "Mortals", file: "audio/Warriyo - Mortals (feat. Laura Brehm) [NCS Release].mp3", coverpath: "images/mortals.jpg"
    },
    {
        name: "RightTime", file: "audio/Youth In Circles & LUVIUM - The Right Time [NCS Release].mp3", coverpath: "images/right time.jpg"
    }
];

console.log("Number of songs:", songs.length);

song.forEach((element, i) => {
    if (i < songs.length) { // Ensure we don't go out of bounds
        element.getElementsByTagName("img")[0].src = songs[i].coverpath;
        element.getElementsByTagName("div")[0].innerHTML = songs[i].name;
    }
});




 // Initialize with the first song

let currentAudio = new Audio(songs[currentIndex].file);
banner.getElementsByTagName("img")[0].src = songs[0].coverpath;
bannername.innerHTML = songs[0].name + currentAudio.duration;




currentAudio.addEventListener('timeupdate', barupdate);
mainplay.addEventListener('click', playPause);
next.addEventListener('click', playnext);
prev.addEventListener('click', playprev);
seekbar.addEventListener('change', SEEK);


function playPause() {
    if (currentAudio.paused || currentAudio.currentTime <= 0) {
        currentAudio.play();
        mainplay.innerHTML = "&#x23F8;"; // Pause icon
    } else {
        currentAudio.pause();
        mainplay.innerHTML = "&#x25B6;"; // Play icon
    }
}

function playnext() {
    if (currentIndex < songs.length - 1) {
        currentIndex += 1;
        currentAudio.src = songs[currentIndex].file;
        currentsong();
        currentAudio.play();
        mainplay.innerHTML = "&#x23F8;"; // Update play/pause icon
        console.log("Playing next song, index:", currentIndex);
    }
    currentsong();
}

function playprev() {
    if (currentIndex > 0) {
        currentIndex -= 1;
        currentAudio.src = songs[currentIndex].file;
        currentAudio.play();
        mainplay.innerHTML = "&#x23F8;"; // Update play/pause icon
        console.log("Playing previous song, index:", currentIndex);
    }
    currentsong();

}

function barupdate() {
    const progress = parseInt((currentAudio.currentTime / currentAudio.duration) * 100);
    seekbar.value = progress;
}

function SEEK() {
    currentAudio.currentTime = seekbar.value * currentAudio.duration / 100;
}

function currentsong(){
    banner.getElementsByTagName("img")[0].src = songs[currentIndex].coverpath;
    bannername.innerHTML = songs[0].name + currentAudio.duration;

}
function play(){} */



console.log("welcome");

let currentIndex = 0; // Start with the first song
let mainplay = document.getElementById("main-play");
let seekbar = document.getElementById("seekbar");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let songlist = document.querySelector(".songlist"); // Corrected selector
let song = Array.from(document.getElementsByClassName("song"));
let banner = document.getElementById("songbanner");
let bannername = document.getElementById("banername");
let timestamp = document.getElementById("duration");
let timecurrent = document.getElementById("time");

console.log("Number of song elements:", song.length);

let songs = [
    {
        name: "Nostalgia", file: "audio/Janji & Johnning - Nostalgia [NCS Release].mp3", coverpath: "images/nostalgia.jpg"
    },
    {
        name: "StayFocused", file: "audio/Jessee & Artino - Stay Focused [NCS Release].mp3", coverpath: "images/stay.jpg"
    },
    {
        name: "EveryDay", file: "audio/Ripple - Everyday [NCS Release].mp3", coverpath: "images/everyday.jpg"
    },
    {
        name: "Mortals", file: "audio/Warriyo - Mortals (feat. Laura Brehm) [NCS Release].mp3", coverpath: "images/mortals.jpg"
    },
    {
        name: "RightTime", file: "audio/Youth In Circles & LUVIUM - The Right Time [NCS Release].mp3", coverpath: "images/right time.jpg"
    }
];

console.log("Number of songs:", songs.length);

song.forEach((element, i) => {
    if (i < songs.length) { // Ensure we don't go out of bounds
        element.getElementsByTagName("img")[0].src = songs[i].coverpath;
        element.getElementsByTagName("div")[0].innerHTML = songs[i].name;

        // Add click event listener to each song element
        element.addEventListener('click', () => {
            currentIndex = i;
            playSongFromList();
        });
    }
});

// Initialize with the first song
let currentAudio = new Audio(songs[currentIndex].file);
banner.getElementsByTagName("img")[0].src = songs[0].coverpath;
currentAudio.addEventListener('loadedmetadata',currentsong) /* () => {
    console.log("Metadata loaded");
    bannername.innerHTML = `${songs[currentIndex].name} `;
}); */

currentAudio.addEventListener('timeupdate', barupdate);
mainplay.addEventListener('click', playPause);
next.addEventListener('click', playnext);
prev.addEventListener('click', playprev);
seekbar.addEventListener('change', SEEK);

function playPause() {
    if (currentAudio.paused || currentAudio.currentTime <= 0) {
        currentAudio.play();
        mainplay.innerHTML = "&#x23F8;"; // Pause icon
    } else {
        currentAudio.pause();
        mainplay.innerHTML = "&#x25B6;"; // Play icon
    }
}

function playnext() {
    if (currentIndex < songs.length - 1) {
        currentIndex += 1;
        currentAudio.src = songs[currentIndex].file;
        currentsong();
        currentAudio.play();
        mainplay.innerHTML = "&#x23F8;"; // Update play/pause icon
        console.log("Playing next song, index:", currentIndex);
    }
}

function playprev() {
    if (currentIndex > 0) {
        currentIndex -= 1;
        currentAudio.src = songs[currentIndex].file;
        currentAudio.play();
        mainplay.innerHTML = "&#x23F8;"; // Update play/pause icon
        console.log("Playing previous song, index:", currentIndex);
        currentsong();
    }
}

function barupdate() {
    const progress = parseInt(((currentAudio.currentTime / currentAudio.duration) * 100).toFixed(10));
    seekbar.value = progress;
    timecurrent.innerHTML = `${(currentAudio.currentTime).toFixed(2)} `

}

function SEEK() {
    currentAudio.currentTime = seekbar.value * currentAudio.duration / 100;
}

function currentsong() {
    banner.getElementsByTagName("img")[0].src = songs[currentIndex].coverpath;
    bannername.innerHTML = `${songs[currentIndex].name} `;
    timestamp.innerHTML = `${(currentAudio.duration).toFixed(2)} `

}

function playSongFromList() {
    currentAudio.src = songs[currentIndex].file;
    currentAudio.load(); // Load the new song
    currentAudio.play(); // Play the new song
    mainplay.innerHTML = "&#x23F8;"; // Update play/pause icon
    currentsong(); // Update the song banner
    console.log("Playing song from list, index:", currentIndex);
}
duration