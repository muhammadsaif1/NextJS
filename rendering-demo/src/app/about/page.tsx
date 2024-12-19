import { cookies } from "next/headers";
import React from "react";

export default function About() {
  const cookiesStore = cookies();
  const team = cookiesStore.get("theme");

  console.log(team);
  console.log("About server page");

  return <div>About page {new Date().toLocaleTimeString()}</div>;
}
