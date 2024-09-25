"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    console.log(session);

    if (status === "unauthenticated") {
      router.push("/signin");
    }
    if (session?.user.name === null) {
      router.push("/userinit");
    }
  }, [status, router, session]);

  // When after loading success and have session, show profile
  return (
    status === "authenticated" &&
    session.user && (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "gray",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <img
              src={session.user.image}
              style={{
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
          <p>
            Welcome, <b>{session.user.name}!</b>
          </p>
          <p>Email: {session.user.email}</p>
          <p>Role: {session.user.role}</p>
          <button
            onClick={() => router.push(`/profile/edit/${session.user.id}`)}
            style={{
              width: "100%",
              backgroundColor: "#3B82F6",
              color: "white",
              padding: "8px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
          <button
            onClick={() => signOut({ callbackUrl: "/signin" })}
            style={{
              width: "100%",
              backgroundColor: "#3B82F6",
              color: "white",
              padding: "8px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
}
