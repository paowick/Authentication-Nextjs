"use client";
import React, { useState } from "react";
import { Edituseraction } from "./Edituseraction";
export default function Edituser({ user }) {
  const [formData, setFormData] = useState({
    name: user.name,
    role: user.role,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Form data submitted:", formData);
    Edituseraction(formData,user.id)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <button type="submit">Update User</button>
    </form>
  );
}
