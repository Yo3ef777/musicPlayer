let $ = document;
function _getid(id) {
  return $.getElementById(id);
}

function _getquery(query) {
  return $.querySelector(query);
}

function _getqueryAll(queryAll) {
  return $.querySelectorAll(queryAll);
}

const ImgElem = _getid("img");
const title = _getid("h1");
const nameSong = _getid("h4");
const playBtn = _getid("btn1");
const nextbtn = _getid("btn2");
const prevbtn = _getid("btn");
const playIelem = _getid("play");
const Audios = _getid("audio");
const ProgressBarElem = _getquery(".progress-bar");
const ProgressElem = _getquery(".progress");
const fullDuration = _getid("p1");
const DurationMusic = _getid("p");
const listBtn = _getid("btn3");
const ListPlayer = _getquery(".listplayer");
const playering = _getquery(".playering");
const popup = _getquery(".popup");
const bgColor = _getquery(".bg-color");
const container = _getquery(".container");

let count = 0;
let listAudio = [
  {
    name: "Phonk",
    duration: "2:25",
    singer: "Kordhell",
    MusicSrc: "music/1.mp3",
    ImgSrc: "img/1.jpg",
  },
  {
    name: "Phonk",
    duration: "2:26",
    singer: "g30x_em",
    MusicSrc: "music/2.mp3",
    ImgSrc: "img/2.jpg",
  },
  {
    name: "Phonk",
    duration: "2:49",
    singer: "Phonk",
    MusicSrc: "music/4.mp3",
    ImgSrc: "img/4.jpeg",
  },
  {
    name: "Phonk",
    duration: "2:42",
    singer: "Phonk",
    MusicSrc: "music/5.mp3",
    ImgSrc: "img/5.jpg",
  },
  {
    name: "Phonk",
    duration: "2:30",
    singer: "Phonk",
    MusicSrc: "music/6.mp3",
    ImgSrc: "img/6.jpg",
  },
  {
    name: "Phonk",
    duration: "1:26",
    singer: "Phonk",
    MusicSrc: "music/7.mp3",
    ImgSrc: "img/7.jpg",
  },
  {
    name: "Ghors 2",
    duration: "2:27",
    singer: "Hipogolist",
    MusicSrc: "music/8.mp3",
    ImgSrc: "img/8.jpg",
  },
  {
    name: "Maleka",
    duration: "4:25",
    singer: "Chavoshi",
    MusicSrc: "music/9.mp3",
    ImgSrc: "img/9.jpg",
  },
  {
    name: " Polozhenie",
    duration: "2:25",
    singer: "T3nzu",
    MusicSrc: "music/10.mp3",
    ImgSrc: "img/10.jpg",
  },
];

function AnimationImg() {
  ImgElem.style.cssText =
    "  animation-name: anim; animation-iteration-count: infinite;   animation-duration: 3s;    ";
}

let isplaying = false;

function playSong() {
  isplaying = true;

  AnimationImg();
  Audios.play();
  playIelem.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
}

function Stopsong() {
  Audios.pause();
  playIelem.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
  isplaying = false;
}

function TotalSong() {
  if (!isplaying) {
    playSong();
  } else {
    Stopsong();
  }
}

function nextplaySong() {
  count++;
  if (count > 9) {
    count = 0;
  }
  // console.log(listAudio[count].MusicSrc);

  Audios.src = listAudio[count].MusicSrc;
  title.innerHTML = listAudio[count].name;
  nameSong.innerHTML = listAudio[count].singer;
  ImgElem.src = listAudio[count].ImgSrc;
  fullDuration.innerHTML = listAudio[count].duration;

  playSong();
}

function prevplaySong() {
  count--;
  if (count < 0) {
    count = 9;
  }
  // console.log(listAudio[count].MusicSrc);
  Audios.src = listAudio[count].MusicSrc;
  title.innerHTML = listAudio[count].name;
  nameSong.innerHTML = listAudio[count].singer;
  ImgElem.src = listAudio[count].ImgSrc;
  fullDuration.innerHTML = listAudio[count].duration;
  playSong();
}

