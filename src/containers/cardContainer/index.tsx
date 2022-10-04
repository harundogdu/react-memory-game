import React from 'react';
import { Card } from '../../components';
import { useMemoryCards } from '../../contexts/memoryContext';

const CardContainer = () => {
  const { cards, setCards } = useMemoryCards();
  console.log(cards)
  return (
    <div className='card-container'>
      {cards.map((card, index) => (
        <Card card={card} key={card?.id || index} />
      ))}
    </div>
  );
};

export default CardContainer;
