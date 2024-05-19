import Modal from "react-modal";
Modal.setAppElement("#root");
import style from "./ImageModal.module.css";

export const ImageModal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  item: { urls, alt_description, description },
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      className={style.modal}
      overlayClassName={style.backdrop}
    >
      <div className={style.container}>
        <img
          className={style.image}
          src={urls.regular}
          alt={alt_description}
          width="600"
        />
        <p className={style.desc}>{description}</p>
      </div>
    </Modal>
  );
};
