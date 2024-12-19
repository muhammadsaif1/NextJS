"use client";
import { serverSideFunction } from "@/utils/server-utils";
import React from "react";

export default function ClientRoute() {
  console.log("Client route rendered");

  const result = serverSideFunction();
  return (
    <div>
      <h1>ClientRoute</h1>
      <p>{result}</p>
    </div>
  );
}
