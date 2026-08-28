"use client";

import { useState } from "react";
import Image from "next/image";
import { MasonryPhotoAlbum, RenderImageContext, RenderImageProps } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { photos } from "@/lib/photos";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  // @ts-ignore - photo contains our custom image object
  const staticImage = photo.image;

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={staticImage || photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={staticImage && staticImage.blurDataURL ? "blur" : undefined}
      />
    </div>
  );
}

export function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-24 bg-navy-light/30 border-t border-white/5 relative z-10" id="gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <div className="max-w-4xl mx-auto text-slate-400 space-y-4 text-lg leading-relaxed">
            <p>
              Explore our collection of moments and highlights from our various projects and events.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <MasonryPhotoAlbum
            photos={photos}
            spacing={10}
            render={{ image: renderNextImage }}
            defaultContainerWidth={1200}
            onClick={({ index }) => setIndex(index)}
          />
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </section>
  );
}
