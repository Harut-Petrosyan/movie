let movie = JSON.parse(localStorage.getItem("movies")) || []
let gangster = []
let api_key = "9b702a6b89b0278738dab62417267c49" 
let searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query= `

function render(url=`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`) { 
  fetch(url) 
    .then(response => response.json()) 
    .then(response => response.results.forEach((e)=>{ 
      let nkar = document.createElement('div')  
      nkar.innerHTML = `
      <div class="card">
      <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" id="movies_img">
      <p class="pp">${e.popularity} popularity</p>
      <p>${e.title}</p> 
      <p>statistic ${e.vote_average}</p>
      </div>
      ` 
      nkar.addEventListener('click',()=>{
        localStorage.setItem('burunduk',JSON.stringify(e.id))
        location.href = 'mov.html'
      })
      root.append(nkar) 
      console.log(e); 
})) 
} 
render() 
search.addEventListener('input', ()=>{ 
  if (search.value.trim() !== '') { 
    root.innerHTML = '' 
    fetch(searchApi + search.value) 
    .then(response => response.json()) 
    .then(response => response.results.forEach((e)=>{ 
      let nkar = document.createElement('div') 
      nkar.innerHTML = `
      <div class="card">
      <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" id="movies_img">  
      <p>${e.title}</p> 
      <p>statistic ${e.vote_average}</p>
      ` 
      nkar.addEventListener('click',()=>{
        localStorage.setItem('burunduk',JSON.stringify(e.id))
        location.href = 'mov.html'
      })
      
      root.append(nkar) 
})) 
  }else { 
    render() 
    let mov = {
      id:response[i].id,
      title: response[i].title,
      image: response[i].image,
    };
    movie.push(mov);
  } 
  localStorage.setItem("movies", JSON.stringify(movie));
})

function categorys(){
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
.then(response => response.json())
.then(response => response.genres.forEach((e)=>{
  let gun = document.createElement("button")
  gun.classList.toggle("id","gun")
  gun.innerHTML = `${e.name}`
  category.append(gun)
  console.log(gangster);
  // gangster.push(e.id)
  gun.addEventListener("click",()=>{
  root.innerHTML = ""
  if (!gangster.includes(e.id)) {
    gangster.push(e.id)
  }else{
    gangster = gangster.filter((b)=>b!==e.id)
  }
    render(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${gangster}.`)
  })
  dark.addEventListener('click',()=>{
    body.style.backgroundColor = 'white'
    if (body.style.backgroundColor == "white") {
      gun.style.border = "2px solid black"
      gun.style.color = 'black'
      h1.style.color = 'black'
      h2.style.color = 'black'
    }else{
      gun.style.border = "2px solid white"
      gun.style.color = 'white'

    }
  })
}))
}
categorys()
