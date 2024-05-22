import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customParams = {
  overlay: {
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    border: "none",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
  },
};

export default function ImageModal({ image, state, close }) {
  return (
    <Modal
      isOpen={state}
      onRequestClose={close}
      className={css.modal}
      style={customParams}
    >
      <img className={css.modalImg} src={image} />
    </Modal>
  );
}
