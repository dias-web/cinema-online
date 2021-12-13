const API_KEY = 'ae79c21a15112e056418d9c664b49e87';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

// trending/all/day?api_key=<<api_key>>

const getData = url => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw `Что-то пошло не так, ошибка ${response.status}`
  })
  .catch(err => console.error(err));;


export const getTriends = async (type = 'all', period = 'week', page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);

}