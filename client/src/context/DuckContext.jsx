import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

const DuckContext = createContext();

const DuckProvider = ({ children }) => {
    const [situations, setSituations] = useState([]);
    const [currentSituationIndex, setCurrentSituationIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);

    // Fetch situations
    const getSituations = async () => {
        try {
            const response = await api.get('/chat/situations');
            setSituations(response.data.situations);
        } catch (error) {
            console.error('Error fetching situations:', error);
        }
    };

    useEffect(() => {
        getSituations();
    }, []);

    // Handle answer and score
    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 10);
        if (currentSituationIndex < situations.length - 1) {
            setCurrentSituationIndex(currentSituationIndex + 1);
        } else {
            alert(`Game Over! Your score is ${score + (isCorrect ? 1 : 0)}`);
            setIsGameActive(false);
        }
    };

    // Start a new game
    const startNewGame = () => {
        setScore(0);
        setCurrentSituationIndex(0);
        setIsGameActive(true);
    };

    return (
        <DuckContext.Provider value={{ situations, currentSituationIndex, score, isGameActive, handleAnswer, startNewGame }}>
            {children}
        </DuckContext.Provider>
    );
};

DuckProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { DuckContext, DuckProvider };