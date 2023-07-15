import React, { useState, useEffect } from 'react';
import {
  fetchBins,
  addBin,
  deleteBin,
  updateBin,
  formatDate,
} from '../../utils/BinsUtils';
import AddUpdateForm from '../../components/AddUpdateForm/AddUpdateForm';
import Button from '../../components/button/Button';
import classes from './RecycleBinsLocations.module.css';

function RecycleBinsLocations() {
  const [bins, setBins] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);
  const [selectedBin, setSelectedBin] = useState(null);

  // Fetching all bins
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBins();
      setBins(data);
    };

    fetchData();
  }, [bins]); // if bins change the data will be fetched again

  // Deleting a bin
  const handleDelete = async (id) => {
    const confirmation = window.confirm(
      `Are you sure you want to delete bin: ${id}?`
    );

    if (confirmation) {
      try {
        await deleteBin(id);
        setBins((prevBins) => prevBins.filter((bin) => bin.id !== id));
        console.log('Bin deleted successfully!');
      } catch (error) {
        console.error('Error deleting bin:', error);
      }
    }
  };

  // Add or Update a bin
  const handleSubmit = async (bin) => {
    try {
      if (bin.id) {
        await updateBin(bin);
        setBins((prevBins) => prevBins.map((b) => (b.id === bin.id ? bin : b)));
        console.log('Bin updated successfully!');
      } else {
        const data = await addBin(bin);
        setBins((prevBins) => [...prevBins, data]);
        console.log('Bin added successfully!');
      }
      exitUpdateMode();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Enter update mode
  const enterUpdateMode = (bin) => {
    setUpdateMode(true);
    setSelectedBin(bin);
  };

  // Exit update mode
  const exitUpdateMode = () => {
    setUpdateMode(false);
    setSelectedBin(null);
  };

  return (
    <main className={classes.container}>
      <h1>Bins Locations</h1>
      <AddUpdateForm
        bin={selectedBin}
        onSubmit={handleSubmit}
        exitUpdateMode={exitUpdateMode}
      />
      {bins.length === 0 ? (
        <p>No bins found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>City</th>
              <th>Type</th>
              <th>Last Modified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bins.map((bin) => (
              <tr key={bin.id}>
                <td>{bin.id}</td>
                <td>{bin.address}</td>
                <td>{bin.city}</td>
                <td>{bin.type}</td>
                <td>{formatDate(bin.last_modified)}</td>
                <td>
                  <div className={classes.buttonMargin}>
                    <Button name="Update" fun={() => enterUpdateMode(bin)}>
                      Update
                    </Button>
                    <Button name="Delete" fun={() => handleDelete(bin.id)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default RecycleBinsLocations;
