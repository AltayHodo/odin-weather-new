const api_key = 'A8G5LVT4HDC7PZBZNVLBM5D89';

async function getData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${api_key}`,
      { mode: 'cors' }
    );
    const json =  await response.json()
    const dataInfo = {
      location: json.resolvedAddress,
      condition: json.currentConditions.conditions,
    }
    return dataInfo;

  } catch (error) {
    alert(error);
  }
}


export { getData };