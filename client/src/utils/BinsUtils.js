import axios from 'axios';

export const fetchBins = async () => {
  try {
    const response = await fetch('/bins');
    const data = await response.json();
    const sortedData = data.sort((a, b) => a.type - b.type); // Sort the data by type
    return sortedData;
  } catch (error) {
    console.error('Error fetching bins:', error);
    throw error;
  }
};

export const deleteBin = async (id) => {
  try {
    const res = await axios.delete(`/bins/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const addBin = async (bin) => {
  try {
    const res = await axios.post('/bins', bin);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateBin = async (bin) => {
  try {
    const res = await axios.put(`/bins/${bin.id}`, bin);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB');
};
