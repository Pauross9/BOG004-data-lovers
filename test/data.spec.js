import {filterFilm,filterData,sortData} from '../src/data.js';


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

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('deberia devolver el resultado ordenado de la "Z-A"', () => {
    const data = [
      { title: "The Tale of the Princess Kaguya"},
      { title: "Castle in the Sky"},
      { title: "Princess Mononoke"},
      { title: "Porco Rosso" },
      { title: "My Neighbor Totoro" },
    
    ]
    const resultado = [
    { title: "Castle in the Sky"},
    { title: "My Neighbor Totoro" },
    { title: "Porco Rosso" },
    { title: "Princess Mononoke"},
    { title: "The Tale of the Princess Kaguya"},
    ]
    expect(sortData(data,"orden")).toEqual(resultado);
  });
 });

 it('deberia devolver el resultado ordenado de la "A-Z"', () => {
  const data = [
    { title: "The Cats Returns"},
    { title: "The Secret World of Arriety" },
    { title: "The Tale of the Princess Kaguya" },
    { title: "When Marnie Was There"},
    { title: "Whisper of the Heart"},
  ]
  const resultado = [
    { title: "Whisper of the Heart"},
    { title: "When Marnie Was There"},
    { title: "The Tale of the Princess Kaguya" },
    { title: "The Secret World of Arriety" },
    { title: "The Cats Returns"},
  ]
  expect(sortData(resultado)).toEqual(data);
});
