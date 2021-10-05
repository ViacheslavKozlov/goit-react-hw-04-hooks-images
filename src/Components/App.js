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

// class App extends Component {
//   state = {
//     images: [],
//     page: 1,
//     selectedImage: null,
//     searchImage: null,
//     status: "idle",
//     error: null,
//     showModal: false
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const { searchImage, page } = this.state;
//     if (prevState.searchImage !== searchImage || prevState.page !== page) {
//       try {
//         this.setState({ status: "pending" });
//         const gallery = await getImages(searchImage, page);
//         this.setState({ status: "resolved" });
//         if (searchImage.trim() === "" || gallery.length === 0) {
//           return console.log(alert(`there r no images`));
//         }

//         this.setState({ images: [...this.state.images, ...gallery] });

//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: "smooth"
//         });
//       } catch (err) {
//         this.setState({ status: "reject" });
//         console.log(alert(`this is the end`));
//       }
//     }
//   }

//   handleSubmit = searchImage => {
//     this.setState({ searchImage: searchImage, page: 1, images: [] });
//   };

//   handleloadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   toggleModal = imageURL => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//       selectedImage: imageURL
//     }));
//   };

//   render() {
//     const { images, status, showModal, selectedImage } = this.state;
//     const showLoadmoreBtn = images.length >= 1;

//     return (
//       <>
//         <div className={style.App}>
//           <SearchBar onSubmit={this.handleSubmit} />
//           {status === "pending" && <Spinner />}
//           <ImageGallery images={images} onClick={this.toggleModal} />
//           {showLoadmoreBtn && <Button onClick={this.handleloadMore} />}
//           {showModal && <Modal onClick={this.toggleModal} scr={selectedImage} alt={selectedImage} />}
//         </div>
//       </>
//     );
//   }
// }

// export default App;
