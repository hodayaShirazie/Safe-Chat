import { useContext, useState, useRef, useEffect } from "react";
import styles from "./ChatGame.module.css";
import { DuckContext } from "../../context/DuckContext";
import ScoreLevelTracker from "../../components/ScoreLevel/ScoreLevelTracker"; // Import ScoreLevelTracker

const ChatGame = () => {
    const {
        situations,
        currentSituationIndex,
        isGameActive,
        handleAnswer,
        currentLevel,
        score,
    } = useContext(DuckContext); // Access score and current level from context
    const [chatHistory, setChatHistory] = useState([]);
    const chatContentRef = useRef(null);

    // Function to scroll to bottom
    const scrollToBottom = () => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    };

    // Scroll to bottom when chat history changes
    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    if (!isGameActive) {
        return <div className={styles.container}>Game is not active. Start a new game.</div>;
    }

    if (!situations.length) return <div>Loading...</div>;

    const currentSituation = situations[currentSituationIndex];

    const handleAnswerClick = (answer) => {
        setChatHistory((prev) => [
            ...prev,
            { type: "received", text: currentSituation.text },
            { type: "self", text: answer.text },
        ]);
        handleAnswer(answer.isCorrect);
    };

    return (
        <div className={styles.pageContainer}>
            {/* ScoreLevelTracker moved to ChatGame */}
            <ScoreLevelTracker
                currentLevel={currentLevel}
                totalLevels={5} // You can adjust the total levels here
                score={score}
            />
            <div className={styles.chatContainer}>
                <div className={styles.chatHeader}>
                    <div className={styles.profilePicture}></div>
                    <div className={styles.username}>Teresa Lai</div>
                </div>

                <div className={styles.scrollableContent}>
                    <div className={styles.chatContent} ref={chatContentRef}>
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

                        <div className={`${styles.message} ${styles.received}`}>
                            {currentSituation.text}
                        </div>
                    </div>

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
                </div>
            </div>
        </div>
    );
};

export default ChatGame;
