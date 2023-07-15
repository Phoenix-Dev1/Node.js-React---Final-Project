import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import classes from './AddUpdateForm.module.css';

const AddUpdateForm = ({ bin, onSubmit, exitUpdateMode }) => {
  const [address, setAddress] = useState(bin ? bin.address : '');
  const [city, setCity] = useState(bin ? bin.city : '');
  const [type, setType] = useState(bin ? bin.type : '');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [successMessage]);

  useEffect(() => {
    setAddress(bin ? bin.address : '');
    setCity(bin ? bin.city : '');
    setType(bin ? bin.type : '');
  }, [bin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type) {
      // Type is not selected, display an error message or handle it in your preferred way
      alert('Please select a type');
      return;
    }
    const currentDate = new Date().toISOString();
    const updatedBin = {
      id: bin ? bin.id : null,
      address,
      city,
      type,
      last_modified: currentDate,
    };
    onSubmit(updatedBin);
    setAddress('');
    setCity('');
    setType('');
    setSuccessMessage(
      bin ? 'Bin updated successfully!' : 'Bin added successfully!'
    );
  };

  const handleCancel = () => {
    exitUpdateMode();
    setAddress('');
    setCity('');
    setType('');
    setSuccessMessage('');
  };

  return (
    <div className={classes.container}>
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value={1}>Blue</option>
        <option value={2}>Carton</option>
        <option value={3}>Electronic-waste</option>
        <option value={4}>Orange</option>
        <option value={5}>Purple</option>
        <option value={6}>Textile</option>
      </select>

      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <Button name={bin ? 'Update Bin' : 'Add Bin'} fun={handleSubmit} />
      {bin && <Button name="Cancel" fun={handleCancel} />}
      {successMessage && (
        <p className={classes.successMessage}>{successMessage}</p>
      )}
    </div>
  );
};

export default AddUpdateForm;
