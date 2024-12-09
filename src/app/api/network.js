import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    console.log('Fetch attempt finished'); // Optional finally block
  }
};

export const postData = async (id) => {
  try {
    const response = await axios.post(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    console.log('Fetch attempt finished'); // Optional finally block
  }
};


