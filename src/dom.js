import { getData } from './api';

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', searchValue);
let isFahrenheit = true;
let currentObj;

const toggleTempButton = document.querySelector('.toggle-temp');
toggleTempButton.addEventListener('click', toggleTemp);

function toggleTemp() {
  const f = document.querySelector('.fahrenheit');
  const c = document.querySelector('.celsius');
  if (isFahrenheit) {
    f.classList.remove('active');
    c.classList.add('active');
    isFahrenheit = false;
  } else {
    c.classList.remove('active');
    f.classList.add('active');
    isFahrenheit = true;
  }
  updateUI()
}

async function searchValue() {
  try {
    const location = document.querySelector('#search-input').value;
    const dataObj = await getData(location);
    if (dataObj) {
      currentObj = dataObj
      updateUI();
    }
  } catch (error) {
    alert('Failed to fetch weather data. Please try again.');
  }
}

function updateUI() {
  const cityName = document.querySelector('.city-name');
  const currentCondition = document.querySelector('.current-condition');
  const currentTemp = document.querySelector('.current-temp');
  const feelsLike = document.querySelector('.feels-like');
  cityName.textContent = currentObj.location;
  currentCondition.textContent = currentObj.condition;
  if (isFahrenheit) {
    currentTemp.textContent = `Current temperature: ${currentObj.currentTempF}°`;
    feelsLike.textContent = `Feels like: ${currentObj.feelsLikeF}°`;
  } else {
    currentTemp.textContent = `Current temperature: ${currentObj.currentTempC}°`;
    feelsLike.textContent = `Feels like: ${currentObj.feelsLikeC}°`;
  }
}

export { searchValue };
