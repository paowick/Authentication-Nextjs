"use client";
import React from "react";
import Link from "next/link";
import { signin } from "./actions";

export default function page() {
  return (
    <>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <h2>Sign In</h2>
        <form action={signin}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="user" >Username</label>
            <input 
            type="text" 
            name="user" 
            required 
            style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <input 
            type="password" 
            name="password" 
            required 
            style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Signin
          </button>
        </form>
        <div style={{ marginTop: "20px" }}>
          Don't have an account? <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
}
