"use client";
import { useSession } from "next-auth/react";
import { Session } from "@fcn/types";
import { redirect } from "next/navigation";
import React from "react";

function Welcome() {
  const {
    data: session,
    status,
  }: {
    data: Session;
    status: "loading" | "authenticated" | "unauthenticated";
  } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (!session) {
    redirect("/signin");
  } else if (!session.user.isNewUser) {
    redirect("/dashboard");
  } else {
    return <div>Welcome</div>;
  }
}

export default Welcome;
