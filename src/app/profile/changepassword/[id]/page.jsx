"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { changepassword } from "./changepassword";
import { useSession } from "next-auth/react";
export default function Changepassword() {
  const { data: session, status } = useSession();
  const [state, Action] = useFormState(changepassword, { message: "" });
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confrimpassword, setConfrimPassword] = useState("");
  async function submitHandler() {
    Action({ id: session.user.id, oldpassword, newpassword, confrimpassword });
  }
  return (
    <div>
      <h2>Change Password</h2>
      <form action={submitHandler}>
        <div>
          <label>Old Password:</label>
          <input
            type="password"
            value={oldpassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Confirm New Password:</label>
          <input
            type="password"
            value={confrimpassword}
            onChange={(e) => setConfrimPassword(e.target.value)}
            required
          />
        </div>
        <p aria-live="polite">{state?.message}</p>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}
