import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
//===============================================

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

// {/* ===================================== */}
// {/* THIS IS HOW IT CAN BE DONE WITHOUT USING PORTALS ,THE BELLOW COMPONENTS SHOULD BE PLACE INBETWEEN <FRAGMENT>*/}

// {/* <Backdrop />
// <ModalOverlay>{props.children}</ModalOverlay> */}
// {/*
// =======================================       */}
