import { useState } from 'react';
import styles from './Home.module.css';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Home = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);

  const navigate = useNavigate();

  const handleStartPlaying = () => {
    setShowAuthForm(true); // Show the auth form
  };

  const handleLoginOrSignup = () => {
    navigate('/chat-game'); // Navigate to the chat game page
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>The Game</h1>
      {!showAuthForm && (
        <button
          className={styles.startPlayingButton}
          onClick={handleStartPlaying}
        >
          Start Playing
        </button>
      )}
      {showAuthForm && <AuthForm onClose={handleLoginOrSignup} />}
    </div>
  );
};

export default Home;
