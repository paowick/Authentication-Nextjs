import React from 'react'
import { signup } from './actions'
import Link from "next/link";

export default function page() {
  return (
    <>
     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Sign Up</h2>
      <form action={signup}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
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

        <button type="submit" style={{ padding: "10px 20px" }}>
          Sign Up
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <p>Already have an account? <Link href="/signin">Sign In</Link></p>
      </div>
    </div>
    </>
  )
}
