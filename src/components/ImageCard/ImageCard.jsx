
import css from "./ImageCard.module.css";

export function ImageCard({ img, onClick }) {
  if (!img || !img.urls) {
    return null;
  }

  return (
    <div onClick={() => onClick(img.urls.full)}>
      <img src={img.urls.small} alt={img.alt_description} className={css.galleryImage} />
    </div>
  );
}

