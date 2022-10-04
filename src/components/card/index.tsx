import React from 'react';
import { IMemoryCard } from '../../types/memoryCard';

type ICardProps = {
  card: IMemoryCard;
};

const Card: React.FC<ICardProps> = ({ card }) => {
  return (
    <div className='card'>
      <img src={card.image} alt={card.name} />
    </div>
  );
};

export default Card;
