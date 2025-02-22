"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useSession } from "next-auth/react";

function Dashboard() {
  const { data: session } = useSession();
  if (!session) {
    redirect("/signin");
  }

  return <div>Dashboard</div>;
}

export default Dashboard;
