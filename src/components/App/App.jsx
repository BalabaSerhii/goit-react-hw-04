import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { fetchImages } from "../../api";
import { SearchBar } from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import style from "./App.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(false);

    async function fetchCurrentImages() {
      try {
        const fetchedData = await fetchImages(query.split("/")[1], page);
        setImages((prevImages) => [...prevImages, ...fetchedData.results]);
        setTotal(fetchedData.total);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrentImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = async (newQuery) => {
    const qId = nanoid(5);
    setQuery(`${qId}/${newQuery}`);
    setPage(1);
    setTotal(0);
    setError(null);
    setImages([]);
  };

  const closeModal = () => {
    setModal(false);
  };
  const showModal = (url) => {
    setImgUrl(url);
    setModal(true);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onClick={showModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn addPage={handleLoadMore} />}
      <ImageModal image={imgUrl} state={modal} close={closeModal} />
    </div>
  );
}
