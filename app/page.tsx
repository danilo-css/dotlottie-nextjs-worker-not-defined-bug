"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DotLottieReact src="/notfound.lottie" loop autoplay />
      <div
        style={{
          position: "absolute",
          color: "black",
          fontWeight: "bold",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "13px",
        }}
      >
        Lottie animation
      </div>
    </div>
  );
}
