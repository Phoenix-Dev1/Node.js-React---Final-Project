import axios from 'axios';

// Gets all the bins list
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

// Delete a bin by id
export const deleteBin = async (id) => {
  try {
    const res = await axios.delete(`/bins/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

// Adds new bin to the db and update frontend
export const addBin = async (bin) => {
  try {
    const res = await axios.post('/bins', bin);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// Update Bin by id
export const updateBin = async (bin) => {
  try {
    const res = await axios.put(`/bins/${bin.id}`, bin);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// formatting the date for client side
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB');
};
