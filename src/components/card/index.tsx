import React from 'react';
import { IMemoryCard } from '../../types/memoryCard';

type ICardProps = {
  card: IMemoryCard;
  onClick: (card: IMemoryCard) => void;
};

const Card: React.FC<ICardProps> = ({ card, onClick }) => {

  const handleClick = () => {
    onClick(card);
  };

  return (
    <div className='card'>
      <div className={`${card.isFlipped ? 'flipped' : ''} `}>
        <img className='back' src={card.image} alt={card.name} />
        <img
          className='front'
          src='/img/cover.png'
          alt='Card Cover'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
