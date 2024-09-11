'use client'
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [email,setEmail] = useState('')
  return (
    <>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <h2>Sign Up</h2>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
         <button
          type="button"
          onClick={() => signIn('email',{ callbackUrl: '/',email: email})}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
            width="20"
            height="20"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
          Send to email
        </button>
        <div style={{ marginTop: "20px" }}>
          <p>
            Already have an account? <Link href="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
}
