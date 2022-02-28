// estas funciones son de ejempl
export function filterData(data,director) {
  const filterData = data.filter((movies) => movies.director === director);
  return filterData;
}


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
