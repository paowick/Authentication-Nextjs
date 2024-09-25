'use client'

import { useSession } from "next-auth/react";
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
    router.push("/profile")
  }, [status, router, session]);
  return (
    <>first page</>
    )
}
