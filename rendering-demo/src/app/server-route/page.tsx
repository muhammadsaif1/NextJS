import { ImageSlider } from "@/components/image-slider";
import { serverSideFunction } from "@/utils/server-utils";
import React from "react";

export default function ServerRoute() {
  console.log("Server route rendered");

  const result = serverSideFunction();
  return (
    <div>
      <h1>ServerRoute</h1>
      <p>{result}</p>
      <ImageSlider />
    </div>
  );
}
