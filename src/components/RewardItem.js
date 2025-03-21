import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import RedeemModal from "./RedeemModal";
import "./RewardItem.css"; // Import the CSS file for styling
import gift from '../images/gift-card.png'
const RewardItem = ({ reward, points, onRedeem }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const canRedeem = points >= reward.cost;

  return (
    <>
      <Card className="reward-card">
        <CardMedia
          component="img"
          className="reward-image"
          image={gift} // Use the image path here
          alt={reward.name}
        />
        <CardContent className="reward-content">
          <Typography variant="h5" className="reward-title">
            {reward.name}
          </Typography>
          <Typography className="reward-description">
            {reward.description}
          </Typography>
          <Typography className="reward-cost">
            Cost: {reward.cost} points
          </Typography>
          <Button
            variant="contained"
            className="reward-button"
            onClick={handleOpen}
            disabled={!canRedeem}
          >
            {canRedeem ? "Redeem" : "Not Enough Points"}
          </Button>
        </CardContent>
      </Card>
      <RedeemModal
        open={modalOpen}
        handleClose={handleClose}
        reward={reward}
        onRedeem={() => {
          onRedeem();
          handleClose();
        }}
      />
    </>
  );
};

export default RewardItem;
