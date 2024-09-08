"use client";
import React from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
import { signin } from "./signin";

export default function page() {
  const [state, signinAction] = useFormState(signin, { message: "" });
  return (
    <>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <h2>Sign In</h2>
        <form action={signinAction}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
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
          <p aria-live="polite">{state?.message}</p>
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
