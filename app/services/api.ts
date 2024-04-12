const API_URL = "https://swapi.dev/api/";

export const fetchPlanets = async () => {
  const response = await fetch(`${API_URL}planets/`);
  const data = await response.json();
  console.log(data);
  return data.results;
};
