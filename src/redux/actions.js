// Action Types
export const EARN_POINTS = "EARN_POINTS";
export const COMPLETE_ACTIVITY = "COMPLETE_ACTIVITY";
export const REDEEM_POINTS = "REDEEM_POINTS"; // Add this line

// Action Creators
export const earnPoints = (points) => ({
  type: EARN_POINTS,
  payload: points,
});

export const completeActivity = (activityId, points) => ({
  type: COMPLETE_ACTIVITY,
  payload: { activityId, points },
});

// New action creator for redeeming points
export const redeemPoints = (points) => ({
  type: REDEEM_POINTS,
  payload: points,
});
