import { Card } from '../../components';
import { useMemoryCards } from '../../contexts/memoryContext';

const CardContainer = () => {
  const { cards, handleCardItemClick, disabledCards } = useMemoryCards();
  return (
    <div className='card-container'>
      {cards.map((card, index) => (
        <Card
          card={card}
          key={card?.id || index}
          onClick={handleCardItemClick}
          disabled={disabledCards}
        />
      ))}
    </div>
  );
};

export default CardContainer;
