const api_key = 'A8G5LVT4HDC7PZBZNVLBM5D89';

async function getData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${api_key}`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    const dataInfo = {
      location: json.resolvedAddress,
      condition: json.currentConditions.conditions,
      currentTemp: json.currentConditions.temp,
      feelsLike: json.currentConditions.feelslike,
    };
    return dataInfo;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}

export { getData };
