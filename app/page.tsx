"use client";
import Image from "next/image";
import Velkommen from "../components/content/Velkommen";
import Fokus from "../components/content/Fokus";
import Header from "@/components/content/header";
import ImageCarousel from "@/components/content/imageCarousel";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <Velkommen />
        <ImageCarousel />
      </div>
      <div className="mt-5">
        <Fokus />
      </div>
    </div>
  );
}
