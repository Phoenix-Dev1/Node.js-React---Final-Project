import axios from 'axios';

export async function fetchBins() {
  //console.log(id);
  try {
    const res = await axios.get(`/bins`);
    //console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

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
