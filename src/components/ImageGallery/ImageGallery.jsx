///////////////////////////////////////////
import { ImageCard } from "../ImageCard/ImageCard";

///////////////////////////////////////////
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={css.gallery}>
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard img={img} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
