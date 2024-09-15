const music1 = new Audio('songs/peakOP.mp3')
const music2 = new Audio('songs/interlinked.mp3')
const music3 = new Audio('songs/choo_loo.mp3')
const music4 = new Audio('songs/all_the_star.mp3')
const music5 = new Audio('songs/sparkle.mp3')

const songs = [
  {
    id: "1",
    songname: `Peak-(One Piece)
        <p class="artist">-Sekai no Owari</p>`,
        songImg: "images/peakOP.jpeg"
  },
  {
    id: "2",
    songname: `interlinked
        <p class="artist">- Lonely Lies, GOLDKID$</p>`,
        songImg: "images/interlinked.jpeg"
  },
  {
    id: "3",
    songname: `chuu Loo
        <p class="artist">- By The Local Train</p>`,
        songImg: "images/chuu_loo.jpeg"
  },
  {
    id: "4",
    songname: `All the stars
        <p class="artist">- Kendrick Lamar, SZA</p>`,
        songImg: "images/all_the_star.jpg"
  },
  {
    id: "5",
    songname: `sparkle(Your name)
        <p class="artist">- Yojiro Noda, RADWIMPS</p>`,
        songImg: "images/sparkle.jpeg"
  }
]

let songPlay = document.getElementById('play');

songPlay.addEventListener('click', ()=>{
  if (music1.paused || music1.currentTime <= 0) {
    music1.play();
    songPlay.classList.remove('fa-play');
    songPlay.classList.add('fa-pause');
  } else {
    music1.pause();
    songPlay.classList.add('fa-play');
    songPlay.classList.remove('fa-pause');
  }
})

let album1 = document.getElementById('2');

album1.addEventListener('click', ()=>{
  if (music2.paused || music2.currentTime <=0) {
    music2.play();
    album1.classList.remove('fa-play');
    album1.classList.add('fa-pause');
  } else {
    music2.pause();
    album1.classList.add('fa-play');
    album1.classList.remove('fa-pause');
  }
})
let album2 = document.getElementById('3');

album2.addEventListener('click', ()=>{
  if (music3.paused || music3.currentTime <=0) {
    music3.play();
    album2.classList.remove('fa-play');
    album2.classList.add('fa-pause');
  } else {
    music3.pause();
    album1.classList.remove('fa-pause');
    album1.classList.add('fa-play');
  }
})
let album3 = document.getElementById('4');

album3.addEventListener('click', ()=>{
  if (music4.paused || music4.currentTime <=0) {
    music4.play();
    album3.classList.remove('fa-play');
    album3.classList.add('fa-pause');
  } else {
    music4.pause();
    album3.classList.add('fa-play');
    album3.classList.remove('fa-pause');
  }
})
let album4 = document.getElementById('5');

album4.addEventListener('click', ()=>{
  if (music5.paused || music5.currentTime <=0) {
    music5.play();
    album4.classList.remove('fa-play');
    album4.classList.add('fa-pause');
  } else {
    music5.pause();
    album4.classList.add('fa-play');
    album3.classList.remove('fa-pause');
  }
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');


music1.addEventListener('timeupdate', ()=>{
  let currentTime = music1.currentTime;
  let duration = music1.duration; 

  let min1 = Math.floor(duration/60);
  let sec1 = Math.floor(duration%60);
  // console.log(min1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`
  }

  currentEnd.innerText = `${min1}:${sec1}`
  
  let min2 = Math.floor(currentTime/60);
  let sec2 = Math.floor(currentTime%60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`
  }
  currentStart.innerText = `${min2}:${sec2}`

  let progressBar = parseInt((currentTime / duration)*100)
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

music2.addEventListener('timeupdate', ()=>{
  let currentTime = music2.currentTime;
  let duration = music2.duration; 

  let min1 = Math.floor(duration/60);
  let sec1 = Math.floor(duration%60);
  // console.log(min1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`
  }

  currentEnd.innerText = `${min1}:${sec1}`
  
  let min2 = Math.floor(currentTime/60);
  let sec2 = Math.floor(currentTime%60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`
  }
  currentStart.innerText = `${min2}:${sec2}`

  let progressBar = parseInt((currentTime / duration)*100)
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});
music3.addEventListener('timeupdate', ()=>{
  let currentTime = music3.currentTime;
  let duration = music3.duration; 

  let min1 = Math.floor(duration/60);
  let sec1 = Math.floor(duration%60);
  // console.log(min1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`
  }

  currentEnd.innerText = `${min1}:${sec1}`
  
  let min2 = Math.floor(currentTime/60);
  let sec2 = Math.floor(currentTime%60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`
  }
  currentStart.innerText = `${min2}:${sec2}`

  let progressBar = parseInt((currentTime / duration)*100)
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});
music4.addEventListener('timeupdate', ()=>{
  let currentTime = music4.currentTime;
  let duration = music4.duration; 

  let min1 = Math.floor(duration/60);
  let sec1 = Math.floor(duration%60);
  // console.log(min1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`
  }

  currentEnd.innerText = `${min1}:${sec1}`
  
  let min2 = Math.floor(currentTime/60);
  let sec2 = Math.floor(currentTime%60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`
  }
  currentStart.innerText = `${min2}:${sec2}`

  let progressBar = parseInt((currentTime / duration)*100)
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});
music5.addEventListener('timeupdate', ()=>{
  let currentTime = music5.currentTime;
  let duration = music5.duration; 

  let min1 = Math.floor(duration/60);
  let sec1 = Math.floor(duration%60);
  // console.log(min1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`
  }

  currentEnd.innerText = `${min1}:${sec1}`
  
  let min2 = Math.floor(currentTime/60);
  let sec2 = Math.floor(currentTime%60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`
  }
  currentStart.innerText = `${min2}:${sec2}`

  let progressBar = parseInt((currentTime / duration)*100)
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

// seek.addEventListener('change', ()=>{
//   music1.currentTime = seek.value*duration/100;
// })
