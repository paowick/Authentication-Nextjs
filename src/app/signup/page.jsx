'use client'
import { signup } from './signup'
import { useFormState } from "react-dom";
import Link from "next/link";

export default function page() {
  const [state, signupAction] = useFormState(signup, { message: "" });
  return (
    <>
     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Sign Up</h2>
      <form action={signupAction}>
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
            type="text"
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
