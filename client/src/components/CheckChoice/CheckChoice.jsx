// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import './CheckChoice.css';

// function CheckChoice({ correctAnswer, onFeedbackReceived }) {
//   const [userChoice, setUserChoice] = useState("");
//   const [feedback, setFeedback] = useState("");

//   const checkAnswer = (chosenOption) => {
//     setUserChoice(chosenOption);

//     if (chosenOption === correctAnswer) {
//       setFeedback("You are right! This situation is indeed good");
//       onFeedbackReceived(true);
//     } else {
//       setFeedback("You are wrong, this is not a good situation");
//       onFeedbackReceived(false);
//     }
//   };

//   return (
//     <div className="check-choice-container">
//       <p>You chase: {userChoice}</p>
//       <p>{feedback}</p>
//     </div>
//   );
// }

// CheckChoice.propTypes = {
//   correctAnswer: PropTypes.string.isRequired,
//   onFeedbackReceived: PropTypes.func.isRequired,
// };

// export default CheckChoice;


function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    return "You are right! This situation is indeed good";
  } else {
    return "You are wrong, this is not a good situation";
  }
}

//test func
console.log(checkAnswer("1", "1")); // Output: You are right! This situation is indeed good
console.log(checkAnswer("1", "2"));  // Output: You are wrong, this is not a good situation
