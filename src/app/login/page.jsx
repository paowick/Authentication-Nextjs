"use client";
import React from "react";
import { login } from "./actions";

export default function page() {
  return (
    <>
      <form action={login}>
        <div>
          <label>Email or Username:</label>
          <input
            type="text"
            name="emailOrUsername"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
