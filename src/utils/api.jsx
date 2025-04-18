// src/utils/api.js

const API_KEY = '08279ee4d46247de9394c0c609527dc7'; // replace with your real API key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchCityNews = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/everything?q=${city}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.articles)
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
