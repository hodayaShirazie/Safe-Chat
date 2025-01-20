import PropTypes from 'prop-types'; // Import PropTypes
import styles from './ScoreLevelTracker.module.css';

const ScoreLevelTracker = ({ currentLevel, totalLevels, score }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.levelTracker}>
        <h3>Level Progress</h3>
        <div className={styles.levelSquares}>
          {Array.from({ length: totalLevels }).map((_, index) => (
            <div
              key={index}
              className={`${styles.square} ${index < currentLevel ? styles.filled : ''}`}
            ></div>
          ))}
        </div>
      </div> */}
      <div className={styles.score}>
        <h3>SCORE</h3>
        <div className={styles.scoreValue}>{score}</div>
      </div>
    </div>
  );
};

// Add PropTypes validation
ScoreLevelTracker.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  totalLevels: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default ScoreLevelTracker;
