import { EARN_POINTS, REDEEM_POINTS, COMPLETE_ACTIVITY } from './actions';

const initialState = {
  points: 0,
  rewards: [
    { id: 1, name: 'Gift Card', cost: 100, image: 'path/to/image1.jpg', description: 'A gift card for your favorite store.' },
    { id: 2, name: 'Discount Coupon', cost: 50, image: 'path/to/image2.jpg', description: 'A coupon for a discount on your next purchase.' },
    { id: 3, name: 'Free Shipping', cost: 30, image: 'path/to/image3.jpg', description: 'Free shipping on your next order.' },
  ],
  activityHistory: [],
};

const rewardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EARN_POINTS:
      return { ...state, points: state.points + action.payload };
    case REDEEM_POINTS:
      const reward = state.rewards.find(r => r.id === action.payload);
      if (reward && state.points >= reward.cost) {
        return { ...state, points: state.points - reward.cost };
      }
      return state;
    case COMPLETE_ACTIVITY:
      return {
        ...state,
        points: state.points + action.payload.points,
        activityHistory: [...state.activityHistory, action.payload],
      };
    default:
      return state;
  }
};

export default rewardsReducer;