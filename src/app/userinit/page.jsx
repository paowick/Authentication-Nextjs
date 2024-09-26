'use client'
import React from "react";
import { useFormState } from "react-dom";
import { userinit } from "./userinit";
import { signOut } from "next-auth/react";


export default function page() {
  const [state, Action] = useFormState(userinit, { message: "" });
  return (
    <>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <h2>setup account</h2>
        <form action={Action}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="password"
              name="confirmpassword"
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <p aria-live="polite">{state?.message}</p>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Comfrim
          </button>
        </form>
      </div>
    </>
  );
}
