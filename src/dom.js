import { getData } from './api';


const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', searchValue);

async function searchValue() {
  try{
    const location = document.querySelector('#search-input').value;
    const dataObj = await getData(location);
    console.log(dataObj);
    updateUI(dataObj);
  }
  catch(error){
    alert(error);
  }
}

function updateUI(dataObj){
  const cityName = document.querySelector('.city-name');
  const currentCondition = document.querySelector('.current-condition');
  cityName.textContent = dataObj.location
  currentCondition.textContent = dataObj.condition;
}

export { searchValue };
