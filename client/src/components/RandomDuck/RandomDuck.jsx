// import { useContext } from 'react';
// import styles from './RandomDuck.module.css';
// import { DuckContext } from '../../context/DuckContext';
// import FirstButton from '../common/FirstButton/FirstButton.jsx';

// const apiUrl = import.meta.env.VITE_SERVER_API_URL;

// const RandomDuck = () => {
//   const { duck, getRandomDuck } = useContext(DuckContext);

//   if (!duck) return null;

//   return (
//     <div className={styles.container}>
//       <FirstButton onClick={getRandomDuck}>Show Random Duck</FirstButton>
//       {
//         <div className={styles.duck}>
//           <h2 className={styles.duckName}>{duck.name}</h2>
//           {
//             <img
//               src={`${apiUrl}${duck.imageUrl}`}
//               alt={duck.name}
//               className={styles.img}
//             />
//           }
//         </div>
//       }
//     </div>
//   );
// };

// export default RandomDuck;


import { useContext } from "react";
import styles from "./RandomDuck.module.css";
import { DuckContext } from "../../context/DuckContext";
import FirstButton from "../common/FirstButton/FirstButton.jsx";
import ChatGame from "../ChatGame/ChatGame";  // Import the ChatGame component

const RandomDuck = () => {
  const { startNewGame, isGameActive } = useContext(DuckContext);

  // Handle the click event for starting a new game
  const handleStartNewGame = () => {
    startNewGame();  // Reset the game state
  };

  return (
    <div className={styles.container}>
      {!isGameActive ? (
        <>
          <FirstButton onClick={handleStartNewGame}>Start New Game</FirstButton>  {/* Button to start the game */}
        </>
      ) : (
        <ChatGame />  // Render the ChatGame component when the game is active
      )}
    </div>
  );
};

export default RandomDuck;