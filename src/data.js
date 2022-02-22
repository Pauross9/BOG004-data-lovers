// estas funciones son de ejempl
export function filterData(data) {
  const filterData = data.filter((movies) => movies.director);
  return filterData;
}

export const sortData = (orderData) => {
    console.log("hola", orderData)
  const resultData = orderData.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    } 
    
      return 0;
    
  });
  //sii el orden seleccionado es de la A a la Z entonces return resulData, pero
  //si el orden es de la Z-A entonces return resulData.reverse()
  return resultData;
};
