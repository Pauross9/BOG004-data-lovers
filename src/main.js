import {filterData,sortData,filterFilm}  from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

const dataFilms = data.films
let search = document.getElementById("search-film")
search.addEventListener("change", (event) => {
    console.log(event.target.value)
drawData(filterFilm(dataFilms,event.target.value))

})

const selectDirector = document.getElementById("director-select");
selectDirector.addEventListener("change", () => {
    const directorSelect = selectDirector.value;
    drawData(filterData(dataFilms,directorSelect));
})

const selectOrder = document.getElementById("alpha-select");
selectOrder.addEventListener("change",() => {
    if(selectOrder.value === "A-Z") {
        drawData(sortData(dataFilms))
    }else{
        drawData(sortData(dataFilms).reverse())
    }
    
})
//INFO DE CARTAS
const infoCard = (films) => {
    return  `
    <section class="container-of-films">
    <div class= "front">
    <figure class="img-card">                           
        <img alt="Poster" id="poster" class="poster" src="${films.poster}">
    </figure>
        <h2 id="title" class="card-title">${films.title}</h2>
        <h3 id="score" class="card-score">Score: ${films.rt_score}</h3>
    <div class= "back">
    <h3 id="director" class="card-director">Director: ${films.director}</h3>
    <h3 id="year" class="card-year">Realease Date: ${films.release_date}</h3>
    <h3 id="description" class="card-description">${films.description}</h3>
    </div>
    </div>
    </section> `
}

//FUNCION PARA PINTAR CARTAS
const drawData = (data) => {
   let printData = "";
    data.forEach((fileFilms) => {
        printData += infoCard(fileFilms);
    })    
    document.getElementById("root").innerHTML= printData
    }
    drawData(dataFilms);   
    
    