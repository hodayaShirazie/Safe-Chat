import { useState } from "react";
import { FaFlag } from "react-icons/fa"; // npm install react-icons
import ChatGame from "../ChatGame/ChatGame"; // Import the ChatGame component
import PropTypes from 'prop-types'; // Import PropTypes
import "./RedFlagStyles.css"; // Custom styles

function RedFlagChatPage({ handleStartNewGame, isAuthenticated }) {
  const [pressCount, setPressCount] = useState(0);
  const [showChat, setShowChat] = useState(false);

  if (!isAuthenticated) {
    return <div>You need to log in to access this page.</div>; // Redirect or display an error
  }

  const handlePress = () => {
    setPressCount((prev) => prev + 1);
    if (pressCount + 1 === 3) {
      setShowChat(true); // Display the ChatGame after pressing 3 times
      handleStartNewGame(); // Start a new game
    }
  };

  return (
    <div className="red-flag-chat-page">
      {/* Red Flag button */}
      <div className="red-flag-button" onClick={handlePress}>
        <FaFlag
          style={{
            color: "red",
            fontSize: "50px",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Chat Game in the center */}
      <div className="chat-game-container">
        {showChat && <ChatGame />}
      </div>
    </div>
  );
}

// PropTypes validation
RedFlagChatPage.propTypes = {
  handleStartNewGame: PropTypes.func.isRequired, // handleStartNewGame should be a function
  isAuthenticated: PropTypes.bool.isRequired,    // isAuthenticated should be a boolean
};

export default RedFlagChatPage;
