"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function ResetPassword() {
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confrimpassword, setConfrimPassword] = useState("");
  const router = useRouter();
  async function submitHandler(formData) {
    const email = searchParams.get("email");
    const token = searchParams.get("token");

    const serverResponse = await fetch("/api/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        token,
        newpassword,
        confrimpassword,
      }),
    });

    const error = await serverResponse.json()
    if(!error.isPass){
        setError(error.Msg)
    }else{
        router.push("/");
    }
    
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
          <p aria-live="polite">{error}</p>
          <button type="submit" style={{ padding: "10px 20px" }}>
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}
