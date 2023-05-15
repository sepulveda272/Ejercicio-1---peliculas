// FetchAPI para consumir recursos de API CineMark //
let movie = "mario";
document.addEventListener('DOMContentLoaded', ()=>{
    loadPeliculas();
})


const loadAPI = document.querySelector('#buscador');

loadAPI.addEventListener('input', (e)=>{
    movie = e.target.value
    console.log(movie);
    if(movie === ''){
        movie = "rocky"
    }
    loadPeliculas();
}
)

function loadPeliculas(){
    const urlCM = `http://www.omdbapi.com/?&apikey=cd5081ba&s=${movie}`

    fetch(urlCM)
        .then(imgPeli => {
            console.log(imgPeli);
            return imgPeli.json();
        })
        .then(imagenes => {
            let search = imagenes.Search;
            console.log(search);
            injectingMovie(search);
        })
}

function injectingMovie(search){
    const infoPeliculas = document.querySelector('#contenido')
    let html = '';
    search.forEach((img) => {
        const {Title, Year, Type, Poster} = img
        html += `
        <div class="card1" style="width: 18rem;">
            <img src="${Poster}" class="" alt="...">
            <div class="info">
                <h5 class="">${Title}</h5>
                <p class="">${Year}</p>
                <p class="">${Type}</p>
                <button id="abrir" class="verMas">Ver Detalles</button>
            </div>
         </div>S
        `;
        infoPeliculas.innerHTML = html;
    });
}

