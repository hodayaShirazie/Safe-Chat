import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import RedFlag from './components/RedFlag/RedFlag'; // Import the RedFlag component


import projectLogo from './assets/project-logo.png'
import ChatGame from './components/ChatGame/ChatGame';
import { DuckContext } from './context/DuckContext';
import RandomDuck from './components/RandomDuck/RandomDuck';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={projectLogo} alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            <Link to="/" className={styles.appLink}>Home</Link>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/red-flag" element={<RedFlag />} /> {/* Red flag page route */}
            <Route path="/chat-game" element={<ChatGame />} /> {/* chatgame page route */}
            <Route path="/duck-context" element={<DuckContext />} /> {/* chatgame page route */}
            <Route path="/random-duck" element={<RandomDuck />} /> {/* chatgame page route */}

          </Routes>
        </main>
        {/* <footer className={styles.footer}>
          <p>&copy; 2024 My App</p>
        </footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;



