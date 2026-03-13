"use client";

//Next
import { useState } from "react";

//Components
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  const [lightMode, setLightMode] = useState<boolean>(false);

  return (
    <div className={`${lightMode ? "bg-black" : "bg-white"} h-full`}>
      <Header lightMode={lightMode} setLightMode={setLightMode} />
      <Main lightMode={lightMode} />
      <Footer lightMode={lightMode} />
    </div>
  );
}
