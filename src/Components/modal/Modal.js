import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import style from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");
export default function Modal({ scr, alt, onClick }) {
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  const handleEsc = evt => evt.code === "Escape" && onClick();

  const handleBackdropClick = evt => evt.currentTarget === evt.target && onClick();

  return createPortal(
    <div className={style.Overlay} onClick={handleBackdropClick}>
      <div className={style.Modal}>
        <img src={scr} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
}

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleEsc);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleEsc);
//   }

//   handleEsc = evt => evt.code === "Escape" && this.props.onClick();

//   handleBackdropClick = evt => evt.currentTarget === evt.target && this.props.onClick();

//   render() {
//     return createPortal(
//       <div className={style.Overlay} onClick={this.handleBackdropClick}>
//         <div className={style.Modal}>
//           <img src={this.props.scr} alt={this.props.alt} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

Modal.propTypes = {
  handleEsc: PropTypes.func,
  handleBackdropClick: PropTypes.func
};

// export default Modal;
