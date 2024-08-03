"use client";

import dynamic from "next/dynamic";
import React from "react";

const DotLottieAnimation = dynamic(
  () => import("@/components/DotLottieAnimation"),
  {
    ssr: false,
  }
);

export default function Home() {
  return <DotLottieAnimation />;
}
