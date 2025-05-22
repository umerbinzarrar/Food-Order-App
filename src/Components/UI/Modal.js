import ReactDom from "react-dom";
import classes from './Modal.module.css';
import { Fragment } from "react/jsx-runtime";

function Backdrop(props) {
    return <div className={classes.backdrop} />

}

function ModalOverlay(props) {
    return <div className={classes.modal}>
        <div className={classes.content} > {props.children} </div>
    </div>

}



const portalPlace = document.getElementById('overlays');
function Modal(props) {
    return (



        <Fragment>
            {ReactDom.createPortal(<Backdrop />, portalPlace)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalPlace)}
        </Fragment>
    );

}

export default Modal;