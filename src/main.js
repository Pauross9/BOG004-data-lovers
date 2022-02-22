import filterData  from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/ghibli/ghibli.js';


let resultado = filterData(data) 
console.log(resultado)


let filmVista = document.getElementById("btn-2");
filmVista.addEventListener("click", filmVista);
function filmVista(): {
  document.getElementById("btn-1").style.display = "none";
  document.getElementById("btn-3").style.display = "block";
}