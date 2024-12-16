"use client";
import React, { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState<string>("");
  console.log("Client dashboard page");

  return (
    <div>
      <h1>Dashboard page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{`Hello ${name}!`}</p>
    </div>
  );
}
