let movie = JSON.parse(localStorage.getItem("burunduk"));
let api_key = "9b702a6b89b0278738dab62417267c49" 
let trailer = document.querySelector('.trailer')
function render() {-
fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${api_key}`) 
.then(response => response.json()) 
.then(response => {
  
  let nkar = document.createElement('div')  
  nkar.classList.toggle('cards') 
  nkar.innerHTML = `
  <div class="card"><img src="https://image.tmdb.org/t/p/w500${response.poster_path}"></div>
  <div class ='card1'>${response.overview}</div>
  ` 
  root1.append(nkar)
}
)
}
render()

fetch(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${api_key}`) 
    .then(response => response.json()) 
    .then(response => response.cast.forEach((e)=>{ 
      let nkar = document.createElement('div') 
      nkar.classList.toggle('container') 
      nkar.innerHTML = `
        <div class="card2"><img src="https://image.tmdb.org/t/p/w500${e.profile_path}">
        <p>${e.name}<p>
      ` 
    root2.append(nkar)
    })) 
function vidos() {
  fetch(`https://api.themoviedb.org/3/movie/${movie}/videos?api_key=${api_key}`) 
    .then(response => response.json()) 
    .then(response => response.results.forEach((e)=>{ 
      let video = document.createElement('div') 
      let coverik = document.createElement('div')
      video.classList.toggle('video') 
      coverik.classList.add('coverik')
      video.innerHTML = `
      <iframe width="500px" height="350px" src="https://youtube.com/embed/${e.key}"></iframe>
      <button onclick="close()">X</button>
      ` 
      video.append(coverik)
      trailer.append(video)
      coverik.addEventListener('click',()=>{
        video.classList.add('popup')   
        video.querySelector('iframe').style.position = 'absolute'
        video.querySelector('iframe').style.zIndex = '100'
        video.querySelector('iframe').style.width = '50%'
        video.querySelector('iframe').style.height = '75%'
        // video.querySelector('iframe').style.top = '0'
      })
    }))
  }
  vidos()
  function close(e) {
    e.remove()
  }
  let mask = document.querySelector('.mask')
  window.addEventListener('load',()=>{
    setTimeout(()=>{
    mask.classList.add('hide')
      mask.remove()
    },1000)
  })
