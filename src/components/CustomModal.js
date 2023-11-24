import React, { useState } from 'react';
import {
  Button,
  Modal,
  Typography,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: "90%",
    height: "90vh",
    backgroundColor:"rgb(249 249 249)",
    padding: theme.spacing(2),
    outline: 'none',
    position: 'relative',
    borderRadius:"10px"
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

const CustomModal = ({ isOpen, onClose,rocketsDetails }) => {
  const classes = useStyles();

  console.log ("aaaaaaaaaaa563",rocketsDetails?.name);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      className={classes.modal}
    >
      <div className={classes.modalContent}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom>
            <div className="rocket-details">
        <div className="rocket-header">
          <h3 className="rocket-title">{rocketsDetails?.name}</h3>
          <img
            className="box-img"
            src={rocketsDetails?.flickr_images?.[1]}
            alt="Image 1"
          />
        </div>
        <div className="rocket-description">
            <h>Description</h>
            <p3>{rocketsDetails?.description}</p3>
        </div>
        </div>
        </Typography>
       
      </div>
    </Modal>
  );
};

// Example usage
// const App = ({dataFromParent}) => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   console.log ("aaaaaaaaaaa563444",dataFromParent);
//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleOpenModal}>
//         Open Modal
//       </Button>
//       <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} />
//     </div>
//   );
// };

export default CustomModal;
