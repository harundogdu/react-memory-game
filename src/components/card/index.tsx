import React from 'react';
import { IMemoryCard } from '../../types/memoryCard';

type ICardProps = {
  card: IMemoryCard;
  onClick: (card: IMemoryCard) => void;
  disabled: boolean;
};

const Card: React.FC<ICardProps> = ({ card, onClick, disabled }) => {
  const className = `${card.isFlipped ? 'flipped' : ''}`;

  const handleClick = () => {
    if (!disabled) {
      onClick(card);
    }
  };

  return (
    <div className='card'>
      <div className={className}>
        <img className='front' src={card.image} alt={card.name} />
        <img
          className='back'
          src='/img/cover.png'
          alt='Card Cover'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
