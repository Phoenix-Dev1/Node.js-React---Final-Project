import React, { useState } from 'react';
import Button from '../button/Button';
import classes from './UpdateForm.module.css';

const UpdateForm = ({ bin, onSubmit, exitUpdateMode }) => {
  const [address, setAddress] = useState(bin.address);
  const [city, setCity] = useState(bin.city);
  const [type, setType] = useState(bin.type);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString(); // Get the current date
    onSubmit({ id: bin.id, address, city, type, last_modified: currentDate });
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value={1}>Blue</option>
        <option value={2}>Carton</option>
        <option value={3}>Electronic-waste</option>
        <option value={4}>Orange</option>
        <option value={5}>Purple</option>
        <option value={6}>Textile</option>
      </select>
      <Button name="Update Bin" fun={handleSubmit} />
      <Button name="Cancel" fun={exitUpdateMode} />
    </div>
  );
};

export default UpdateForm;