import React from "react";
import RewardList from "./RewardList"; // Import your RewardList component
import { Button, Typography, Container } from "@mui/material";
import "./Dashboard.css"; // Import the CSS file for styling
import Logout from "./Logout"; // Import the Logout component
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks
import { useAuth } from "../context/AuthContext"; // Import your Auth context
import { completeActivity, earnPoints } from "../redux/actions"; // Import your actions

const Dashboard = () => {
    const { isAuthenticated } = useAuth(); // Get authentication status from context

    // Access points from Redux state and dispatch function at the top level
    const points = useSelector((state) => state.points); // Assuming you have points in your Redux state
    const dispatch = useDispatch(); // Get the dispatch function

    // If the user is not authenticated, show a message
    if (isAuthenticated) {
        return (
            <Container style={{ marginTop: "50px" }}>
                <Typography variant="h5">You are not logged in.</Typography>
            </Container>
        );
    }

    // Function to earn points
    const handleEarnPoints = () => {
        dispatch(earnPoints(10)); // Example: Earn 10 points
    };

    // Function to complete an activity
    const handleCompleteActivity = (activityId, points) => {
        dispatch(completeActivity(activityId, points));
    };

    return (
        <Container className="dashboard-container">
            <Typography variant="h4" className="dashboard-title">
                Rewards Dashboard
            </Typography>
            <Typography className="points-display">Points: {points}</Typography>
            <Button
                variant="contained"
                className="earn-points-button"
                onClick={handleEarnPoints}
            >
                Earn 10 Points
            </Button>
            <div className="daily-tasks">
                <Button
                    variant="contained"
                    className="complete-activity-button activity-button"
                    onClick={() => handleCompleteActivity(1, 15)}
                >
                    Complete Task (15 Points)
                </Button>
                <Button
                    variant="contained"
                    className="complete-activity-button activity-button"
                    onClick={() => handleCompleteActivity(2, 5)}
                >
                    Daily Login Streak (5 Points)
                </Button>
                <Button
                    variant="contained"
                    className="complete-activity-button activity-button"
                    onClick={() => handleCompleteActivity(3, 30)}
                >
                    Create Content (30 Points)
                </Button>
                <Button
                    variant="contained"
                    className="complete-activity-button activity-button"
                    onClick={() => handleCompleteActivity(4, 10)}
                >
                    Engage with Community (10 Points)
                </Button>
            </div>
            <RewardList /> {/* Render the RewardList component */}
            <Logout /> {/* Render the Logout button */}
        </Container>
    );
};

export default Dashboard;