"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useSession } from "next-auth/react";
import { Session } from "@fcn/types";

function Dashboard() {
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
  } else if (session.user.isNewUser) {
    redirect("/welcome");
  } else {
    return <div>Dashboard</div>;
  }
}

export default Dashboard;
