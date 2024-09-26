"use client";
import React, { useState } from "react";
import { Edituseraction } from "./Edituseraction";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function Edituser({ user }) {
  const { data: session, status } = useSession();
  const router = useRouter();
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
    Edituseraction(formData);
  };

  return (
    <>
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
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            disabled
          />
        </div>

        <button type="submit">Update</button>
      </form>

      <button onClick={() => {router.push(`/profile/changepassword/${session.user.id}`)}}>Change Password</button>
    </>
  );
}
