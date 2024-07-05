// Helper function to handle API requests
const fetchAPI = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(`Fetched data from ${url}:`, data); // Logging the fetched data
      return data;
    } catch (error) {
      console.error(`Failed to fetch data from ${url}:`, error);
      throw error;
    }
  };
  
  // Get all people
  export const getSWPeople = async () => {
    const url = "https://www.swapi.tech/api/people";
    const data = await fetchAPI(url);
    console.log('Fetched all people:', data); // Logging fetched people data
    return data;
  };
  
  
  // Get all planets
  export const getSWPlanets = async () => {
    const url = "https://www.swapi.tech/api/planets";
    const data = await fetchAPI(url);
    console.log('Fetched all planets:', data); // Logging fetched planets data
    return data;
  };
  
  // Get all vehicles
  export const getSWVehicles = async () => {
    const url = "https://www.swapi.tech/api/vehicles";
    const data = await fetchAPI(url);
    console.log('Fetched all vehicles:', data); // Logging fetched vehicles data
    return data;
  };
  
  // Get a single vehicle by ID
  export const getSWSingleVehicle = async (id) => {
    const url = `https://www.swapi.tech/api/vehicles/${id}`;
    const data = await fetchAPI(url);
    console.log(`Fetched vehicle with ID ${id}:`, data); // Logging fetched vehicle data
    return data;
  };