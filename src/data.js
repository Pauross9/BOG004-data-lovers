//FILTRA POR DIRECTOR 
export function filterData(data,director) {
  const filterData = data.filter((movies) => movies.director === director);
  return filterData;
}
export function filterFilm(data,search) {
  const filterFilms = data.filter((element) => (element.title).toLowerCase().includes((search).toLowerCase()));
  console.log("hola",filterFilms)
  return filterFilms;

  
}
//ORDENA DE LA A-Z 
export const sortData = (orderData) => {
  const resultData = orderData.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    } 
    
      return 0;
    
  });
  return resultData;
}
