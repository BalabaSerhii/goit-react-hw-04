import { useState } from "react";
///////////////////////////////////////////
import { ImageCard } from "../ImageCard/ImageCard";
import { ImageModal } from "../ImageModal/ImageModal";
///////////////////////////////////////////
import style from "./ImageGallery.module.css";

export const ImageGallery = ({ items }) => {
  //////////////Modal////////////////////////
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    document.body.style.overflow = "scroll";
    setSelectedImage(null);
    setIsOpen(false);
  };
  ////////////////\\Modal////////////////////////////
  return (
    <div>
      <ul className={style.gallery}>
        {items.map((item) => (
          <li
            className={style.listItem}
            key={item.id}
            onClick={() => openModal(item)}
          >
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
      {selectedImage && (
        <ImageModal
          isOpen={isOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          item={selectedImage}
        />
      )}
    </div>
  );
};
