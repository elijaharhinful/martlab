import { Gallery } from "@/components/sections/Gallery";

export const metadata = {
  title: "Gallery - Martlab",
  description: "Explore our collection of moments and highlights from our various projects and events.",
};

export default function GalleryPage() {
  return (
    <main className="flex flex-col grow bg-glow">
      <Gallery />
    </main>
  );
}