function firstindex() {
  title.innerHTML = listAudio[0].name;
  nameSong.innerHTML = listAudio[0].singer;
  fullDuration.innerHTML = listAudio[0].duration;
}

firstindex();

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isplaying) {
    const duration = e.srcElement.duration;
    const currentTime = e.srcElement.currentTime;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    ProgressBarElem.style.width = progressPercent + "%";
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      DurationMusic.textContent = durationMinutes + ":" + durationSeconds;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    DurationMusic.textContent = currentMinutes + ":" + currentSeconds;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = Audios.duration;
  Audios.currentTime = (clickX / width) * duration;
}

function ListItem() {
  listAudio.forEach((er) => {
    let listMusic = $.createElement("div");
    let listMusicpopup = $.createElement("div");
    let imgElem = $.createElement("img");
    let imgElempopup = $.createElement("img");
    let h4Elem = $.createElement("h4");
    let h4Elempopup = $.createElement("h4");
    let h6Elem = $.createElement("h6");
    let h6Elempopup = $.createElement("h6");
    let pElem = $.createElement("p");
    let pElempopup = $.createElement("p");

    listMusic.className = "music";
    listMusicpopup.className = "music";
    imgElem.className = "ImgElem";
    imgElempopup.className = "ImgElem";
    h4Elem.className = "H4Elem";
    h4Elempopup.className = "H4Elem";
    h6Elem.className = "H6Elem";
    h6Elempopup.className = "H6Elem";
    pElem.className = "PElem";
    pElempopup.className = "PElem";

    imgElem.src = er.ImgSrc;
    imgElempopup.src = er.ImgSrc;
    h4Elem.innerHTML = er.singer;
    h4Elempopup.innerHTML = er.singer;
    pElem.innerHTML = er.name;
    pElempopup.innerHTML = er.name;
    h6Elem.innerHTML = er.duration;
    h6Elempopup.innerHTML = er.duration;

    listMusic.append(imgElem, h4Elem, pElem, h6Elem);
    listMusicpopup.append(imgElempopup, h4Elempopup, pElempopup, h6Elempopup);
    ListPlayer.append(listMusic);
    playering.append(listMusicpopup);
    listMusic.addEventListener("click", () => {
      if (h4Elem.innerHTML === er.singer) {
        Audios.src = er.MusicSrc;
        title.innerHTML = er.name;
        nameSong.innerHTML = er.singer;
        ImgElem.src = er.ImgSrc;
        fullDuration.innerHTML = er.duration;
        // listMusic.style.cssText = `background-color: rgb(192, 192, 192);
        // box-shadow: 0px 0px 15px rgb(194, 194, 194);`;

        playSong();
      }
    });
    listMusicpopup.addEventListener("click", () => {
      if (h4Elem.innerHTML === er.singer) {
        Audios.src = er.MusicSrc;
        title.innerHTML = er.name;
        nameSong.innerHTML = er.singer;
        ImgElem.src = er.ImgSrc;
        fullDuration.innerHTML = er.duration;
        // listMusic.style.cssText = `background-color: rgb(192, 192, 192);
        // box-shadow: 0px 0px 15px rgb(194, 194, 194);`;

        popup.style.display = "none";
        bgColor.style.filter = "blur(0px)";
        listBtn.style.display = "block";
        playSong();
      }
    });
  });
}
ListItem();

function showPopup() {
  playering.style.cssText = "display: block";
  popup.style.cssText = `display: flex;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  left: 150px;
  top:30px;
  background-color:rgb(220, 220, 220);`;
  bgColor.style.filter = "blur(5px)";
  listBtn.style.display = "none";
}

Audios.addEventListener("timeupdate", updateProgressBar);
playBtn.addEventListener("click", TotalSong);
nextbtn.addEventListener("click", nextplaySong);
prevbtn.addEventListener("click", prevplaySong);
ProgressElem.addEventListener("click", setProgressBar);
listBtn.addEventListener("click", showPopup);
