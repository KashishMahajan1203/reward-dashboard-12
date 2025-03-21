import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { redeemPoints } from "../redux/actions";
import RewardItem from "./RewardItem";
import { TextField, Typography } from "@mui/material";
import "./RewardList.css"; // Import the CSS file

const RewardList = () => {
  const rewards = useSelector((state) => state.rewards);
  const points = useSelector((state) => state.points);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  // Filter rewards based on the input value
  const filteredRewards = rewards.filter(
    (reward) =>
      reward.cost.toString().includes(filter) ||
      reward.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="reward-list-container">
      <Typography variant="h5" className="reward-list-title">
        Available Rewards
      </Typography>
      <TextField
        label="Filter Rewards"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />
      <div className="reward-grid">
        {filteredRewards.map((reward) => (
          <div className="reward-item" key={reward.id}>
            <RewardItem
              reward={reward}
              points={points}
              onRedeem={() => dispatch(redeemPoints(reward.id))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardList;
