import {filterData, sortData}  from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

const dataFilms = data.films

filterData(dataFilms) 
sortData(dataFilms)

const drawData = (data) => {
    /**
     * proceso
     * 
     */
}
drawData(dataFilms)



<<<<<<< HEAD
let resultado = filterData(data) 
console.log(resultado)


let filmVista = document.getElementById("btn-2");
filmVista.addEventListener("click", filmVista);
function filmVista(): {
  document.getElementById("btn-1").style.display = "none";
  document.getElementById("btn-3").style.display = "block";
}
=======
>>>>>>> f020d552082820f3adc6d6ab845339f5668b382e
