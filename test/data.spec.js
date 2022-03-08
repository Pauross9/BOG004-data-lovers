import {filterFilm,filterData} from '../src/data.js';


describe('filterFilm', () => {
  it('is a function', () => {
    expect(typeof filterFilm).toBe('function');
  });
  

  it('deberia devolver "Princess Mononoke" y "The Tale of the Princess Kaguya" cuando se busque "Princess"', () => { 
    const data = [
      { title: "The Tale of the Princess Kaguya"},
      { title: "My Neighbor Totoro" },
      { title: "Porco Rosso" },
      { title: "Castle in the Sky"},
      { title: "Princess Mononoke"},
    ]
    const resultado = [
      { title: "The Tale of the Princess Kaguya"},
      { title: "Princess Mononoke"},  
    ]
    
    expect(filterFilm(data,"Princess")).toEqual(resultado);
  })
});


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('deberia devolver el resultado de "Isao Takahata"', () => {
    const data = [
      {director: "Hayao Miyazaki"},
      {director: "Gorō Miyazaki"},
      {director: "Hiromasa Yonebayashi"},
      {director: "Yoshifumi Kondō"},
      {director: "Isao Takahata"},
    ]
    const resultado = 
    [{director: "Isao Takahata"}]
    expect(filterData(data,"Isao Takahata")).toEqual(resultado);
  });
});

