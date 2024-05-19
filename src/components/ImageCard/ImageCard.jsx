import s from "./ImageCard.module.css";

export const ImageCard = ({ item: { urls, alt_description } }) => {
  return (
    <img className={s.galleryImage} src={urls.small} alt={alt_description} />
  );
};
