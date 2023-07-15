import React, { useState, useEffect } from 'react';
import {
  fetchBins,
  addBin,
  deleteBin,
  updateBin,
  formatDate,
} from '../../utils/BinsUtils';
import BinForm from '../../components/binForm/BinForm';
import UpdateForm from '../../components/updateForm/UpdateForm';
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
  }, []);

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

  // Add a bin
  const handleAddBin = async (bin) => {
    try {
      const data = await addBin(bin);
      setBins((prevBins) => [...prevBins, data]);
      console.log('Bin added successfully!');
    } catch (error) {
      console.error('Error adding bin:', error);
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

  // Update a bin
  const handleUpdate = async (updatedBin) => {
    try {
      await updateBin(updatedBin);
      setBins((prevBins) =>
        prevBins.map((bin) => (bin.id === updatedBin.id ? updatedBin : bin))
      );
      console.log('Bin updated successfully!');
      exitUpdateMode();
    } catch (error) {
      console.error('Error updating bin:', error);
    }
  };

  return (
    <main className={classes.container}>
      <h1>Bins Locations</h1>
      {updateMode ? (
        <UpdateForm
          bin={selectedBin}
          onSubmit={handleUpdate}
          exitUpdateMode={exitUpdateMode}
        />
      ) : (
        <BinForm onSubmit={handleAddBin} />
      )}
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
