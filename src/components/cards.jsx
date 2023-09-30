// Cards.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import CardText from './CardText';

const Cards = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    // Generate a random index for the next card
    const randomIndex = Math.floor(Math.random() * flashcards.length);

    // Make sure the next card index is not the same as the current one
    if (randomIndex !== currentCardIndex) {
      setCurrentCardIndex(randomIndex);
    }
  };

  return (
    <div>
      <div className="flashcard-container">
        <CardText
          question={flashcards[currentCardIndex].question}
          answer={flashcards[currentCardIndex].answer}
          onNext={nextCard} // Pass the nextCard function as a callback
        />
      </div>
      <button onClick={nextCard}>Next Card</button>
    </div>
  );
};

Cards.propTypes = {
  flashcards: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;
