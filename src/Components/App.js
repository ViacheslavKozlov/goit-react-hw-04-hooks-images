import { useEffect, useState } from "react";
import { getImages } from "../API/Api";
import Spinner from "./loader/Loader";
import SearchBar from "./searchBar/SearchBar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import style from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchImage, setSearchImage] = useState(null);
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);

  useEffect(
    () => {
      if (!searchImage) return;
      async function get() {
        try {
          setStatus("pending");
          const gallery = await getImages(searchImage, page);
          setStatus("resolved");

          if (searchImage.trim() === "" || gallery.length === 0) {
            return console.log(alert(`there r no images`));
          }

          setImages([...images, ...gallery]);

          if (page > 1)
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth"
            });
        } catch (err) {
          setStatus("rejected");
          return console.log(alert(`this is the end`));
        }
      }
      get();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchImage, page]
  );

  const handleSubmit = searchImage => {
    setSearchImage(searchImage);
    setPage(1);
    setImages([]);
  };

  const handleloadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const toggleModal = imageURL => {
    setShowModal(!showModal);
    setSelectedImage(imageURL);
  };

  return (
    <>
      <div className={style.App}>
        <SearchBar onSubmit={handleSubmit} />
        {status === "pending" && <Spinner />}
        <ImageGallery images={images} onClick={toggleModal} />
        {images.length >= 1 && <Button onClick={handleloadMore} />}
        {showModal && <Modal onClick={toggleModal} scr={selectedImage} alt={selectedImage} />}
      </div>
    </>
  );
}
