// CardText.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import './CardText.css';

const CardText = ({ question, answer, onNext }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const cardStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    cursor: 'pointer',
  };

  const handleClick = () => {
    toggleAnswer(); // Toggle the answer when the card is clicked
    onNext(); // Call the parent component's onNext function
  };

  return (
    <div className="flashcard" style={cardStyle} onClick={handleClick}>
      {showAnswer ? answer : question}
    </div>
  );
};

CardText.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired, // Pass a callback function to handle next card
};

export default CardText;
