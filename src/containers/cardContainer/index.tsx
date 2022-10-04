import React from 'react';
import { Card } from '../../components';
import { useMemoryCards } from '../../contexts/memoryContext';

const CardContainer = () => {
  const { cards, handleCardItemClick } = useMemoryCards();
  return (
    <div className='card-container'>
      {cards.map((card, index) => (
        <Card card={card} key={card?.id || index} onClick={handleCardItemClick} />
      ))}
    </div>
  );
};

export default CardContainer;
