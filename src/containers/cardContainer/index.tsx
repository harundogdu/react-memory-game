import React from 'react';
import { Card } from '../../components';
import { useMemoryCards } from '../../contexts/memoryContext';

const CardContainer = () => {
  const { cards, setCards } = useMemoryCards();

  return (
    <div className='card-container'>
      {cards.map(card => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default CardContainer;
