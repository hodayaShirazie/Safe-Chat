import { useContext, useState, useRef, useEffect } from "react";
import styles from "./ChatGame.module.css";
import { DuckContext } from "../../context/DuckContext";
import ScoreLevelTracker from "../../components/ScoreLevel/ScoreLevelTracker";

const ChatGame = () => {
  const {
    situations,
    currentSituationIndex,
    setCurrentSituationIndex,
    setIsGameActive,
    handleAnswer,
    score,
    startNewGame,
  } = useContext(DuckContext);

  const [chatHistory, setChatHistory] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const chatContentRef = useRef(null);

  // Scroll to the bottom whenever chat history changes
  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Seed the first question when the game starts
  useEffect(() => {
    if (situations.length > 0 && chatHistory.length === 0) {
      setChatHistory([
        { type: "received", text: situations[currentSituationIndex].text },
      ]);
    }
  }, [situations, currentSituationIndex, chatHistory.length]);

  // Prevent the game from resetting if answers do not exist
  const endGameGracefully = () => {
    if (gameEnded) return;
    console.log("end");
    setGameEnded(true);

    // Add "Game Ended" message to the chat
    setChatHistory((prev) => [
      ...prev,
      { type: "received", text: "Game Ended" },
    ]);

    // Deactivate the game, but do not reset the chat or entire component
    setIsGameActive(false);
  };

  const handleAnswerClick = (answer) => {
    setChatHistory((prev) => [...prev, { type: "self", text: answer.text }]);
    handleAnswer(answer.isCorrect);

    if (answer.nextId) {
      const nextIndex = situations.findIndex((s) => s.id === answer.nextId);
      console.log(nextIndex);
      if (nextIndex !== -1) {
        const nextText = situations[nextIndex].text;
        setTimeout(() => {
          setCurrentSituationIndex(nextIndex);
          setChatHistory((prev) => [
            ...prev,
            { type: "received", text: nextText },
          ]);
        }, 1000);
      } else {
        console.log(33);
        endGameGracefully();
      }
    } else {
        console.log(4);
      endGameGracefully();
    }
  };

  if (!situations.length) {
    return <div>Loading...</div>;
  }

  const currentSituation = situations[currentSituationIndex];

  return (
    <div className={`${styles.pageContainer} ${gameEnded ? styles.darkChat : ""}`}>
      {/* ScoreLevelTracker moved to ChatGame */}
      <ScoreLevelTracker
        currentLevel={5}
        totalLevels={5} // You can adjust the total levels here
        score={score}
      />

      <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>
          <div className={styles.profilePicture}></div>
          <div className={styles.username}>Teresa Lai</div>
        </div>

        <div className={styles.scrollableContent} ref={chatContentRef}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                message.type === "received" ? styles.received : styles.self
              }`}
            >
              {message.text}
            </div>
          ))}

          {gameEnded && (
            <div className={styles.gameOverMessage}>
              <p>Game Ended</p>
              <button className={styles.playAgainButton} onClick={startNewGame}>
                Start New Game
              </button>
            </div>
          )}
        </div>

        {/* Display answer buttons if the game is not ended and there are answers */}
        {!gameEnded && currentSituation.answers.length > 0 && (
          <div className={styles.answers}>
            {currentSituation.answers.map((answer) => (
              <button
                key={answer.id}
                className={styles.answerButton}
                onClick={() => handleAnswerClick(answer)}
              >
                {answer.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatGame;
