import img1 from "../../public/images/gallery/gallery1.jpeg";
import img2 from "../../public/images/gallery/gallery2.jpeg";
import img3 from "../../public/images/gallery/gallery3.jpeg";
import img4 from "../../public/images/gallery/gallery4.jpeg";
import img5 from "../../public/images/gallery/gallery5.jpeg";
import img6 from "../../public/images/gallery/gallery6.jpeg";
import img7 from "../../public/images/gallery/gallery7.jpeg";
import img8 from "../../public/images/gallery/gallery8.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export const photos = images.map((img) => ({
  src: img.src,
  width: img.width,
  height: img.height,
  image: img,
}));
