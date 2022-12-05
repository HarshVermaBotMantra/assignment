import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { Portal } from "./Portal";
import Slide from "@mui/material/Slide";

const style = {
  position: "absolute",
  top: "63%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  padding: "0",
  border: "none",
};

const modalStyle = {
  minHeight: "100%",
  overflow: "scroll",
  display: "block",
};

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const BasicModal = (props) => {
  const { open, handleClose } = props;

  //   const dispatch = useDispatch();
  //   const { alertType, alertMessage, alertOpen } = useSelector(
  //     (state) => state.sessionScheduler
  //   );

  const handleCloseModal = () => {
    handleClose();
  };

  //   const handleAlert = (e) => {
  //     e.stopPropagation();
  //     dispatch(setAlert({ type: "", open: false, message: "" }));
  //   };

  return (
    <Portal>
      <div>
        <Modal open={open} onClose={handleClose} sx={modalStyle}>
          <div
            style={{ height: "550px", position: "relative" }}
            onClick={() => handleCloseModal()}
          >
            <Box sx={style} onClick={(e) => e.stopPropagation()}>
              {props.children}
            </Box>
          </div>
        </Modal>
      </div>
    </Portal>
  );
};

export default BasicModal;
