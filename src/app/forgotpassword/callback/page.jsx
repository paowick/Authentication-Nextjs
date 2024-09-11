"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { reset } from "./reset";
import { useFormState } from "react-dom";
export default function ResetPassword() {
  const [state, Action] = useFormState(reset, { message: "" });
  const searchParams = useSearchParams();
  const [newpassword, setNewPassword] = useState("");
  const [confrimpassword, setConfrimPassword] = useState("");
  async function submitHandler() {
    const email = searchParams.get("email");
    const token = searchParams.get("token");
    Action({ email, token, newpassword, confrimpassword });
  }
  return (
    <>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <h2>Reset Password</h2>
        <form action={submitHandler}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="newpassword">New Password</label>
            <input
              type="password"
              name="newpassword"
              required
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              required
              onChange={(e) => setConfrimPassword(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <p aria-live="polite">{state?.message}</p>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}
