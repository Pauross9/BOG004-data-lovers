// estas funciones son de ejempl
export default function filterData(data) {
    const filterData = data.films.filter(movies => (parseInt(movies.release_date)));
    return filterData;

}