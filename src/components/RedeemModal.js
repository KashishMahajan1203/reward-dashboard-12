// import React from 'react';
// import { Modal, Box, Typography, Button } from '@mui/material';
// import './RedeemModal.css'; // Import the CSS file for styling

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const RedeemModal = ({ open, handleClose, reward, onRedeem }) => {
//   const handleRedeem = () => {
//     onRedeem();
//     handleClose();
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="redeem-modal-title"
//       aria-describedby="redeem-modal-description"
//     >
//       <Box sx={style}>
//         <Typography id="redeem-modal-title" variant="h6" component="h2">
//           Redeem Reward
//         </Typography>
//         <Typography id="redeem-modal-description" sx={{ mt: 2 }}>
//           Are you sure you want to redeem the following reward?
//         </Typography>
//         <Typography variant="h6">{reward.name}</Typography>
//         <Typography>Cost: {reward.cost} points</Typography>
//         <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
//           <Button variant="contained" color="primary" onClick={handleRedeem}>
//             Confirm
//           </Button>
//           <Button variant="outlined" color="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default RedeemModal;


import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import './RedeemModal.css'; // Import the CSS file for styling

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RedeemModal = ({ open, handleClose, reward, onRedeem }) => {
  const handleRedeem = () => {
    onRedeem();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="redeem-modal-title"
      aria-describedby="redeem-modal-description"
    >
      <Box sx={style}>
        <Typography id="redeem-modal-title" variant="h6" component="h2">
          Redeem Reward
        </Typography>
        <Typography id="redeem-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to redeem the following reward?
        </Typography>
        <Typography variant="h6">{reward.name}</Typography>
        <Typography>Cost: {reward.cost} points</Typography>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={handleRedeem}>
            Confirm
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RedeemModal;